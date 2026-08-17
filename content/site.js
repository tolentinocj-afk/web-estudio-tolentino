/* ==========================================================================
   CONTENIDO EDITABLE DEL SITIO
   --------------------------------------------------------------------------
   Este archivo concentra TODOS los textos, datos de contacto y listados del
   sitio. Para cambiar un texto no hace falta tocar los componentes: basta con
   editar el valor correspondiente aquí.

   Convención: los campos marcados con  // ⚠️ PENDIENTE  requieren un dato real
   del estudio antes de publicar.

   Fuente del contenido de servicios: documentos de flujo de chatbot del
   estudio (tributaria, civil, penal, laboral, outsourcing contable y creación
   de empresas), agosto de 2026.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DATOS DE LA FIRMA
   -------------------------------------------------------------------------- */

export const firm = {
  nombreCorto: "Estudio Tolentino & Asociados",
  razonSocial: "ESTUDIO TOLENTINO & ASOCIADOS S.A.C.",
  ruc: "20610995668",
  bajada: "Abogados y Contadores",
  anioFundacion: 2013,
  dominio: "https://www.tolentinoyasociados.com", // ⚠️ PENDIENTE confirmar dominio definitivo
  email: "informes@tolentinoyasociados.com",
  telefonos: [
    { etiqueta: "(+51) 944 500 769", tel: "+51944500769" },
    { etiqueta: "(+51) 944 256 912", tel: "+51944256912" },
  ],
  whatsapp: {
    numero: "51944500769",
    // Mensaje base del botón flotante. Las páginas de servicio lo especializan.
    mensajeBase:
      "Hola, escribo desde la web de Estudio Tolentino & Asociados. Necesito asesoría en ...",
  },
  horario: {
    semana: "Lunes a viernes, de 9:00 a 18:00 h",
    sabado: "Sábados, de 9:00 a 13:00 h",
  },
  redes: [
    {
      nombre: "Facebook",
      url: "https://www.facebook.com/EstudioTolentino",
      icono: "facebook",
    },
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/estudiotolentino/",
      icono: "instagram",
    },
    {
      nombre: "TikTok",
      url: "https://www.tiktok.com/@estudio_tolentino",
      icono: "tiktok",
    },
    // Para sumar LinkedIn u otra red basta con añadir aquí su objeto.
    // El ícono debe existir en components/ui/Icon.js.
  ],
};

export const oficinas = [
  {
    id: "miraflores",
    nombre: "Oficina principal — Miraflores",
    direccion: "Calle 2 de Mayo N.° 516, Oficina 201",
    distrito: "Miraflores, Lima 15074",
    // "mapa" alimenta el iframe incrustado; "comoLlegar" abre Google Maps con
    // la ficha del local para trazar la ruta desde el teléfono del visitante.
    mapa: "https://www.google.com/maps?q=C.+2+de+Mayo+516,+Miraflores+15074,+Lima&output=embed",
    comoLlegar:
      "https://www.google.com/maps/place/int+201,+C.+2+de+Mayo+516,+Miraflores+15074",
  },
  {
    id: "chilca",
    nombre: "Oficina Chilca",
    direccion: "Jr. La Parra Mz. 82 Lt. 29, segundo piso, Oficina 201",
    distrito: "Chilca, Cañete, Lima 15871",
    // Ubicación por Plus Code, más preciso que la dirección en esta zona.
    mapa: "https://www.google.com/maps?q=F7M7%2B6H3+Chilca+15871&output=embed",
    comoLlegar: "https://www.google.com/maps/search/?api=1&query=F7M7%2B6H3+Chilca+15871",
  },
];

/* --------------------------------------------------------------------------
   1 bis. FOTOGRAFÍAS DEL SITIO
   --------------------------------------------------------------------------
   Cuatro espacios, a propósito. Una firma consolidada usa poca fotografía y
   muy buena; llenar cada sección con fotos de banco abarata la percepción.

   Cada espacio funciona SIN imagen: si "src" queda en null, la sección
   conserva la textura de líneas sobre azul marino que ya tiene. Para activar
   una fotografía basta con dejar el archivo en public/images/ y escribir aquí
   su ruta. No hay que tocar ningún componente.

   Todas las imágenes llevan una capa azul marino encima, de modo que el texto
   siempre cumpla el contraste exigido por WCAG AA. Por eso conviene elegir
   fotos de tonos neutros y sin zonas muy claras en el lado del texto.
   -------------------------------------------------------------------------- */

export const imagenes = {
  // Fondo del bloque de apertura de la portada. Formato apaisado, 16:9.
  hero: {
    src: null,
    alt: "Reunión de asesoría entre profesionales del estudio y un cliente",
    // Posición del encuadre visible al recortar. Ajustar si la foto se corta mal.
    posicion: "center 35%",
  },

  // Banda de la sección "Cómo trabajamos" en la portada. Apaisada, 16:9.
  metodologia: {
    src: "/images/metodologia-firma-documento.webp",
    alt: "Profesional firmando un documento sobre un expediente abierto",
    posicion: "center",
  },

  // Banda ancha de la página Nosotros. Muy apaisada, 21:9.
  nosotros: {
    src: null,
    alt: "Sala de reuniones del estudio durante una sesión de trabajo",
    posicion: "center 40%",
  },

  // Fondo de la cabecera de todas las páginas internas (servicios, nosotros,
  // recursos, contacto y legales). Una sola imagen ordena todo el sitio.
  cabeceras: {
    src: null,
    alt: "",
    posicion: "center 30%",
  },
};

/* --------------------------------------------------------------------------
   2. NAVEGACIÓN
   -------------------------------------------------------------------------- */

export const navegacion = [
  { etiqueta: "Inicio", href: "/" },
  { etiqueta: "Servicios", href: "/servicios" },
  { etiqueta: "Nosotros", href: "/nosotros" },
  { etiqueta: "Recursos", href: "/recursos" },
  { etiqueta: "Contacto", href: "/contacto" },
];

/* --------------------------------------------------------------------------
   3. HERO
   -------------------------------------------------------------------------- */

export const hero = {
  antetitulo: `Firma peruana desde ${firm.anioFundacion}`,
  titular: "Abogados y Contadores Públicos a tu servicio",
  subtitulo:
    "Firma peruana de abogados y contadores especializada en asesoría legal, contable, tributaria, laboral y financiera para empresas y personas, con soluciones integrales orientadas al cumplimiento normativo.",
  ctaPrimario: { etiqueta: "Agendar consulta", href: "/contacto" },
  ctaSecundario: { etiqueta: "Ver servicios", href: "#servicios" },
  // La fotografía del hero se configura en el objeto "imagenes" de arriba.
};

/* --------------------------------------------------------------------------
   4. BARRA DE CREDIBILIDAD
   -------------------------------------------------------------------------- */

export const credibilidad = [
  {
    valor: 2013,
    formato: "anio", // se muestra el año sin separador de miles
    etiqueta: "En el mercado desde",
    detalle: "Firma constituida y operativa de forma ininterrumpida",
  },
  {
    valor: 15,
    sufijo: "+",
    etiqueta: "Años de trayectoria",
    detalle: "Experiencia profesional del socio fundador",
  },
  {
    valor: 11,
    etiqueta: "Líneas de práctica",
    detalle: "Equipo multidisciplinario de abogados y contadores",
  },
  {
    valor: 2,
    etiqueta: "Oficinas",
    detalle: "Miraflores (Lima) y Chilca (Cañete)",
  },
];


