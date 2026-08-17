/* ==========================================================================
   /terminos-de-uso
   --------------------------------------------------------------------------
   ⚠️ BORRADOR TÉCNICO PARA REVISIÓN DEL ESTUDIO.
   Punto central: dejar constancia de que el contenido del sitio es informativo
   y no constituye asesoría legal, contable ni tributaria para un caso
   concreto, y que la relación profesional nace del contrato de servicios, no
   del envío de un formulario.
   ========================================================================== */

import PageHeader from "@/components/layout/PageHeader";
import LegalPage from "@/components/layout/LegalPage";
import { firm, oficinas } from "@/content/site";

export const metadata = {
  title: "Términos de Uso",
  description:
    "Términos y condiciones de uso del sitio web de Estudio Tolentino & Asociados S.A.C.",
  alternates: { canonical: "/terminos-de-uso" },
};

const ACTUALIZADO = "15 de agosto de 2026";

const secciones = [
  {
    id: "titular",
    titulo: "Titular del sitio y aceptación de los términos",
    parrafos: [
      `Este sitio web es operado por ${firm.razonSocial}, con RUC ${firm.ruc} y domicilio en ${oficinas[0].direccion}, ${oficinas[0].distrito} (en adelante, el Estudio).`,
      "El acceso y uso del sitio implican la aceptación plena de estos términos. Si no estás de acuerdo con alguno de ellos, te pedimos abstenerte de utilizarlo.",
    ],
  },
  {
    id: "no-asesoria",
    titulo: "El contenido es informativo y no constituye asesoría",
    parrafos: [
      "Toda la información publicada en este sitio, incluidos los artículos de la sección Recursos, las descripciones de servicios y las preguntas frecuentes, tiene finalidad exclusivamente informativa y general.",
      "Ese contenido no constituye asesoría legal, contable, tributaria ni financiera para un caso concreto, ni sustituye la evaluación profesional de una situación particular. Las normas cambian, los criterios de la administración y de los tribunales evolucionan, y dos casos que parecen iguales pueden resolverse de forma distinta según sus hechos y su documentación.",
      "El Estudio no asume responsabilidad por las decisiones que se adopten sobre la base de la información publicada en este sitio sin una asesoría profesional previa que evalúe el caso concreto.",
    ],
  },
  {
    id: "relacion",
    titulo: "El envío de una consulta no crea una relación profesional",
    parrafos: [
      "Completar el formulario de contacto, escribir por WhatsApp o enviar un correo no genera por sí solo una relación profesional entre el usuario y el Estudio, ni obliga al Estudio a asumir la defensa o el encargo consultado.",
      "La relación profesional nace únicamente cuando ambas partes acuerdan por escrito el alcance del servicio y los honorarios correspondientes, mediante la aceptación de la propuesta o la suscripción del contrato de servicios.",
      "Mientras esa relación no exista, se recomienda no remitir información confidencial ni documentación sensible a través del sitio. El deber de reserva profesional del Estudio se aplica en todo caso, pero los canales digitales abiertos no son el medio adecuado para transmitir información delicada.",
    ],
  },
  {
    id: "plazos",
    titulo: "Plazos y caducidad de derechos",
    parrafos: [
      "Muchos asuntos legales y tributarios están sujetos a plazos perentorios cuya pérdida es irreversible. El usuario es el único responsable del control de sus propios plazos mientras no exista un encargo profesional aceptado por escrito.",
      "El envío de una consulta a través del sitio no interrumpe ni suspende plazo alguno, y el Estudio no garantiza un tiempo de respuesta determinado antes de la aceptación del encargo.",
    ],
  },
  {
    id: "propiedad",
    titulo: "Propiedad intelectual",
    parrafos: [
      "Los textos, artículos, el imagotipo, el diseño, la estructura y los demás elementos del sitio son de titularidad del Estudio o se utilizan con la autorización correspondiente, y están protegidos por la normativa sobre derecho de autor y propiedad industrial.",
      "Se permite la lectura, la impresión y la cita parcial de los contenidos con fines personales, académicos o profesionales, siempre que se indique la fuente y se enlace a la página original. Queda prohibida la reproducción total, la modificación o el uso comercial de los contenidos sin autorización previa y por escrito del Estudio.",
    ],
  },
  {
    id: "uso",
    titulo: "Uso permitido del sitio",
    parrafos: ["El usuario se obliga a no utilizar el sitio para:"],
    lista: [
      "Remitir información falsa, suplantar la identidad de un tercero o registrar datos de personas sin su autorización.",
      "Enviar contenido difamatorio, ilícito o que vulnere derechos de terceros.",
      "Realizar intentos de acceso no autorizado, extracción masiva de datos, o cualquier acción que afecte el funcionamiento o la seguridad del sitio.",
      "Utilizar los formularios, incluido el Libro de Reclamaciones, con fines distintos de los que les corresponden.",
    ],
    cierre: [
      "El Estudio se reserva el derecho de restringir el acceso al sitio a quien incumpla estas condiciones, sin perjuicio de las acciones legales que correspondan.",
    ],
  },
  {
    id: "enlaces",
    titulo: "Enlaces a sitios de terceros",
    parrafos: [
      "El sitio puede contener enlaces a portales de entidades públicas o a páginas de terceros, incluidos los mapas y el canal de WhatsApp. Esos enlaces se ofrecen únicamente como referencia.",
      "El Estudio no controla ni responde por el contenido, las políticas de privacidad ni la disponibilidad de esos sitios. El acceso a ellos se realiza bajo responsabilidad del usuario.",
    ],
  },
  {
    id: "disponibilidad",
    titulo: "Disponibilidad del servicio",
    parrafos: [
      "El Estudio procura mantener el sitio operativo y su contenido actualizado, pero no garantiza su disponibilidad ininterrumpida ni la ausencia de errores.",
      "El sitio puede suspenderse temporalmente por mantenimiento, actualización o causas ajenas al Estudio, sin que ello genere responsabilidad alguna.",
    ],
  },
  {
    id: "datos",
    titulo: "Protección de datos personales",
    parrafos: [
      "El tratamiento de los datos personales que se recopilan a través del sitio se rige por la Política de Privacidad, que forma parte integrante de estos términos y puede consultarse en la página correspondiente.",
    ],
  },
  {
    id: "consumidor",
    titulo: "Libro de Reclamaciones",
    parrafos: [
      "Conforme al Código de Protección y Defensa del Consumidor (Ley 29571) y a su Reglamento del Libro de Reclamaciones, el Estudio pone a disposición de los consumidores un Libro de Reclamaciones virtual, accesible desde el pie de página de este sitio.",
      "El reclamo debe ser atendido en un plazo no mayor a quince (15) días hábiles improrrogables, contados desde el día siguiente de su presentación. La formulación del reclamo no impide acudir a otras vías de solución de controversias ni constituye una vía previa para denunciar ante el INDECOPI.",
    ],
  },
  {
    id: "modificaciones",
    titulo: "Modificación de los términos",
    parrafos: [
      "El Estudio puede modificar estos términos en cualquier momento. La versión vigente es la publicada en esta página, con la fecha de última actualización indicada al inicio. El uso del sitio con posterioridad a una modificación implica la aceptación de la versión vigente.",
    ],
  },
  {
    id: "ley",
    titulo: "Ley aplicable y jurisdicción",
    parrafos: [
      "Estos términos se rigen por las leyes de la República del Perú.",
      "Cualquier controversia derivada del acceso o uso de este sitio se somete a la competencia de los jueces y tribunales del Distrito Judicial de Lima, sin perjuicio de los derechos que la normativa de protección al consumidor reconozca al usuario.",
      `Para cualquier comunicación relacionada con estos términos: ${firm.email}.`,
    ],
  },
];

export default function TerminosDeUso() {
  return (
    <>
      <PageHeader
        antetitulo="Condiciones"
        titulo="Términos de uso del sitio"
        bajada="Condiciones que rigen el acceso y uso de este sitio web, y alcance de la información publicada en él."
        migas={[{ etiqueta: "Términos de Uso" }]}
      />

      <LegalPage
        actualizado={ACTUALIZADO}
        intro="Lo esencial en una línea: el contenido de este sitio es informativo y general, no constituye asesoría para un caso concreto, y enviar una consulta no crea por sí solo una relación profesional con el Estudio."
        secciones={secciones}
      />
    </>
  );
}
