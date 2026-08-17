/* ==========================================================================
   /politica-de-privacidad
   --------------------------------------------------------------------------
   ⚠️ BORRADOR TÉCNICO PARA REVISIÓN DEL ESTUDIO.
   Redactado conforme a la Ley 29733, Ley de Protección de Datos Personales, y
   a su Reglamento aprobado por Decreto Supremo 016-2024-JUS, vigente desde el
   30 de marzo de 2025.

   Antes de publicar conviene verificar tres puntos con el criterio del
   estudio: (i) la inscripción o actualización del banco de datos personales
   en el Registro Nacional de Protección de Datos Personales, (ii) si
   corresponde designar un Oficial de Protección de Datos Personales, y
   (iii) los encargados de tratamiento realmente contratados (hosting,
   servicio de formularios, analítica).
   ========================================================================== */

import PageHeader from "@/components/layout/PageHeader";
import LegalPage from "@/components/layout/LegalPage";
import { firm, oficinas } from "@/content/site";

export const metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y tratamiento de datos personales de Estudio Tolentino & Asociados S.A.C., conforme a la Ley 29733 y al Decreto Supremo 016-2024-JUS.",
  alternates: { canonical: "/politica-de-privacidad" },
};

const ACTUALIZADO = "15 de agosto de 2026";