/* --------------------------------------------------------------------------
   5. SERVICIOS
   Cada servicio genera su tarjeta en el inicio y su página interna en
   /servicios/[slug]. El campo "icono" corresponde a components/ui/Icon.js.

   Estructura de cada servicio, pensada desde la duda del visitante y no desde
   el organigrama del estudio:

     resumen      → dos líneas en la tarjeta del inicio
     detalle      → qué es el servicio, en un párrafo
     paraQuien    → situaciones concretas en las que el visitante se reconoce.
                    Es el bloque que más convierte: quien se ve retratado
                    escribe, quien no se ve retratado se ahorra la consulta.
     puntos       → alcance del trabajo
     entregables  → qué recibe el cliente, en cosas tangibles
     documentos   → qué debe traer para empezar (opcional, solo donde aplica)
     preguntas    → dudas propias de esta materia, distintas de las generales
     relacionados → tres servicios elegidos a mano por afinidad real, no los
                    tres primeros de la lista
     plazo        → tiempo de ejecución, cuando el servicio lo tiene definido
     excluye      → lo que el cliente paga por su cuenta
     precio       → solo el servicio contable tiene precio publicado
   -------------------------------------------------------------------------- */

export const servicios = [
  {
    slug: "asesoria-tributaria",
    icono: "escudo",
    titulo: "Asesoría y consultoría tributaria",
    resumen:
      "Aplicación correcta de la norma vigente y reducción de contingencias frente a SUNAT.",
    detalle:
      "Nuestro servicio de asesoría tributaria garantiza que la empresa aplique correctamente la normativa vigente, permitiéndole alcanzar sus objetivos económicos y minimizar las contingencias que puedan reducir sus ganancias.",
    paraQuien: [
      "Recibiste una carta inductiva o un requerimiento de fiscalización y el plazo ya está corriendo.",
      "Tu empresa creció y no estás seguro de seguir en el régimen tributario que te conviene.",
      "Vas a cerrar una operación importante (venta de activos, ingreso de un socio, reorganización) y quieres saber el costo fiscal antes de firmar, no después.",
      "Arrastras reparos de ejercicios anteriores y no tienes claro cuánta contingencia acumulada tienes encima.",
    ],
    puntos: [
      "Planeamiento fiscal: estrategias legales para optimizar la carga tributaria y estructurar operaciones aprovechando los beneficios que la norma reconoce",
      "Cumplimiento tributario: preparación y presentación de declaraciones de IGV, Impuesto a la Renta, ITF y demás obligaciones mensuales, trimestrales y anuales",
      "Consultoría: respuestas sobre legislación tributaria, interpretación de normas recientes y análisis del impacto fiscal en fusiones, adquisiciones y reestructuraciones",
      "Defensa tributaria: representación ante SUNAT en auditorías y fiscalizaciones, recursos administrativos y acciones judiciales",
      "Auditoría fiscal preventiva: revisión del cumplimiento, identificación de contingencias y recomendaciones correctivas",
      "Gestión de riesgos: evaluación de riesgos fiscales y diseño de controles internos",
      "Capacitación al personal sobre los temas tributarios relevantes del negocio y los cambios normativos",
    ],
    entregables: [
      "Informe de diagnóstico con las contingencias identificadas y su cuantificación aproximada",
      "Estrategia por escrito, con el sustento normativo y jurisprudencial de cada posición",
      "Escritos presentados ante SUNAT o el Tribunal Fiscal, con su cargo de recepción",
      "Reporte de seguimiento del expediente hasta su cierre",
    ],
    preguntas: [
      {
        p: "¿Pueden asumir una fiscalización que ya empezó?",
        r: "Sí. Mientras antes entremos mejor, pero el encargo se puede asumir en cualquier etapa, incluso con resolución de determinación ya notificada: quedan la reclamación y la apelación ante el Tribunal Fiscal.",
      },
      {
        p: "¿Y si el reparo de SUNAT es correcto?",
        r: "Te lo decimos. En ese escenario el objetivo del trabajo cambia: reducir la sanción por gradualidad, evaluar el fraccionamiento, y sobre todo corregir el criterio para que el mismo error no se repita en los ejercicios que siguen abiertos.",
      },
      {
        p: "¿Trabajan con mi contador actual?",
        r: "Sí, y es lo habitual. Tu contador conoce la operación al detalle; nosotros aportamos la lectura de riesgo y la defensa técnica. No pedimos que nadie sea reemplazado.",
      },
    ],
    relacionados: [
      "devolucion-de-impuestos",
      "defensa-penal-empresarial",
      "outsourcing-contable",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría en materia tributaria.",
  },

  {
    slug: "devolucion-de-impuestos",
    icono: "retorno",
    titulo: "Devolución de impuestos",
    resumen:
      "Recuperación efectiva de créditos, saldos a favor y pagos en exceso ante SUNAT.",
    detalle:
      "Gestionamos la devolución de los créditos y pagos que la empresa tiene a su favor, con el expediente armado desde el inicio para que la solicitud resista el requerimiento de la administración.",
    paraQuien: [
      "Exportas y tienes saldo a favor acumulado que nunca llegaste a solicitar.",
      "Te retienen o perciben IGV y el crédito se acumula mes a mes sin aplicarse contra nada.",
      "Pagaste de más el Impuesto a la Renta, o tienes ITAN que no lograste aplicar.",
      "Tienes dinero inmovilizado en la cuenta de detracciones y no sabes cómo liberarlo.",
      "Ya presentaste una solicitud y te llegó un requerimiento que no sabes cómo levantar.",
    ],
    puntos: [
      "Saldo a favor materia de beneficio del exportador, con servicio integral: declaración PDB, revisión del arrastre y auditoría preventiva",
      "Recupero del IGV del exportador por adquisiciones vinculadas a la producción destinada a exportación",
      "Retenciones y percepciones del IGV no aplicadas",
      "Pagos en exceso o indebidos del Impuesto a la Renta",
      "ITAN no aplicado contra el Impuesto a la Renta",
      "Liberación del saldo de la cuenta de detracciones",
      "Atención de requerimientos y levantamiento de observaciones durante todo el procedimiento",
    ],
    entregables: [
      "Cálculo del monto realmente recuperable, periodo por periodo, antes de presentar nada",
      "Expediente armado con el sustento documentario completo",
      "Solicitud presentada y seguimiento hasta el desembolso o la nota de crédito negociable",
      "Respuesta a los requerimientos y levantamiento de observaciones",
    ],
    documentos: [
      "Registro de compras y registro de ventas de los periodos involucrados",
      "Declaraciones mensuales ya presentadas",
      "Declaraciones aduaneras de exportación regularizadas, si el caso es de exportador",
      "Comprobantes de las adquisiciones que sustentan el crédito",
    ],
    preguntas: [
      {
        p: "¿Cuánto demora una devolución?",
        r: "Depende del tributo, del tipo de solicitud y sobre todo de la calidad del sustento. Un expediente bien armado desde el inicio reduce de forma significativa los requerimientos posteriores y acorta el procedimiento completo.",
      },
      {
        p: "¿Qué pasa si la solicitud es observada?",
        r: "Es parte normal del procedimiento y está contemplado dentro del servicio. Se responde el requerimiento con el sustento que corresponda, sin costo adicional por ese concepto.",
      },
      {
        p: "¿Conviene solicitar todo el saldo acumulado de una vez?",
        r: "No siempre. Existe un tope por periodo y solicitar por encima de él genera observaciones seguras. Por eso el primer paso es correr el cálculo mes a mes y definir cuánto pedir y cuándo.",
      },
    ],
    relacionados: ["drawback", "asesoria-tributaria", "outsourcing-contable"],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría en devolución de impuestos.",
  },

  {
    slug: "drawback",
    icono: "exportacion",
    titulo: "Drawback para exportadores",
    resumen:
      "Restitución de derechos arancelarios, de la evaluación inicial al desembolso.",
    detalle:
      "Recuperación de liquidez para empresas exportadoras mediante el régimen de restitución de derechos arancelarios. Evaluamos, armamos el expediente y acompañamos la solicitud hasta el final, incluido el levantamiento de observaciones.",
    paraQuien: [
      "Exportas mercancía que incorpora insumos importados y nunca solicitaste el beneficio.",
      "Ya solicitas drawback, pero el proceso te consume tiempo interno y suele llegar con observaciones.",
      "Te notificaron una fiscalización de drawback o te están exigiendo autoliquidar.",
      "Estás por comenzar a exportar y prefieres montar el procedimiento bien desde el primer embarque.",
    ],
    puntos: [
      "Evaluación de elegibilidad de la mercancía exportada y de los insumos importados",
      "Implementación del procedimiento en empresas que acceden al beneficio por primera vez",
      "Armado y sustento documentario del expediente",
      "Presentación y seguimiento de la solicitud",
      "Auditoría preventiva antes de solicitar, para anticipar observaciones",
      "Soporte en fiscalización y en procesos de autoliquidación",
      "Ordenamiento de procesos para exportadores con solicitudes recurrentes",
    ],
    entregables: [
      "Evaluación previa de elegibilidad, con el monto estimado a restituir",
      "Expediente completo, listo para presentar",
      "Solicitud presentada y seguimiento hasta el abono",
      "Procedimiento interno documentado, para que las siguientes solicitudes salgan solas",
    ],
    preguntas: [
      {
        p: "¿Cobran aunque la solicitud no prospere?",
        r: "Para drawback trabajamos habitualmente bajo modalidad de pago por éxito: los honorarios se vinculan al beneficio efectivamente restituido. El esquema exacto se acuerda por escrito antes de iniciar.",
      },
      {
        p: "¿Sirve si mis insumos los compro a un importador local y no importo yo?",
        r: "Puede servir. La evaluación de elegibilidad revisa precisamente eso: el origen de los insumos, su incorporación en el bien exportado y la trazabilidad documentaria de la cadena.",
      },
      {
        p: "¿Qué pasa si me fiscalizan un drawback ya cobrado?",
        r: "Asumimos la defensa. Es uno de los escenarios más delicados porque implica devolver lo cobrado más intereses, así que la auditoría preventiva antes de solicitar es la mejor inversión.",
      },
    ],
    relacionados: [
      "devolucion-de-impuestos",
      "asesoria-tributaria",
      "outsourcing-contable",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría en drawback para exportadores.",
  },

  {
    slug: "constitucion-de-empresas",
    icono: "sello",
    titulo: "Constitución de empresas",
    resumen:
      "Tu empresa inscrita en SUNARP y con RUC activo, lista para facturar y operar.",
    detalle:
      "Asesoría integral y gestión completa para constituir una S.A.C., E.I.R.L. o S.R.L., cumpliendo la normativa legal, tributaria y registral vigente. El servicio va desde la elaboración de la minuta hasta la inscripción en SUNAT, con la empresa entregada lista para operar.",
    paraQuien: [
      "Vas a formalizar un negocio que ya opera y necesitas facturar.",
      "Un cliente te exige factura o RUC para contratarte.",
      "Vas a entrar en sociedad con alguien y quieres que las reglas queden escritas desde el inicio, no después del primer desacuerdo.",
      "No sabes si te conviene S.A.C., E.I.R.L. o S.R.L., ni qué régimen tributario elegir.",
    ],
    puntos: [
      "Asesoría previa sobre el tipo de empresa más conveniente y el régimen tributario óptimo",
      "Búsqueda y reserva de nombre en SUNARP",
      "Elaboración de la minuta de constitución, con asesoría en la redacción de los estatutos",
      "Coordinación con notaría para la elevación a escritura pública",
      "Inscripción en Registros Públicos y obtención de la partida registral",
      "Inscripción en SUNAT y obtención del RUC",
      "Orientación inicial sobre las obligaciones laborales del nuevo empleador",
      "Entrega de la carpeta con todos los documentos de constitución y las credenciales de la empresa",
    ],
    entregables: [
      "Partida registral de la sociedad inscrita en SUNARP",
      "Testimonio de la escritura pública de constitución",
      "RUC activo, con el régimen tributario definido y la clave SOL entregada",
      "Carpeta digital con todos los documentos, lista para el banco y para tus clientes",
    ],
    documentos: [
      "Copia del documento de identidad de cada socio",
      "Tres propuestas de nombre, en orden de preferencia",
      "Descripción de la actividad que realizará la empresa",
      "Monto del capital social y cómo aporta cada socio",
      "Dirección del domicilio fiscal",
    ],
    preguntas: [
      {
        p: "¿Cuál es el capital social mínimo?",
        r: "No hay mínimo legal para la S.A.C., y es común constituir con montos simbólicos. Pero conviene pensarlo: un capital muy bajo limita a la empresa frente a bancos, licitaciones y contrapartes que evalúan solvencia, y aumentarlo después exige junta y escritura pública.",
      },
      {
        p: "¿Puedo constituir si soy extranjero o si estoy fuera del país?",
        r: "Sí. Se resuelve con carné de extranjería o, si estás fuera, mediante poder otorgado en el consulado o apostillado. Conviene avisarlo desde el inicio porque suma días al plazo.",
      },
      {
        p: "¿Qué obligaciones tengo desde el día uno?",
        r: "Desde el primer mes corren las declaraciones mensuales y los libros electrónicos según el régimen. Si contratas personal, se suman el T-Registro y las obligaciones del empleador. Una empresa recién constituida que pasa tres meses sin declarar acumula multas que superan el costo de haber llevado la contabilidad desde el inicio.",
      },
    ],
    relacionados: [
      "outsourcing-contable",
      "asesoria-corporativa",
      "asesoria-laboral",
    ],
    plazo: "De 5 a 7 días hábiles desde la entrega completa de datos y documentos",
    excluye:
      "Derechos notariales y registrales, que el cliente paga directamente: aproximadamente S/ 150 para un capital social de hasta S/ 10,000.",
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Quiero constituir una empresa.",
  },

  {
    slug: "outsourcing-contable",
    icono: "libros",
    titulo: "Outsourcing contable y de planillas",
    resumen:
      "Contabilidad y planillas al día, sin sorpresas con SUNAT y con información para decidir.",
    detalle:
      "Nos encargamos de los números para que usted se enfoque en los resultados. Contabilidad completa, planillas y cumplimiento tributario bajo un solo responsable, con información clara y oportuna para la toma de decisiones.",
    paraQuien: [
      "Tu contador actual no te informa: te enteras de los problemas cuando ya son multa.",
      "Llevas el negocio en hojas de cálculo y el volumen ya no lo permite.",
      "Vas a contratar personal por primera vez y no sabes cómo se arma una planilla.",
      "Quieres cambiar de contador pero temes lo que puedas heredar.",
      "Necesitas estados financieros para el banco, una licitación o una junta de socios.",
    ],
    puntos: [
      "Contabilidad financiera: registro de transacciones y elaboración de estados financieros (situación financiera, resultados y flujo de efectivo)",
      "Contabilidad tributaria: cumplimiento de las obligaciones fiscales y planificación para pagar lo justo",
      "Planillas: cálculo de remuneraciones, beneficios sociales, altas y bajas, y declaraciones del empleador",
      "Contabilidad de costos: análisis de costos de producción y operación, y control de inventarios",
      "Auditoría interna y externa de los procesos y registros contables",
      "Asesoría normativa: actualización e implementación de nuevas normas contables",
      "Implementación de software contable y automatización de procesos",
    ],
    entregables: [
      "Declaraciones mensuales presentadas, con su constancia",
      "Libros electrónicos generados y enviados dentro del plazo",
      "Estados financieros mensuales, con una lectura ejecutiva de qué está pasando en el negocio",
      "Planilla, boletas de pago y declaraciones del empleador",
      "Un interlocutor asignado, al que puedes escribir sin pasar por central telefónica",
    ],
    documentos: [
      "Comprobantes de compras y ventas del periodo",
      "Estados de cuenta bancarios",
      "Contratos vigentes con personal y con proveedores relevantes",
      "Acceso a la clave SOL",
      "Si vienes de otro contador: declaraciones y libros de los periodos ya presentados",
    ],
    preguntas: [
      {
        p: "¿Puedo cambiar de contador a mitad del año?",
        r: "Sí, y es más común de lo que se cree. Recibimos la información del contador anterior, revisamos las declaraciones ya presentadas y los libros electrónicos, e identificamos omisiones antes de asumir. Ese diagnóstico evita heredar un problema sin saberlo.",
      },
      {
        p: "¿Qué pasa si encuentran errores del contador anterior?",
        r: "Te los informamos por escrito, con su costo estimado de regularización, y tú decides. No rectificamos nada sin tu autorización, porque una rectificatoria puede activar una revisión.",
      },
      {
        p: "¿Cada cuánto recibo información?",
        r: "Mensualmente, dentro de los primeros días del mes siguiente, junto con las constancias de lo declarado. Nuestro criterio es que el empresario no debería enterarse de su situación una vez al año.",
      },
    ],
    relacionados: [
      "asesoria-financiera",
      "asesoria-laboral",
      "asesoria-tributaria",
    ],
    precio: "Planes desde S/ 200 mensuales, según volumen de operaciones y régimen",
    whatsapp: "Necesito el servicio de outsourcing contable o de planillas.",
  },

  {
    slug: "asesoria-financiera",
    icono: "grafico",
    titulo: "Asesoría financiera empresarial",
    resumen:
      "Diagnóstico de la capacidad de generar efectivo y decisiones de inversión sustentadas.",
    detalle:
      "Evaluamos la salud financiera del negocio y su capacidad de generación de efectivo en el corto, mediano y largo plazo, para sostener las decisiones de inversión y financiamiento sobre números y no sobre intuición.",
    paraQuien: [
      "Tu empresa factura bien pero nunca hay caja, y no tienes claro adónde se va el dinero.",
      "Vas a solicitar un crédito y necesitas llegar al banco con la información ordenada.",
      "Estás evaluando una inversión o una nueva línea de negocio y quieres saber si se paga sola.",
      "Tienes varias deudas y sospechas que se pueden reestructurar en mejores condiciones.",
      "Quieres saber cuánto vale realmente tu empresa antes de vender o de recibir un socio.",
    ],
    puntos: [
      "Diagnóstico financiero y análisis de ratios",
      "Proyección de flujo de caja y necesidades de capital de trabajo",
      "Planificación financiera de corto, mediano y largo plazo",
      "Evaluación de proyectos de inversión",
      "Estructuración y renegociación de deuda",
      "Optimización de recursos y control presupuestal",
    ],
    entregables: [
      "Diagnóstico financiero con los indicadores clave del negocio y su lectura",
      "Modelo de flujo de caja proyectado, entregado en hoja de cálculo editable",
      "Evaluación del proyecto o de la inversión, con sus escenarios y su punto de equilibrio",
      "Recomendaciones priorizadas, de la que más impacto tiene a la que menos",
    ],
    preguntas: [
      {
        p: "¿Sirve para una empresa pequeña o es solo para grandes?",
        r: "Sirve especialmente para las pequeñas. Una empresa grande tiene un área financiera; una pequeña suele tomar decisiones de inversión y endeudamiento con la intuición del dueño, que es justamente donde más se pierde.",
      },
      {
        p: "¿Necesito tener la contabilidad al día para empezar?",
        r: "Ayuda mucho, pero no es indispensable. Si la información contable está desordenada, el primer paso del trabajo es reconstruir la base mínima confiable, porque un análisis financiero sobre datos malos solo produce confianza infundada.",
      },
    ],
    relacionados: [
      "outsourcing-contable",
      "asesoria-corporativa",
      "disolucion-y-liquidacion",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría financiera empresarial.",
  },

  {
    slug: "asesoria-laboral",
    icono: "personas",
    titulo: "Asesoría laboral",
    resumen:
      "Gestión del personal conforme a ley, con prevención frente a SUNAFIL y el Poder Judicial.",
    detalle:
      "Nuestra asesoría laboral va más allá de la contratación de personal, nacional o extranjero. Damos soporte completo desde la contratación, compensación y liquidación de empleados hasta la resolución de conflictos y el cumplimiento estricto de las normas del MTPE.",
    paraQuien: [
      "Te llegó una orden de inspección de SUNAFIL y tienes pocos días para responder.",
      "Vas a cesar a un trabajador y quieres hacerlo sin que termine en demanda.",
      "Un extrabajador te demandó y necesitas contestar.",
      "Tienes personal en recibos por honorarios y sospechas que podría configurarse una relación laboral.",
      "Vas a contratar personal por primera vez, o personal extranjero, y no sabes qué modalidad usar.",
    ],
    puntos: [
      "Derechos y obligaciones laborales: jornadas, horas extras, descansos, vacaciones y políticas de igualdad y no discriminación",
      "Remuneraciones y beneficios: cálculo y pago de sueldos, bonos, gratificaciones, CTS y pensiones",
      "Contratación laboral, regímenes especiales y contratación de personal extranjero",
      "Seguridad y salud en el trabajo: implementación de medidas y gestión de riesgos laborales (Ley 29783)",
      "Relaciones colectivas: negociación colectiva, derechos sindicales y procedimientos de huelga",
      "Procedimientos administrativos: representación ante el MTPE y defensa en inspecciones de SUNAFIL",
      "Defensa en juicios laborales bajo la Nueva Ley Procesal del Trabajo",
      "Capacitación a empleadores y trabajadores, con actualización constante de la normativa",
    ],
    entregables: [
      "Contratos, adendas y convenios redactados a la medida del puesto y del régimen",
      "Cuadro de liquidación de beneficios sociales, con el detalle de cada concepto",
      "Escritos y descargos presentados ante SUNAFIL o el Poder Judicial",
      "Reglamento interno de trabajo y políticas internas, cuando el tamaño de la empresa lo exige",
    ],
    documentos: [
      "Contratos de trabajo vigentes y planillas de los periodos involucrados",
      "Boletas de pago del trabajador o trabajadores implicados",
      "El acta de inspección o la demanda, si ya existe un procedimiento en curso",
      "Documentación del hecho: memorandos, cartas, correos, registros de asistencia",
    ],
    preguntas: [
      {
        p: "Tengo gente en recibos por honorarios, ¿es un problema?",
        r: "Puede serlo. Si hay subordinación, horario y remuneración fija, existe relación laboral aunque el papel diga otra cosa, y la desnaturalización se declara con efecto retroactivo: beneficios sociales, aportes y multa. Vale la pena revisarlo antes de que lo revise SUNAFIL.",
      },
      {
        p: "¿Cuánto cuesta despedir a un trabajador?",
        r: "Depende de la causa. Un cese por causa justa debidamente documentada tiene un costo muy distinto al de un despido arbitrario, que genera indemnización. La diferencia se decide en la documentación previa, no en la carta de despido.",
      },
      {
        p: "¿Atienden empresas del régimen MYPE?",
        r: "Sí. El régimen MYPE tiene reglas propias de beneficios y de jornada, y aplicar el régimen general por desconocimiento suele significar pagar de más durante años.",
      },
    ],
    relacionados: [
      "outsourcing-contable",
      "asesoria-corporativa",
      "asesoria-civil",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría laboral.",
  },

  {
    slug: "asesoria-corporativa",
    icono: "edificio",
    titulo: "Asesoría legal corporativa",
    resumen:
      "Gobierno societario, contratos y trámites registrales con criterio preventivo.",
    detalle:
      "Acompañamiento societario y contractual para que las decisiones del negocio queden bien documentadas, sean inscribibles y no generen contingencias tributarias ni laborales en el camino.",
    paraQuien: [
      "Necesitas un acta de junta o de directorio y que además sea inscribible en SUNARP.",
      "Va a entrar o salir un socio, o vas a aumentar el capital.",
      "Tu poder de representación venció o quedó desactualizado y el banco no te reconoce.",
      "Tienes varias empresas y quieres ordenarlas bajo una estructura de holding.",
      "Vas a firmar un contrato importante y quieres que alguien lo lea antes que tú firmes.",
    ],
    puntos: [
      "Juntas generales, sesiones de directorio y redacción de actas societarias",
      "Aumentos y reducciones de capital, transferencia de participaciones y modificación de estatutos",
      "Otorgamiento y revocación de poderes, y trámites registrales ante SUNARP",
      "Reorganización societaria: fusiones, escisiones y estructuras de holding familiar",
      "Revisión, redacción y negociación de contratos comerciales",
      "Protocolo familiar y planificación de la sucesión empresarial",
      "Declaración de beneficiarios finales y cumplimiento societario periódico",
    ],
    entregables: [
      "Acta redactada y lista para transcribir al libro, o para elevar a escritura pública",
      "Trámite registral presentado en SUNARP y seguimiento hasta la inscripción",
      "Contratos revisados con observaciones señaladas cláusula por cláusula",
      "Informe de la estructura propuesta, con su efecto tributario, cuando el caso es de reorganización",
    ],
    preguntas: [
      {
        p: "¿Por qué me observaron el acta en SUNARP?",
        r: "Suele ser por convocatoria, quórum o mayorías mal calculadas, o porque el acuerdo no calza con lo que dice el estatuto. Casi siempre es corregible, pero cuesta menos redactarla bien desde el inicio que levantar la observación.",
      },
      {
        p: "¿Conviene armar un holding familiar?",
        r: "Depende del tamaño del patrimonio, del número de herederos y del riesgo de la actividad. Es una herramienta útil de protección y de sucesión, pero mal diseñada genera costo tributario sin beneficio. Se evalúa antes de constituir nada.",
      },
      {
        p: "¿Qué es la declaración de beneficiarios finales?",
        r: "Es una obligación societaria de informar a SUNAT quién controla realmente la empresa. Su incumplimiento acarrea multa y es de las que más se pasan por alto, sobre todo en empresas con estructura simple que asumen que no les aplica.",
      },
    ],
    relacionados: [
      "constitucion-de-empresas",
      "disolucion-y-liquidacion",
      "asesoria-civil",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría legal corporativa o societaria.",
  },

  {
    slug: "asesoria-civil",
    icono: "acuerdo",
    titulo: "Asesoría legal civil",
    resumen:
      "Contratos, inmuebles, sucesiones y cobranzas, para prevenir el conflicto antes de que llegue.",
    detalle:
      "El derecho civil regula la mayoría de las relaciones cotidianas: la compra de bienes, los arrendamientos, los contratos y la transmisión del patrimonio. Una asesoría especializada previene conflictos, asegura el cumplimiento de derechos y obligaciones, y resuelve las disputas que surgen.",
    paraQuien: [
      "Vas a comprar o vender un inmueble y quieres estar seguro de que la partida está limpia.",
      "Te deben dinero y el deudor dejó de responder.",
      "Falleció un familiar y hay que ordenar la sucesión y la transferencia de los bienes.",
      "Tu inquilino no paga o no quiere desocupar.",
      "Firmaste un contrato que la otra parte no está cumpliendo.",
      "Quieres dejar tu patrimonio ordenado en vida, para evitarle el problema a tu familia.",
    ],
    puntos: [
      "Contratos civiles y comerciales: redacción y revisión de compraventa, arrendamiento y prestación de servicios, con cláusulas que protejan al cliente",
      "Compra y venta de inmuebles: estudio de títulos, revisión documentaria y acompañamiento en toda la operación",
      "Derechos reales: uso, usufructo y servidumbre",
      "Responsabilidad civil: indemnización por daños y perjuicios, contractual y extracontractual",
      "Herencias y sucesiones, testamentarias e intestadas, y planificación de la transmisión del patrimonio",
      "Régimen patrimonial del matrimonio: separación de bienes y capitulaciones",
      "Obligaciones: cumplimiento, incumplimiento, cesión de derechos y subrogación",
      "Conciliación y litigio civil, con representación integral en juicio",
      "Arrendamiento de bienes muebles e inmuebles, incluidos desalojos y reclamaciones",
      "Contratos de préstamo y crédito, y cobranza judicial y extrajudicial de deudas",
      "Protección de propiedad intelectual: derechos de autor, patentes y marcas",
    ],
    entregables: [
      "Estudio de títulos con las cargas, gravámenes y riesgos detectados, antes de que pagues",
      "Contrato redactado o revisado, con las observaciones explicadas en lenguaje claro",
      "Demanda, contestación o solicitud de conciliación presentada, con su cargo",
      "Sucesión intestada o testamentaria tramitada e inscrita",
    ],
    documentos: [
      "Partida registral del inmueble, si el asunto es inmobiliario",
      "El contrato o documento que origina el conflicto",
      "Documentos de identidad de las partes involucradas",
      "Partidas de nacimiento, matrimonio o defunción, en asuntos sucesorios",
    ],
    preguntas: [
      {
        p: "Voy a comprar un inmueble, ¿qué debo revisar antes de firmar?",
        r: "Como mínimo: que el vendedor sea el titular inscrito, que no existan cargas ni gravámenes, que no haya procesos judiciales sobre el bien, que las áreas del registro coincidan con la realidad y que estén al día los tributos municipales. El estudio de títulos cuesta una fracción de lo que cuesta descubrir el problema después.",
      },
      {
        p: "Me deben dinero pero solo tengo un acuerdo verbal, ¿puedo cobrar?",
        r: "Puede ser posible, aunque es más difícil. Todo depende de qué evidencia exista de la entrega: transferencias, mensajes, testigos, reconocimientos parciales. Antes de descartar el caso vale la pena revisar qué hay.",
      },
      {
        p: "¿Cuánto demora un desalojo?",
        r: "Depende de la causal y de la vía procesal. Un contrato con cláusula de allanamiento futuro y firmas legalizadas permite una vía mucho más rápida que un arrendamiento informal, y eso se decide al momento de firmar el contrato, no al momento del conflicto.",
      },
    ],
    relacionados: [
      "asesoria-corporativa",
      "defensa-penal-empresarial",
      "asesoria-tributaria",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría legal civil.",
  },

  {
    slug: "defensa-penal-empresarial",
    icono: "alerta",
    titulo: "Defensa penal empresarial",
    resumen:
      "Prevención del riesgo penal y defensa de la empresa y sus directivos ante una crisis.",
    detalle:
      "La asesoría penal previene incidentes que afectan gravemente la reputación y el patrimonio de la empresa, asegura el cumplimiento normativo, protege los derechos de directivos y trabajadores, y permite responder con rapidez ante una situación de crisis.",
    paraQuien: [
      "Te citaron a declarar en Fiscalía y no sabes en calidad de qué.",
      "Detectaste un fraude interno y necesitas investigarlo sin destruir la evidencia.",
      "Tu empresa fue víctima de una estafa y quieres denunciar y recuperar lo perdido.",
      "SUNAT derivó un caso al Ministerio Público por presunto delito tributario.",
      "Quieres implementar un programa de cumplimiento antes de que ocurra el problema, no después.",
    ],
    puntos: [
      "Cumplimiento penal: implementación de programas de prevención de delitos en la empresa",
      "Políticas anticorrupción y detección de actos de corrupción interna",
      "Prevención de delitos financieros y lavado de activos: procedimientos y controles internos",
      "Defensa penal corporativa: representación de la empresa y de sus directivos en investigaciones preliminares y procesos penales",
      "Investigaciones internas de fraude, robo interno y desfalco, y manejo de conflictos de interés",
      "Delitos contra el patrimonio: defensa cuando la empresa es víctima de estafa o fraude, y recuperación de activos",
      "Delitos contra la administración pública: soborno y cohecho, y consultoría en licitaciones y contratación pública",
      "Delitos informáticos, ciberseguridad y protección de datos personales",
      "Gestión de crisis: atención inmediata ante allanamientos y detenciones, y estrategia de comunicación",
      "Capacitación y simulacros de riesgo penal para directivos y trabajadores",
    ],
    entregables: [
      "Análisis del caso con la calificación jurídica de los hechos y el escenario de riesgo real",
      "Estrategia de defensa por escrito, con la teoría del caso y la prueba que la sostiene",
      "Escritos presentados ante Fiscalía o el Poder Judicial, con su cargo",
      "Programa de cumplimiento documentado, cuando el encargo es preventivo",
    ],
    preguntas: [
      {
        p: "Me citaron a declarar, ¿voy solo o con abogado?",
        r: "Con abogado, siempre, y sin excepción aunque te digan que es un trámite. Lo primero que hay que determinar es en qué calidad se te cita: testigo, investigado o agraviado. Esa calidad puede cambiar durante la propia diligencia, y lo que declares queda.",
      },
      {
        p: "¿Un problema tributario puede terminar en lo penal?",
        r: "Sí. La defraudación tributaria está tipificada en el Decreto Legislativo 813 y SUNAT puede formular denuncia. Por eso, cuando una fiscalización presenta indicios de simulación o de operaciones no fehacientes, conviene que la defensa tributaria y la penal se coordinen desde el primer día.",
      },
      {
        p: "¿Pueden procesar a la empresa y no solo a las personas?",
        r: "Sí. La Ley 30424 regula la responsabilidad administrativa de las personas jurídicas por determinados delitos, y contar con un modelo de prevención implementado y funcionando es un elemento que se valora. Implementarlo después de la denuncia sirve mucho menos.",
      },
    ],
    relacionados: [
      "asesoria-tributaria",
      "asesoria-corporativa",
      "asesoria-civil",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito defensa penal empresarial.",
  },

  {
    slug: "disolucion-y-liquidacion",
    icono: "cierre",
    titulo: "Disolución, liquidación y extinción de empresas",
    resumen:
      "Salida ordenada del mercado, con control de contingencias y cierre formal ante SUNAT y SUNARP.",
    detalle:
      "Cerrar una empresa mal cuesta más que cerrarla bien. Conducimos el proceso al amparo de la Ley General de Sociedades (Ley 26887), el Decreto Ley 21621 sobre EIRL o la Ley General del Sistema Concursal (Ley 27809), según corresponda al caso concreto.",
    paraQuien: [
      "El negocio dejó de operar y la empresa sigue acumulando obligaciones formales y multas.",
      "Los socios acordaron cerrar y no saben por dónde empezar.",
      "Las pérdidas redujeron el patrimonio por debajo del límite legal y la disolución dejó de ser opcional.",
      "Quieres cerrar pero hay deudas pendientes y temes responder con tu patrimonio personal.",
      "Tienes una empresa inactiva desde hace años que nunca diste de baja.",
    ],
    puntos: [
      "Análisis de la causal aplicable y de la vía idónea (societaria o concursal)",
      "Acuerdos societarios y nombramiento de liquidador",
      "Balance inicial y final de liquidación",
      "Tratamiento de pasivos contingentes y reserva de liquidación",
      "Distribución del remanente entre socios y su tratamiento tributario",
      "Cancelación de la partida registral en SUNARP",
      "Baja de RUC y cierre de obligaciones ante SUNAT",
    ],
    entregables: [
      "Informe con la causal aplicable, la vía recomendada y el mapa de contingencias",
      "Actas de disolución y de nombramiento de liquidador, inscritas en SUNARP",
      "Balance inicial y final de liquidación",
      "Partida registral cancelada y baja de RUC tramitada",
    ],
    preguntas: [
      {
        p: "Mi empresa está inactiva hace años, ¿basta con dejarla así?",
        r: "No. Una empresa inactiva sigue obligada a declarar y sigue generando multas, y su partida registral permanece abierta. Además, la baja de oficio que aplica SUNAT no equivale a la extinción societaria: la sociedad continúa existiendo para el registro.",
      },
      {
        p: "¿Puedo cerrar si tengo deudas pendientes?",
        r: "Se puede, pero el camino cambia. La liquidación exige pagar a los acreedores antes de distribuir cualquier remanente entre los socios, y hacerlo al revés puede generar responsabilidad para el liquidador y para los propios socios. Cuando el pasivo supera al activo, la vía concursal suele ser la correcta.",
      },
      {
        p: "¿Cuánto demora todo el proceso?",
        r: "Depende del volumen de activos y pasivos y de si hay contingencias abiertas con SUNAT. No es un trámite de días: es un procedimiento con etapas sucesivas que deben respetarse, y saltárselas es lo que después genera responsabilidad personal.",
      },
    ],
    relacionados: [
      "asesoria-corporativa",
      "asesoria-tributaria",
      "asesoria-financiera",
    ],
    precio: "Sujeto a evaluación del caso",
    whatsapp: "Necesito asesoría en disolución y liquidación de empresas.",
  },
];


/* --------------------------------------------------------------------------
   6. METODOLOGÍA DE TRABAJO
   -------------------------------------------------------------------------- */

export const metodologia = {
  antetitulo: "Cómo trabajamos",
  titulo: "Un método de cuatro etapas, sin improvisación",
  bajada:
    "Cada encargo sigue la misma secuencia. El cliente sabe en todo momento en qué etapa está su caso y qué se espera de cada parte.",
  pasos: [
    {
      numero: "01",
      titulo: "Diagnóstico",
      texto:
        "Revisamos la documentación, identificamos las contingencias y delimitamos el problema con precisión antes de proponer una solución.",
    },
    {
      numero: "02",
      titulo: "Estrategia",
      texto:
        "Definimos la ruta técnica, las alternativas viables y el escenario de riesgo de cada una, con su sustento normativo y jurisprudencial.",
    },
    {
      numero: "03",
      titulo: "Ejecución",
      texto:
        "Elaboramos y presentamos los escritos, declaraciones o expedientes, y asumimos la interlocución con la entidad o la contraparte.",
    },
    {
      numero: "04",
      titulo: "Seguimiento",
      texto:
        "Controlamos plazos y resultados, informamos periódicamente y ajustamos la estrategia cuando el expediente lo exige.",
    },
  ],
};

/* --------------------------------------------------------------------------
   7. BENEFICIOS
   -------------------------------------------------------------------------- */

export const beneficios = {
  antetitulo: "Por qué el estudio",
  titulo: "Beneficios de trabajar con nosotros",
  bajada:
    "La ventaja de un equipo que integra la mirada legal, contable y financiera sobre un mismo expediente.",
  lista: [
    {
      icono: "escudo",
      titulo: "Cumplimiento normativo",
      texto:
        "Reducción de riesgos legales, tributarios y laborales mediante revisión preventiva y corrección oportuna.",
    },
    {
      icono: "grafico",
      titulo: "Información para decidir",
      texto:
        "Estados financieros y reportes claros, con lectura ejecutiva del impacto real en el negocio.",
    },
    {
      icono: "retorno",
      titulo: "Optimización de recursos",
      texto:
        "Aprovechamiento de los beneficios tributarios y financieros que la norma reconoce, sin exponer a la empresa.",
    },
    {
      icono: "personas",
      titulo: "Atención personalizada",
      texto:
        "Interlocución directa con el profesional a cargo del caso, sin intermediarios ni respuestas de plantilla.",
    },
    {
      icono: "candado",
      titulo: "Confidencialidad",
      texto:
        "Tratamiento reservado de la información del cliente y resguardo de la documentación entregada.",
    },
    {
      icono: "brujula",
      titulo: "Acompañamiento integral",
      texto:
        "Un solo equipo para lo legal, lo contable y lo financiero, con criterio unificado en todo el expediente.",
    },
    {
      icono: "red",
      titulo: "Red de contactos",
      texto:
        "Acceso a una red de especialistas y contrapartes técnicas cuando el caso exige apoyo externo.",
    },
  ],
};

/* --------------------------------------------------------------------------
   8. SOCIO FUNDADOR
   -------------------------------------------------------------------------- */

export const fundador = {
  antetitulo: "Socio fundador",
  nombre: "Carlos José Tolentino Béjar",
  cargo: "Gerente General y Socio Fundador",
  foto: "/images/socio-fundador.webp",
  fotoAlt:
    "Carlos José Tolentino Béjar, socio fundador de Estudio Tolentino & Asociados, en su despacho",
  iniciales: "CT",
  perfil: [
    "Abogado y Contador Público Colegiado, con más de quince años de trayectoria en tributación, contabilidad, auditoría y asesoría legal corporativa.",
    "Ha conducido procedimientos contencioso-tributarios ante SUNAT, el Tribunal Fiscal y el Poder Judicial, y ha gestionado más de S/ 200 millones en solicitudes de devolución por saldo a favor del exportador, Impuesto a la Renta y otros tributos, para empresas exportadoras, industriales y comerciales.",
    "Es fundador y director del Instituto Peruano de Derecho y Gestión Empresarial (IPDGE).",
  ],
  formacion: [
    "Magíster en Tributación y Política Fiscal, Universidad Nacional Mayor de San Marcos",
    "MBA en Administración Estratégica, CENTRUM PUCP",
    "Abogado y Contador Público Colegiado",
  ],
  certificaciones: [
    "Perito Contable Judicial",
    "Auditor Financiero Independiente",
    "Conciliador Extrajudicial",
  ],
  colegiaturas: ["CAL 99302", "CCPL 47524"],
  cta: { etiqueta: "Conocer al equipo", href: "/nosotros" },
};

/* --------------------------------------------------------------------------
   8 bis. PÁGINA NOSOTROS
   -------------------------------------------------------------------------- */

export const nosotros = {
  antetitulo: "La firma",
  titulo: "Abogados y contadores trabajando sobre el mismo expediente",
  bajada:
    "Estudio Tolentino & Asociados es una firma peruana de abogados y contadores con más de una década en el mercado. Asesoramos a empresas y personas naturales en materia tributaria, aduanera, contable, financiera, laboral, corporativa, civil y penal.",

  quienesSomos: [
    "Nacimos en 2013 con una convicción simple: los problemas de una empresa peruana rara vez son solo legales o solo contables. Una fiscalización tributaria se gana o se pierde en los registros contables. Un despido mal documentado se convierte en una contingencia laboral y en un reparo tributario a la vez. Una reorganización societaria bien pensada en lo legal puede resultar costosa si nadie midió su efecto fiscal.",
    "Por eso trabajamos con un equipo multidisciplinario de abogados y contadores que revisa el mismo expediente desde ambas orillas. El cliente no tiene que traducir entre su abogado y su contador, ni asumir el riesgo de que ninguno de los dos vea el problema completo.",
    "Atendemos desde nuestras oficinas de Miraflores, en Lima, y de Chilca, en Cañete, a micro y pequeñas empresas, negocios en crecimiento, importadores y exportadores, y a personas naturales con asuntos tributarios, civiles, sucesorios o penales.",
  ],

  mision: {
    titulo: "Misión",
    texto:
      "Brindar asesoría legal, contable, tributaria y financiera de calidad técnica verificable, que permita a nuestros clientes cumplir la normativa vigente, reducir contingencias y tomar decisiones sustentadas sobre su negocio y su patrimonio.",
  },
  vision: {
    titulo: "Visión",
    texto:
      "Ser la firma peruana de referencia en la integración de las materias legal, contable y tributaria, reconocida por el rigor de su trabajo y por la cercanía con la que acompaña a sus clientes.",
  },

  valores: [
    {
      icono: "escudo",
      titulo: "Integridad",
      texto:
        "Decimos lo que el expediente permite sostener, aunque no sea lo que el cliente espera escuchar.",
    },
    {
      icono: "check",
      titulo: "Excelencia",
      texto:
        "Cada escrito y cada estado financiero se sustenta en la norma, la jurisprudencia y la evidencia documentaria.",
    },
    {
      icono: "brujula",
      titulo: "Innovación",
      texto:
        "Incorporamos herramientas de automatización y análisis que reducen el error y liberan tiempo para lo que sí exige criterio.",
    },
    {
      icono: "acuerdo",
      titulo: "Profesionalismo",
      texto:
        "Plazos cumplidos, honorarios acordados por escrito y comunicación clara sobre el estado real de cada caso.",
    },
    {
      icono: "candado",
      titulo: "Confidencialidad",
      texto:
        "La información del cliente se maneja bajo reserva profesional y con acceso restringido.",
    },
    {
      icono: "grafico",
      titulo: "Eficiencia",
      texto:
        "Buscamos la vía más corta y menos onerosa que resuelva el problema de raíz, no la que genere más horas facturables.",
    },
    {
      icono: "personas",
      titulo: "Compromiso",
      texto:
        "Asumimos el caso como propio y respondemos por el resultado hasta el cierre del expediente.",
    },
  ],

  equipo: {
    titulo: "El equipo",
    texto:
      "Además del socio fundador, el estudio se apoya en un equipo de abogados y contadores públicos colegiados que se asigna a cada encargo según la materia. Esta sección se ampliará con los perfiles del equipo.",
  },
};

/* --------------------------------------------------------------------------
   9. PREGUNTAS FRECUENTES
   -------------------------------------------------------------------------- */

export const faq = {
  antetitulo: "Preguntas frecuentes",
  titulo: "Lo que suelen consultarnos antes de empezar",
  items: [
    {
      pregunta: "¿El primer contacto tiene costo?",
      respuesta:
        "No. La primera conversación, de diez a quince minutos, no tiene costo: sirve para entender de qué se trata el caso, decirte si encaja en nuestras materias y qué alcance tendría el trabajo. Si a partir de ahí se requiere una asesoría formal, con revisión de documentos, opinión escrita o diseño de estrategia, te enviamos la propuesta de honorarios por escrito y solo empezamos cuando la apruebas.",
    },
    {
      pregunta: "¿Cuánto cuestan sus servicios?",
      respuesta:
        "El servicio de outsourcing contable y de planillas tiene planes desde S/ 200 mensuales, según el volumen de operaciones y el régimen tributario de la empresa. Los demás servicios se cotizan según la complejidad del caso, el plazo y el volumen de documentación, porque una fiscalización de un solo periodo y una que abarca cuatro años no cuestan lo mismo. En todos los casos recibes la propuesta por escrito antes de que iniciemos.",
    },
    {
      pregunta: "¿Atienden a personas naturales o solo a empresas?",
      respuesta:
        "A ambos. Las empresas concentran la mayor parte de los encargos en materia tributaria, contable y laboral. También asesoramos a personas naturales en materia tributaria, civil, sucesoria y penal.",
    },
    {
      pregunta: "Recibí un requerimiento de SUNAT, ¿qué hago?",
      respuesta:
        "Lo primero es no dejar vencer el plazo de respuesta, que suele ser corto y perentorio. Escríbenos con el número de requerimiento y la fecha de notificación: revisamos el alcance de la fiscalización y preparamos el descargo con el sustento documentario que corresponda.",
    },
    {
      pregunta: "¿Cuánto demora constituir una empresa?",
      respuesta:
        "De cinco a siete días hábiles desde que nos entregas todos los datos y documentos: reserva de nombre en SUNARP, minuta, escritura pública, inscripción registral y RUC activo. Los derechos notariales y registrales se pagan directamente a la notaría y a SUNARP, y bordean los S/ 150 para un capital social de hasta S/ 10,000.",
    },
    {
      pregunta: "¿Puedo cambiar de contador a mitad del año?",
      respuesta:
        "Sí, y es más común de lo que se cree. Recibimos la información del contador anterior, revisamos las declaraciones ya presentadas y los libros electrónicos, e identificamos omisiones o inconsistencias antes de asumir. Ese diagnóstico inicial evita heredar un problema sin saberlo.",
    },
    {
      pregunta: "¿Cuánto demora una solicitud de devolución de impuestos?",
      respuesta:
        "El plazo depende del tributo, del tipo de solicitud y de la calidad del sustento presentado. Un expediente bien armado desde el inicio reduce de forma significativa los requerimientos posteriores y el tiempo total del procedimiento.",
    },
    {
      pregunta: "¿Atienden fuera de Lima?",
      respuesta:
        "Sí. Contamos con oficinas en Miraflores y en Chilca, Cañete, y atendemos encargos de clientes de otras regiones mediante reuniones virtuales y gestión documentaria electrónica.",
    },
    {
      pregunta: "¿Cómo protegen la información que entrego?",
      respuesta:
        "La información se maneja bajo reserva profesional y se almacena en repositorios de acceso restringido. El tratamiento de datos personales se rige por la Ley 29733 y por nuestra política de privacidad.",
    },
  ],
};

/* --------------------------------------------------------------------------
   10. CONTACTO
   -------------------------------------------------------------------------- */

export const contacto = {
  antetitulo: "Contacto",
  titulo: "Cuéntanos tu caso",
  bajada:
    "Completa el formulario y un profesional del estudio se comunicará contigo. La primera conversación no tiene costo. Si el asunto es urgente, escríbenos directamente por WhatsApp.",
  // Clave de acceso de Web3Forms, asociada a informes@tolentinoyasociados.com.
  //
  // Va en el código a propósito: Web3Forms la llama "access key" y está
  // diseñada para viajar en el navegador, así que igual quedaría visible en el
  // JavaScript del sitio. No da acceso a nada: solo identifica la bandeja de
  // destino. Dejarla aquí evita el error más común al desplegar, que es olvidar
  // cargar la variable de entorno en el hosting y que los formularios queden
  // mudos sin que nadie lo note.
  //
  // La variable de entorno, si existe, tiene prioridad: sirve para apuntar a
  // otro correo en pruebas sin tocar el código.
  web3formsKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    "28c9c53f-a23e-4055-9bc3-09347cb20612",
  materias: servicios.map((s) => s.titulo).concat("Otra consulta"),
  consentimiento:
    "Autorizo el tratamiento de mis datos personales conforme a la Ley 29733 y a la política de privacidad del estudio, con la finalidad de atender mi consulta.",
};

/* --------------------------------------------------------------------------
   11. PIE DE PÁGINA Y PÁGINAS LEGALES
   -------------------------------------------------------------------------- */

export const legales = [
  { etiqueta: "Política de Privacidad", href: "/politica-de-privacidad" },
  { etiqueta: "Términos de Uso", href: "/terminos-de-uso" },
  { etiqueta: "Libro de Reclamaciones", href: "/libro-de-reclamaciones" },
];

export const pie = {
  descripcion:
    "Firma peruana de abogados y contadores. Asesoría tributaria, aduanera, contable, financiera, laboral, corporativa, civil y penal para empresas y personas naturales.",
  avisoReclamaciones:
    "Conforme al Código de Protección y Defensa del Consumidor (Ley 29571), este establecimiento cuenta con un Libro de Reclamaciones virtual a disposición de los consumidores.",
};

/* --------------------------------------------------------------------------
   12. SEO
   -------------------------------------------------------------------------- */

export const seo = {
  titulo: "Estudio Tolentino & Asociados | Abogados y Contadores en Lima",
  tituloPlantilla: "%s | Estudio Tolentino & Asociados",
  descripcion:
    "Firma peruana de abogados y contadores. Asesoría tributaria, devolución de impuestos, drawback, constitución de empresas, outsourcing contable, laboral, civil y penal. Oficinas en Miraflores y Chilca.",
  palabrasClave: [
    "abogados tributaristas Lima",
    "contadores públicos Lima",
    "outsourcing contable Lima",
    "constitución de empresas Perú",
    "devolución de impuestos Perú",
    "saldo a favor del exportador",
    "drawback exportadores",
    "defensa ante SUNAT",
    "liquidación de empresas Perú",
    "asesoría laboral SUNAFIL",
    "estudio contable Miraflores",
    "asesoría tributaria Cañete",
  ],
};
