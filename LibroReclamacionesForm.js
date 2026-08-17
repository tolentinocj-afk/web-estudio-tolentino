"use client";

/* ==========================================================================
   LibroReclamacionesForm — hoja del Libro de Reclamaciones virtual
   --------------------------------------------------------------------------
   Recoge todos los datos que exige el Reglamento del Libro de Reclamaciones
   (Decreto Supremo 011-2011-PCM) y los envía a /api/libro-de-reclamaciones,
   que genera el código correlativo y el sello de fecha y hora.

   Al registrarse, la pantalla muestra la CONSTANCIA con el código, lista para
   imprimir o guardar en PDF: esa es la copia del consumidor.
   ========================================================================== */

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { firm, oficinas, servicios } from "@/content/site";

const INICIAL = {
  tipoRegistro: "",
  nombre: "",
  tipoDocumento: "DNI",
  numeroDocumento: "",
  domicilio: "",
  correo: "",
  telefono: "",
  menorDeEdad: false,
  apoderado: "",
  servicio: "",
  montoReclamado: "",
  detalle: "",
  pedido: "",
  consentimiento: false,
  botcheck: "",
};

/* Validación en cliente. El servidor vuelve a validar lo obligatorio. */
function validar(v) {
  const e = {};

  if (!v.tipoRegistro) e.tipoRegistro = "Indica si es un reclamo o una queja.";
  if (!v.nombre.trim()) e.nombre = "Indica tu nombre completo.";
  if (!v.numeroDocumento.trim())
    e.numeroDocumento = "Indica el número de tu documento de identidad.";
  else if (v.tipoDocumento === "DNI" && !/^\d{8}$/.test(v.numeroDocumento.trim()))
    e.numeroDocumento = "El DNI debe tener 8 dígitos.";
  if (!v.domicilio.trim()) e.domicilio = "Indica tu domicilio.";
  if (!v.correo.trim()) e.correo = "Indica un correo electrónico.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.correo.trim()))
    e.correo = "El formato del correo no es válido.";
  if (!v.telefono.trim()) e.telefono = "Indica un teléfono de contacto.";
  if (v.menorDeEdad && !v.apoderado.trim())
    e.apoderado =
      "Si el consumidor es menor de edad, indica el nombre del padre o apoderado.";
  if (!v.servicio.trim())
    e.servicio = "Identifica el servicio contratado o materia del registro.";
  if (!v.detalle.trim()) e.detalle = "Describe el hecho que motiva el registro.";
  else if (v.detalle.trim().length < 20)
    e.detalle = "Necesitamos más detalle del hecho (mínimo 20 caracteres).";
  if (!v.pedido.trim()) e.pedido = "Indica tu pedido concreto.";
  if (!v.consentimiento)
    e.consentimiento = "Debes autorizar el tratamiento de tus datos.";

  return e;
}

