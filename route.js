/* ==========================================================================
   POST /api/libro-de-reclamaciones
   --------------------------------------------------------------------------
   Registra una hoja del Libro de Reclamaciones virtual.

   Qué hace el servidor y no el navegador, y por qué:
   - Genera el CÓDIGO CORRELATIVO y la FECHA Y HORA del registro. Si esto se
     hiciera en el navegador, el consumidor podría alterarlos y el registro
     perdería valor probatorio.
   - Valida los campos obligatorios que exige el Reglamento del Libro de
     Reclamaciones (Decreto Supremo 011-2011-PCM).
   - Envía el registro completo al correo del estudio a través de Web3Forms.

   LÍMITE CONOCIDO, DOCUMENTADO A PROPÓSITO:
   sin base de datos, el registro persistente es el correo que llega a la
   bandeja del estudio, más la constancia que el consumidor imprime o guarda
   en PDF desde la pantalla de confirmación. El panel de consulta interno y la
   correlatividad estrictamente secuencial exigen almacenamiento persistente.
   Ver la sección correspondiente del README.

   Requiere una variable de entorno con la clave de Web3Forms:
     WEB3FORMS_KEY=...           (preferida, no se expone al navegador)
     NEXT_PUBLIC_WEB3FORMS_KEY=  (alternativa, la misma del formulario de contacto)
   ========================================================================== */

import { NextResponse } from "next/server";

const ZONA = "America/Lima";

/* Fecha y hora oficiales del registro, siempre en hora de Perú */
function sellarTiempo() {
  const ahora = new Date();

  const partes = new Intl.DateTimeFormat("es-PE", {
    timeZone: ZONA,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .formatToParts(ahora)
    .reduce((acc, p) => ({ ...acc, [p.type]: p.value }), {});

  const { year, month, day, hour, minute, second } = partes;

  return {
    fecha: `${day}/${month}/${year}`,
    hora: `${hour}:${minute}:${second}`,
    // Base del código correlativo: estrictamente creciente en el tiempo
    compacto: `${year}${month}${day}${hour}${minute}${second}`,
    iso: ahora.toISOString(),
  };
}

/* Código correlativo: LR-AAAAMMDDHHMMSS-XXX
   Creciente y único. El sufijo aleatorio evita colisiones entre dos registros
   presentados en el mismo segundo. */
function generarCodigo(compacto) {
  const sufijo = Math.floor(Math.random() * 900 + 100);
  return `LR-${compacto}-${sufijo}`;
}

/* Campos que el reglamento exige como mínimo */
const OBLIGATORIOS = [
  ["nombre", "nombre completo del consumidor"],
  ["tipoDocumento", "tipo de documento de identidad"],
  ["numeroDocumento", "número de documento de identidad"],
  ["domicilio", "domicilio del consumidor"],
  ["correo", "correo electrónico"],
  ["telefono", "teléfono"],
  ["tipoRegistro", "tipo de registro (reclamo o queja)"],
  ["servicio", "identificación del servicio contratado"],
  ["detalle", "detalle del hecho"],
  ["pedido", "pedido concreto del consumidor"],
];

export async function POST(request) {
  let datos;
  try {
    datos = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo leer el formulario." },
      { status: 400 },
    );
  }

  /* Trampa antispam: si el campo oculto viene lleno, se descarta en silencio */
  if (datos.botcheck) {
    return NextResponse.json({ ok: true, descartado: true });
  }

  /* Validación del lado del servidor */
  const faltantes = OBLIGATORIOS.filter(
    ([campo]) => !String(datos[campo] || "").trim(),
  ).map(([, etiqueta]) => etiqueta);

  if (faltantes.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: `Faltan datos obligatorios: ${faltantes.join(", ")}.`,
      },
      { status: 400 },
    );
  }

  if (!datos.consentimiento) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Debes autorizar el tratamiento de tus datos personales para registrar la hoja.",
      },
      { status: 400 },
    );
  }

  /* Sello de tiempo y código correlativo, generados aquí y no en el navegador */
  const t = sellarTiempo();
  const codigo = generarCodigo(t.compacto);

  const registro = {
    codigo,
    fecha: t.fecha,
    hora: t.hora,
    tipoRegistro: datos.tipoRegistro,
    nombre: datos.nombre,
    tipoDocumento: datos.tipoDocumento,
    numeroDocumento: datos.numeroDocumento,
    domicilio: datos.domicilio,
    correo: datos.correo,
    telefono: datos.telefono,
    menorDeEdad: datos.menorDeEdad ? "Sí" : "No",
    apoderado: datos.apoderado || "No aplica",
    servicio: datos.servicio,
    montoReclamado: datos.montoReclamado || "No indicado",
    detalle: datos.detalle,
    pedido: datos.pedido,
  };

  /* Envío del registro al correo del estudio.
     La clave por defecto es la misma del formulario de contacto; las variables
     de entorno, si existen, tienen prioridad. */
  const clave =
    process.env.WEB3FORMS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    "28c9c53f-a23e-4055-9bc3-09347cb20612";

  if (!clave) {
    // Sin clave configurada no hay a dónde enviar el registro. Se avisa con
    // claridad en lugar de dar por registrada una hoja que nadie recibiría.
    return NextResponse.json(
      {
        ok: false,
        error:
          "El Libro de Reclamaciones aún no está conectado al correo del estudio. Escríbenos directamente mientras se completa la configuración.",
        sinConfigurar: true,
      },
      { status: 503 },
    );
  }

  try {
    const respuesta = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: clave,
        subject: `LIBRO DE RECLAMACIONES ${registro.tipoRegistro.toUpperCase()} — ${codigo}`,
        from_name: "Libro de Reclamaciones — Web",
        "Código correlativo": registro.codigo,
        "Fecha de registro": registro.fecha,
        "Hora de registro": registro.hora,
        "Tipo de registro": registro.tipoRegistro,
        "Nombre del consumidor": registro.nombre,
        "Documento de identidad": `${registro.tipoDocumento} ${registro.numeroDocumento}`,
        Domicilio: registro.domicilio,
        "Correo electrónico": registro.correo,
        Teléfono: registro.telefono,
        "¿Es menor de edad?": registro.menorDeEdad,
        "Padre o apoderado": registro.apoderado,
        "Servicio contratado": registro.servicio,
        "Monto reclamado": registro.montoReclamado,
        "Detalle del hecho": registro.detalle,
        "Pedido del consumidor": registro.pedido,
        "Plazo legal de respuesta":
          "15 días hábiles improrrogables desde el día siguiente de la presentación",
        Consentimiento: "Otorgado conforme a la Ley 29733",
      }),
    });

    const resultado = await respuesta.json();

    if (!resultado.success) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "No se pudo registrar la hoja. Inténtalo nuevamente en unos minutos.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, registro });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "No se pudo registrar la hoja por un problema de conexión. Inténtalo nuevamente.",
      },
      { status: 502 },
    );
  }
}