const secciones = [
  {
    id: "titular",
    titulo: "Titular del banco de datos personales",
    parrafos: [
      `${firm.razonSocial}, con RUC ${firm.ruc} y domicilio en ${oficinas[0].direccion}, ${oficinas[0].distrito} (en adelante, el Estudio), es el titular y responsable del tratamiento de los datos personales que se recopilan a través de este sitio web.`,
      `Para cualquier consulta relacionada con esta política o con el tratamiento de tus datos personales puedes escribir a ${firm.email} o comunicarte a los teléfonos ${firm.telefonos.map((t) => t.etiqueta).join(" y ")}.`,
    ],
  },
  {
    id: "marco",
    titulo: "Marco legal aplicable",
    parrafos: [
      "El tratamiento de datos personales que realiza el Estudio se rige por la Ley 29733, Ley de Protección de Datos Personales, y por su Reglamento aprobado mediante Decreto Supremo 016-2024-JUS, vigente desde el 30 de marzo de 2025, así como por las directivas que emita la Autoridad Nacional de Protección de Datos Personales, a cargo del Ministerio de Justicia y Derechos Humanos.",
      "Esta política se aplica exclusivamente a los datos recopilados a través de este sitio web. La información que los clientes entregan en el marco de un encargo profesional se rige, además, por el deber de reserva profesional y por lo pactado en el contrato de servicios correspondiente.",
    ],
  },
  {
    id: "datos",
    titulo: "Datos personales que se recopilan",
    parrafos: [
      "El Estudio recopila únicamente los datos que el usuario proporciona de forma voluntaria a través de los formularios del sitio. En concreto:",
    ],
    lista: [
      "Formulario de contacto: nombre completo, empresa, RUC (opcional), correo electrónico, teléfono, materia de la consulta y el contenido del mensaje.",
      "Libro de Reclamaciones virtual: nombre completo, tipo y número de documento de identidad, domicilio, correo electrónico, teléfono, datos del padre o apoderado cuando el consumidor es menor de edad, servicio contratado, monto reclamado y el detalle del hecho y del pedido.",
      "Datos técnicos de navegación que se generan de forma automática, como la dirección IP y el tipo de navegador, cuando se encuentren activas herramientas de analítica.",
    ],
    cierre: [
      "El sitio no solicita datos sensibles. Se recomienda al usuario no incluir en el campo de mensaje información sensible ni documentación confidencial: para eso existe la reunión de asesoría, en un canal adecuado.",
    ],
  },
  {
    id: "finalidades",
    titulo: "Finalidades del tratamiento",
    parrafos: ["Los datos se tratan para las siguientes finalidades:"],
    lista: [
      "Atender, responder y dar seguimiento a las consultas remitidas a través del formulario de contacto o de WhatsApp.",
      "Elaborar y remitir propuestas de servicios profesionales cuando el usuario lo solicita.",
      "Registrar, atender y responder los reclamos y quejas presentados en el Libro de Reclamaciones virtual, dentro del plazo legal, y conservar el registro conforme a la normativa de protección al consumidor.",
      "Cumplir las obligaciones legales, contables, tributarias y regulatorias que correspondan al Estudio.",
      "Medir el uso del sitio web y mejorar su contenido, cuando el usuario haya aceptado las cookies de analítica.",
    ],
    cierre: [
      "Los datos no se utilizan para finalidades distintas de las declaradas ni se someten a decisiones automatizadas con efectos jurídicos sobre el usuario.",
    ],
  },
  {
    id: "consentimiento",
    titulo: "Consentimiento y su revocación",
    parrafos: [
      "El envío de cualquiera de los formularios requiere que el usuario marque de forma expresa la casilla de autorización. Esa casilla no viene marcada por defecto: el consentimiento se otorga mediante una acción afirmativa del usuario, libre, previa, expresa e informada.",
      "El consentimiento puede revocarse en cualquier momento, sin efecto retroactivo, escribiendo a " +
        firm.email +
        ". La revocación no afecta la licitud del tratamiento realizado antes de ella, ni impide conservar los datos cuando su conservación sea necesaria para cumplir una obligación legal o para la defensa de posibles reclamaciones.",
    ],
  },
  {
    id: "conservacion",
    titulo: "Plazo de conservación",
    parrafos: [
      "Los datos se conservan durante el tiempo necesario para cumplir la finalidad que motivó su recopilación y, después, durante los plazos de prescripción legal que resulten aplicables.",
      "Las consultas que no derivan en una relación profesional se conservan por un plazo razonable de seguimiento comercial y luego se eliminan. Los registros del Libro de Reclamaciones se conservan conforme a lo que exige la normativa de protección al consumidor. La documentación vinculada a encargos profesionales se conserva conforme a los plazos legales aplicables a la actividad y al deber de reserva profesional.",
    ],
  },
  {
    id: "encargados",
    titulo: "Encargados de tratamiento y flujo transfronterizo",
    parrafos: [
      "Para operar el sitio web, el Estudio se apoya en proveedores tecnológicos que actúan como encargados de tratamiento y que pueden almacenar información en servidores ubicados fuera del territorio nacional. En concreto, el proveedor de alojamiento del sitio y el servicio de procesamiento de los formularios.",
      "Estos proveedores tratan los datos siguiendo las instrucciones del Estudio y con obligaciones de confidencialidad y seguridad. El Estudio no vende, cede ni comparte los datos personales con terceros para fines comerciales.",
      "Los datos podrán ser comunicados a autoridades administrativas o judiciales cuando exista una obligación legal de hacerlo.",
    ],
  },
  {
    id: "derechos",
    titulo: "Derechos del titular de los datos",
    parrafos: [
      "Como titular de tus datos personales, la Ley 29733 te reconoce los derechos de información, acceso, actualización, inclusión, rectificación, supresión o cancelación, oposición, así como el derecho a impedir el suministro de tus datos y a un tratamiento objetivo. El Reglamento vigente incorpora además el derecho a la portabilidad de los datos.",
      `Para ejercerlos basta con enviar una solicitud a ${firm.email}, adjuntando copia de tu documento de identidad e indicando con claridad el derecho que deseas ejercer y los datos a los que se refiere. También puedes presentarla por escrito en nuestras oficinas.`,
      "El Estudio atenderá la solicitud dentro de los plazos que establece la normativa vigente. Si consideras que tu solicitud no fue atendida adecuadamente, puedes acudir a la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.",
    ],
  },
  {
    id: "seguridad",
    titulo: "Medidas de seguridad",
    parrafos: [
      "El Estudio aplica medidas técnicas, organizativas y legales orientadas a garantizar la confidencialidad, integridad y disponibilidad de los datos personales, y a evitar su alteración, pérdida o tratamiento no autorizado. Entre ellas: cifrado del tráfico del sitio mediante protocolo HTTPS, acceso restringido a la información según el rol de cada colaborador, y deberes de confidencialidad exigibles a todo el personal.",
      "Ninguna medida de seguridad ofrece garantía absoluta. Por esa razón se recomienda no remitir información sensible ni documentación confidencial a través de los formularios del sitio.",
    ],
  },
  {
    id: "cookies",
    titulo: "Cookies",
    parrafos: [
      "El sitio utiliza únicamente las cookies necesarias para su funcionamiento. Si en el futuro se instalan herramientas de analítica o de medición publicitaria, se mostrará un aviso previo que permita aceptarlas o rechazarlas, y esta política será actualizada en consecuencia.",
      "El usuario puede configurar su navegador para bloquear o eliminar las cookies. Hacerlo puede afectar el funcionamiento de algunas secciones del sitio.",
    ],
  },
  {
    id: "menores",
    titulo: "Datos de menores de edad",
    parrafos: [
      "El sitio no está dirigido a menores de edad y no se recopilan intencionalmente sus datos personales, salvo en el Libro de Reclamaciones, donde el registro debe ser presentado por el padre, la madre o el apoderado del menor, quien deberá identificarse.",
    ],
  },
  {
    id: "cambios",
    titulo: "Cambios en esta política",
    parrafos: [
      "El Estudio puede modificar esta política para adecuarla a cambios normativos o a nuevos tratamientos. La versión vigente es siempre la publicada en esta página, con la fecha de última actualización indicada al inicio.",
      "Cuando el cambio sea sustancial y afecte tratamientos ya consentidos, se solicitará nuevamente el consentimiento del usuario.",
    ],
  },
];

export default function PoliticaDePrivacidad() {
  return (
    <>
      <PageHeader
        antetitulo="Ley 29733 y D.S. 016-2024-JUS"
        titulo="Política de privacidad y tratamiento de datos personales"
        bajada={`Cómo ${firm.nombreCorto} recopila, usa, conserva y protege los datos personales que se envían a través de este sitio web.`}
        migas={[{ etiqueta: "Política de Privacidad" }]}
      />

      <LegalPage
        actualizado={ACTUALIZADO}
        intro="Esta política explica en lenguaje claro qué datos personales recopila el Estudio a través de este sitio, para qué los usa, con quién los comparte, cuánto tiempo los conserva y cómo puedes ejercer tus derechos sobre ellos."
        secciones={secciones}
      />
    </>
  );
}