export default function LibroReclamacionesForm() {
  const [v, setV] = useState(INICIAL);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("inactivo"); // inactivo | enviando | ok | error
  const [mensajeError, setMensajeError] = useState("");
  const [constancia, setConstancia] = useState(null);

  const cambiar = (e) => {
    const { name, value, type, checked } = e.target;
    setV((x) => ({ ...x, [name]: type === "checkbox" ? checked : value }));
    if (errores[name]) setErrores((x) => ({ ...x, [name]: undefined }));
  };

  const enviar = async (e) => {
    e.preventDefault();
    if (v.botcheck) return;

    const err = validar(v);
    setErrores(err);
    if (Object.keys(err).length > 0) {
      document.getElementById(`lr-${Object.keys(err)[0]}`)?.focus();
      return;
    }

    setEstado("enviando");
    setMensajeError("");

    try {
      const res = await fetch("/api/libro-de-reclamaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      const data = await res.json();

      if (data.ok && data.registro) {
        setConstancia(data.registro);
        setEstado("ok");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setMensajeError(
          data.error || "No se pudo registrar la hoja. Inténtalo nuevamente.",
        );
        setEstado("error");
      }
    } catch {
      setMensajeError(
        "No se pudo registrar la hoja por un problema de conexión. Inténtalo nuevamente.",
      );
      setEstado("error");
    }
  };

  /* --- Estilos compartidos --------------------------------------------- */
  const campo = (n) =>
    `w-full border bg-white px-4 py-3.5 text-[0.92rem] text-ink transition-colors duration-200 placeholder:text-muted/55 focus:outline-none ${
      errores[n] ? "border-red-600/70 focus:border-red-600" : "border-line focus:border-bronze"
    }`;

  const Etiqueta = ({ htmlFor, children, opcional }) => (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.72rem] font-semibold tracking-[0.14em] text-navy uppercase"
    >
      {children}
      {opcional && (
        <span className="ml-2 font-normal tracking-normal text-muted normal-case">
          (opcional)
        </span>
      )}
    </label>
  );

  const Error = ({ n }) =>
    errores[n] ? (
      <p role="alert" className="mt-2 text-[0.8rem] text-red-700">
        {errores[n]}
      </p>
    ) : null;

  /* ======================================================================
     CONSTANCIA — copia del consumidor
     ====================================================================== */
  if (estado === "ok" && constancia) {
    return (
      <div>
        <div className="mb-8 flex flex-col gap-4 print:hidden sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.12em] text-bronze uppercase">
            <Icon name="check" className="h-5 w-5" />
            Hoja registrada correctamente
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-[0.74rem] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-bronze"
            >
              Imprimir o guardar en PDF
            </button>
            <button
              type="button"
              onClick={() => {
                setV(INICIAL);
                setConstancia(null);
                setEstado("inactivo");
              }}
              className="inline-flex items-center gap-2 border border-navy/25 px-6 py-3.5 text-[0.74rem] font-semibold tracking-[0.14em] text-navy uppercase transition-colors hover:border-bronze hover:text-bronze"
            >
              Registrar otra hoja
            </button>
          </div>
        </div>

        {/* Documento imprimible */}
        <div id="constancia" className="border border-navy/25 bg-white">
          {/* Encabezado */}
          <div className="border-b border-navy/20 px-8 py-7">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-bronze uppercase">
              Libro de Reclamaciones virtual
            </p>
            <h2 className="mt-2 font-serif text-2xl text-navy">
              Constancia de registro N.° {constancia.codigo}
            </h2>
            <p className="mt-3 text-[0.85rem] text-muted">
              Registrada el {constancia.fecha} a las {constancia.hora} horas
              (hora de Perú).
            </p>
          </div>

          {/* Datos del proveedor */}
          <Bloque titulo="1. Identificación del proveedor">
            <Dato etiqueta="Razón social" valor={firm.razonSocial} />
            <Dato etiqueta="RUC" valor={firm.ruc} />
            <Dato
              etiqueta="Domicilio"
              valor={`${oficinas[0].direccion}, ${oficinas[0].distrito}`}
            />
          </Bloque>

          {/* Datos del consumidor */}
          <Bloque titulo="2. Identificación del consumidor reclamante">
            <Dato etiqueta="Nombre completo" valor={constancia.nombre} />
            <Dato
              etiqueta="Documento de identidad"
              valor={`${constancia.tipoDocumento} ${constancia.numeroDocumento}`}
            />
            <Dato etiqueta="Domicilio" valor={constancia.domicilio} />
            <Dato etiqueta="Correo electrónico" valor={constancia.correo} />
            <Dato etiqueta="Teléfono" valor={constancia.telefono} />
            <Dato etiqueta="¿Es menor de edad?" valor={constancia.menorDeEdad} />
            {constancia.menorDeEdad === "Sí" && (
              <Dato
                etiqueta="Padre o apoderado"
                valor={constancia.apoderado}
              />
            )}
          </Bloque>

          {/* Bien contratado */}
          <Bloque titulo="3. Identificación del bien contratado">
            <Dato etiqueta="Servicio" valor={constancia.servicio} />
            <Dato
              etiqueta="Monto reclamado"
              valor={constancia.montoReclamado}
            />
          </Bloque>

          {/* Detalle */}
          <Bloque titulo="4. Detalle de la reclamación y pedido del consumidor">
            <Dato etiqueta="Tipo de registro" valor={constancia.tipoRegistro} />
            <Dato etiqueta="Detalle" valor={constancia.detalle} ancho />
            <Dato etiqueta="Pedido" valor={constancia.pedido} ancho />
          </Bloque>

          {/* Aviso legal */}
          <div className="bg-paper-alt px-8 py-7 text-[0.84rem] leading-relaxed text-muted">
            <p>
              <strong className="text-navy">Plazo de respuesta.</strong> El
              proveedor debe dar respuesta al reclamo en un plazo no mayor a
              quince (15) días hábiles improrrogables, contados desde el día
              siguiente de la presentación, conforme al Código de Protección y
              Defensa del Consumidor (Ley 29571), modificado por la Ley 31435.
            </p>
            <p className="mt-4">
              La formulación del reclamo no impide acudir a otras vías de
              solución de controversias ni constituye una vía previa para
              denunciar ante el INDECOPI.
            </p>
            <p className="mt-4">
              Conserva esta constancia. El código{" "}
              <strong className="text-navy">{constancia.codigo}</strong> es el
              número de tu registro.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ======================================================================
     FORMULARIO
     ====================================================================== */
  return (
    <form onSubmit={enviar} noValidate className="space-y-12">
      <input
        type="checkbox"
        name="botcheck"
        value={v.botcheck}
        onChange={cambiar}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* --- 1. Tipo de registro ------------------------------------------ */}
      <fieldset>
        <legend className="font-serif text-xl text-navy">
          1. Tipo de registro
        </legend>
        <div className="rule-gold mt-4" aria-hidden="true" />

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              valor: "Reclamo",
              definicion:
                "Disconformidad relacionada con los servicios contratados.",
            },
            {
              valor: "Queja",
              definicion:
                "Malestar o descontento respecto de la atención al público, no relacionado con el servicio en sí.",
            },
          ].map((op) => (
            <label
              key={op.valor}
              className={`flex cursor-pointer gap-4 border p-5 transition-colors ${
                v.tipoRegistro === op.valor
                  ? "border-bronze bg-paper-alt"
                  : "border-line bg-white hover:border-bronze/50"
              }`}
            >
              <input
                type="radio"
                name="tipoRegistro"
                id="lr-tipoRegistro"
                value={op.valor}
                checked={v.tipoRegistro === op.valor}
                onChange={cambiar}
                className="mt-1 h-4 w-4 flex-none accent-[#8A7355]"
              />
              <span>
                <span className="block text-[0.78rem] font-semibold tracking-[0.14em] text-navy uppercase">
                  {op.valor}
                </span>
                <span className="mt-1.5 block text-[0.85rem] leading-snug text-muted">
                  {op.definicion}
                </span>
              </span>
            </label>
          ))}
        </div>
        <Error n="tipoRegistro" />
      </fieldset>

      {/* --- 2. Datos del consumidor -------------------------------------- */}
      <fieldset>
        <legend className="font-serif text-xl text-navy">
          2. Datos del consumidor
        </legend>
        <div className="rule-gold mt-4" aria-hidden="true" />

        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Etiqueta htmlFor="lr-nombre">Nombre completo</Etiqueta>
            <input
              id="lr-nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              value={v.nombre}
              onChange={cambiar}
              aria-invalid={!!errores.nombre}
              className={campo("nombre")}
              placeholder="Nombres y apellidos"
            />
            <Error n="nombre" />
          </div>

          <div>
            <Etiqueta htmlFor="lr-tipoDocumento">Tipo de documento</Etiqueta>
            <select
              id="lr-tipoDocumento"
              name="tipoDocumento"
              value={v.tipoDocumento}
              onChange={cambiar}
              className={`${campo("tipoDocumento")} select-brand`}
            >
              <option>DNI</option>
              <option>Carné de extranjería</option>
              <option>Pasaporte</option>
              <option>RUC</option>
            </select>
          </div>

          <div>
            <Etiqueta htmlFor="lr-numeroDocumento">Número de documento</Etiqueta>
            <input
              id="lr-numeroDocumento"
              name="numeroDocumento"
              type="text"
              inputMode="numeric"
              value={v.numeroDocumento}
              onChange={cambiar}
              aria-invalid={!!errores.numeroDocumento}
              className={campo("numeroDocumento")}
            />
            <Error n="numeroDocumento" />
          </div>

          <div className="sm:col-span-2">
            <Etiqueta htmlFor="lr-domicilio">Domicilio</Etiqueta>
            <input
              id="lr-domicilio"
              name="domicilio"
              type="text"
              autoComplete="street-address"
              value={v.domicilio}
              onChange={cambiar}
              aria-invalid={!!errores.domicilio}
              className={campo("domicilio")}
              placeholder="Dirección, distrito y provincia"
            />
            <Error n="domicilio" />
          </div>

          <div>
            <Etiqueta htmlFor="lr-correo">Correo electrónico</Etiqueta>
            <input
              id="lr-correo"
              name="correo"
              type="email"
              autoComplete="email"
              value={v.correo}
              onChange={cambiar}
              aria-invalid={!!errores.correo}
              className={campo("correo")}
            />
            <Error n="correo" />
          </div>

          <div>
            <Etiqueta htmlFor="lr-telefono">Teléfono</Etiqueta>
            <input
              id="lr-telefono"
              name="telefono"
              type="tel"
              autoComplete="tel"
              value={v.telefono}
              onChange={cambiar}
              aria-invalid={!!errores.telefono}
              className={campo("telefono")}
            />
            <Error n="telefono" />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="lr-menorDeEdad"
              className="flex cursor-pointer items-center gap-3 text-[0.9rem] text-muted"
            >
              <input
                id="lr-menorDeEdad"
                name="menorDeEdad"
                type="checkbox"
                checked={v.menorDeEdad}
                onChange={cambiar}
                className="h-4 w-4 flex-none accent-[#8A7355]"
              />
              El consumidor es menor de edad
            </label>
          </div>

          {v.menorDeEdad && (
            <div className="sm:col-span-2">
              <Etiqueta htmlFor="lr-apoderado">
                Nombre del padre, madre o apoderado
              </Etiqueta>
              <input
                id="lr-apoderado"
                name="apoderado"
                type="text"
                value={v.apoderado}
                onChange={cambiar}
                aria-invalid={!!errores.apoderado}
                className={campo("apoderado")}
              />
              <Error n="apoderado" />
            </div>
          )}
        </div>
      </fieldset>

      {/* --- 3. Servicio contratado --------------------------------------- */}
      <fieldset>
        <legend className="font-serif text-xl text-navy">
          3. Identificación del servicio contratado
        </legend>
        <div className="rule-gold mt-4" aria-hidden="true" />

        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <div>
            <Etiqueta htmlFor="lr-servicio">Servicio</Etiqueta>
            <select
              id="lr-servicio"
              name="servicio"
              value={v.servicio}
              onChange={cambiar}
              aria-invalid={!!errores.servicio}
              className={`${campo("servicio")} select-brand`}
            >
              <option value="">Selecciona el servicio</option>
              {servicios.map((s) => (
                <option key={s.slug} value={s.titulo}>
                  {s.titulo}
                </option>
              ))}
              <option value="Otro servicio">Otro servicio</option>
            </select>
            <Error n="servicio" />
          </div>

          <div>
            <Etiqueta htmlFor="lr-montoReclamado" opcional>
              Monto reclamado
            </Etiqueta>
            <input
              id="lr-montoReclamado"
              name="montoReclamado"
              type="text"
              value={v.montoReclamado}
              onChange={cambiar}
              className={campo("montoReclamado")}
              placeholder="S/ 0.00"
            />
          </div>
        </div>
      </fieldset>

      {/* --- 4. Detalle y pedido ------------------------------------------ */}
      <fieldset>
        <legend className="font-serif text-xl text-navy">
          4. Detalle del hecho y pedido
        </legend>
        <div className="rule-gold mt-4" aria-hidden="true" />

        <div className="mt-7 space-y-6">
          <div>
            <Etiqueta htmlFor="lr-detalle">Detalle del hecho</Etiqueta>
            <textarea
              id="lr-detalle"
              name="detalle"
              rows={5}
              value={v.detalle}
              onChange={cambiar}
              aria-invalid={!!errores.detalle}
              className={`${campo("detalle")} resize-y`}
              placeholder="Describe qué ocurrió, cuándo y con quién."
            />
            <Error n="detalle" />
          </div>

          <div>
            <Etiqueta htmlFor="lr-pedido">Pedido concreto</Etiqueta>
            <textarea
              id="lr-pedido"
              name="pedido"
              rows={3}
              value={v.pedido}
              onChange={cambiar}
              aria-invalid={!!errores.pedido}
              className={`${campo("pedido")} resize-y`}
              placeholder="Indica qué solicitas al proveedor."
            />
            <Error n="pedido" />
          </div>
        </div>
      </fieldset>

      {/* --- Consentimiento ------------------------------------------------ */}
      <div>
        <label
          htmlFor="lr-consentimiento"
          className="flex cursor-pointer items-start gap-3 text-[0.85rem] leading-relaxed text-muted"
        >
          <input
            id="lr-consentimiento"
            name="consentimiento"
            type="checkbox"
            checked={v.consentimiento}
            onChange={cambiar}
            aria-invalid={!!errores.consentimiento}
            className="mt-1 h-4 w-4 flex-none accent-[#8A7355]"
          />
          <span>
            Autorizo el tratamiento de mis datos personales conforme a la Ley
            29733 y a la política de privacidad del estudio, con la finalidad de
            atender y responder el presente registro.
          </span>
        </label>
        <Error n="consentimiento" />
      </div>

      {estado === "error" && (
        <p
          role="alert"
          className="border border-red-600/40 bg-red-50 px-4 py-3 text-[0.85rem] text-red-800"
        >
          {mensajeError}{" "}
          <a href={`mailto:${firm.email}`} className="underline">
            {firm.email}
          </a>
        </p>
      )}

      <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="inline-flex items-center justify-center gap-2 bg-navy px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-bronze disabled:cursor-not-allowed disabled:opacity-60"
        >
          {estado === "enviando" ? "Registrando..." : "Registrar hoja"}
          {estado !== "enviando" && <Icon name="flecha" className="h-4 w-4" />}
        </button>
        <p className="text-[0.78rem] leading-snug text-muted">
          Al registrar obtendrás un código correlativo y una constancia que
          podrás imprimir o guardar.
        </p>
      </div>
    </form>
  );
}

/* --------------------------------------------------------------------------
   Piezas de la constancia
   -------------------------------------------------------------------------- */

function Bloque({ titulo, children }) {
  return (
    <section className="border-b border-line px-8 py-7">
      <h3 className="text-[0.7rem] font-semibold tracking-[0.16em] text-bronze uppercase">
        {titulo}
      </h3>
      <dl className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">{children}</dl>
    </section>
  );
}

function Dato({ etiqueta, valor, ancho = false }) {
  return (
    <div className={ancho ? "sm:col-span-2" : ""}>
      <dt className="text-[0.72rem] tracking-[0.08em] text-muted uppercase">
        {etiqueta}
      </dt>
      <dd className="mt-1 text-[0.92rem] leading-relaxed whitespace-pre-line text-ink">
        {valor}
      </dd>
    </div>
  );
}
