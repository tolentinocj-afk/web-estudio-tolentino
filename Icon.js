/* ==========================================================================
   Icon — set de íconos lineales propios
   --------------------------------------------------------------------------
   Trazo fino y geometría sobria, coherente con la identidad de la firma.
   Sin martillos de juez, balanzas ornamentales ni billetes.
   Uso: <Icon name="escudo" className="h-6 w-6 text-bronze" />
   ========================================================================== */

const paths = {
  /* --- Servicios ---------------------------------------------------------- */
  escudo: (
    <>
      <path d="M12 3.2 19.2 6v5.4c0 4.2-2.9 7.6-7.2 9.4-4.3-1.8-7.2-5.2-7.2-9.4V6L12 3.2Z" />
      <path d="m9.2 11.8 2 2 3.6-3.9" />
    </>
  ),
  /* Devolución: flecha que retorna hacia una bandeja. Sin símbolos de dinero. */
  retorno: (
    <>
      <path d="M20 13.4a8 8 0 1 1-2.4-5.7" />
      <path d="M20 3.6v4.6h-4.6" />
      <path d="M3.6 17.2h16.8v3.2H3.6z" />
    </>
  ),
  exportacion: (
    <>
      <path d="M3.5 8.6 12 4.2l8.5 4.4-8.5 4.4L3.5 8.6Z" />
      <path d="M3.5 13.2 12 17.6l8.5-4.4" />
      <path d="M3.5 17.4 12 21.8l8.5-4.4" />
    </>
  ),
  /* Disolución: salida ordenada, puerta con flecha de egreso. */
  cierre: (
    <>
      <path d="M13 3.6H5.2a1.6 1.6 0 0 0-1.6 1.6v13.6a1.6 1.6 0 0 0 1.6 1.6H13" />
      <path d="M9.8 12h10.6" />
      <path d="m17.2 8.6 3.2 3.4-3.2 3.4" />
    </>
  ),
  libros: (
    <>
      <path d="M4 5.4c2.6-.9 5.3-.9 8 0v14c-2.7-.9-5.4-.9-8 0v-14Z" />
      <path d="M20 5.4c-2.6-.9-5.3-.9-8 0v14c2.7-.9 5.4-.9 8 0v-14Z" />
      <path d="M6.4 9.2h3.2M6.4 12.6h3.2M14.4 9.2h3.2M14.4 12.6h3.2" />
    </>
  ),
  grafico: (
    <>
      <path d="M4 4v16h16" />
      <path d="M7.6 15.6v-3.2M11.4 15.6V8.8M15.2 15.6v-5M19 15.6V6.4" />
    </>
  ),
  personas: (
    <>
      <circle cx="9.2" cy="8.4" r="3.2" />
      <path d="M3.6 19.6c0-3 2.5-5.2 5.6-5.2s5.6 2.2 5.6 5.2" />
      <path d="M16 5.6a3.2 3.2 0 0 1 0 6.2M17.4 14.8c1.9.6 3.2 2.4 3.2 4.8" />
    </>
  ),
  /* Asesoría legal: documento con sello. Sin balanzas ni martillos de juez. */
  balanza: (
    <>
      <path d="M6 3.2h8.4L19 7.8v13H6V3.2Z" />
      <path d="M14 3.4v4.6h4.6" />
      <path d="M8.8 10.4h4.4M8.8 13.2h6.4" />
      <circle cx="12" cy="17.2" r="2.2" />
    </>
  ),

  /* Constitución de empresas: sello registral sobre documento. */
  sello: (
    <>
      <path d="M5.4 3.4h9l4.2 4.2v13H5.4V3.4Z" />
      <path d="M14.2 3.6v4.4h4.4" />
      <circle cx="12" cy="13.4" r="3" />
      <path d="M9.6 20.4h4.8" />
    </>
  ),

  /* Corporativo: edificio societario de líneas sobrias. */
  edificio: (
    <>
      <path d="M3.6 20.6h16.8" />
      <path d="M5.4 20.6V5.4a2 2 0 0 1 2-2h5.6a2 2 0 0 1 2 2v15.2" />
      <path d="M15 9.6h2.6a2 2 0 0 1 2 2v9" />
      <path d="M8.4 7.6h3.2M8.4 11.2h3.2M8.4 14.8h3.2" />
    </>
  ),

  /* Civil: contrato firmado entre partes. */
  acuerdo: (
    <>
      <path d="M5.6 2.8h12.8v18.4H5.6z" />
      <path d="M8.4 6.8h7.2M8.4 9.8h7.2M8.4 12.8h4.2" />
      <path d="M8.4 17.4c1.1-1.9 2.2-1.9 3.3 0s2.2 1.9 3.3 0" />
    </>
  ),

  /* Penal: alerta y protección del patrimonio de la empresa. */
  alerta: (
    <>
      <path d="M12 3.4 20.4 18a1.4 1.4 0 0 1-1.2 2.1H4.8A1.4 1.4 0 0 1 3.6 18L12 3.4Z" />
      <path d="M12 9.4v4.2" />
      <path d="M12 17v.1" />
    </>
  ),

  /* --- Beneficios --------------------------------------------------------- */
  candado: (
    <>
      <rect x="4.6" y="10.2" width="14.8" height="10.2" rx="2" />
      <path d="M8.2 10.2V7.6a3.8 3.8 0 0 1 7.6 0v2.6" />
      <path d="M12 14v2.8" />
    </>
  ),
  brujula: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
    </>
  ),
  red: (
    <>
      <circle cx="12" cy="5.4" r="2.4" />
      <circle cx="5.4" cy="17" r="2.4" />
      <circle cx="18.6" cy="17" r="2.4" />
      <path d="m10.4 7.6-3.4 7M13.6 7.6l3.4 7M7.8 17h8.4" />
    </>
  ),

  /* --- Interfaz ----------------------------------------------------------- */
  telefono: (
    <path d="M6.2 3.8h3l1.5 3.8-2 1.4a11.4 11.4 0 0 0 5.3 5.3l1.4-2 3.8 1.5v3a1.8 1.8 0 0 1-2 1.8C10.6 18.1 5.9 13.4 4.4 5.8a1.8 1.8 0 0 1 1.8-2Z" />
  ),
  correo: (
    <>
      <rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.4 6-7.7 6-10a6 6 0 1 0-12 0c0 2.3 2 5.6 6 10Z" />
      <circle cx="12" cy="10.8" r="2.4" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.2V12l3.2 1.9" />
    </>
  ),
  check: <path d="m5 12.6 4.4 4.4L19 7.4" />,
  flecha: <path d="M4.6 12h14.8m-5.6-5.6L19.4 12l-5.6 5.6" />,
  chevron: <path d="m6.8 9.4 5.2 5.2 5.2-5.2" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  cerrar: <path d="M6 6l12 12M18 6 6 18" />,
  whatsapp: (
    <>
      <path d="M3.6 20.4 5 16.3a7.9 7.9 0 1 1 3 2.9l-4.4 1.2Z" />
      <path d="M9.1 8.6c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.5l.8 1.8c.1.2 0 .4-.1.6l-.5.6c-.2.2-.3.4-.1.7a7 7 0 0 0 3 2.6c.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4v.6c-.1.5-.7 1.2-1.3 1.3-1.1.3-2.4 0-4.6-1.3a10 10 0 0 1-3.4-3.7c-.7-1.4-.5-2.6.1-3.3l.2-.3Z" />
    </>
  ),

  /* --- Redes sociales ----------------------------------------------------- */
  linkedin: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="2.4" />
      <path d="M8 10.6v6M8 7.4v.1M12 16.6v-3.4a2 2 0 0 1 4 0v3.4M12 16.6v-6" />
    </>
  ),
  facebook: (
    <path d="M14.6 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H9v3h2.6V21" />
  ),
  instagram: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.6" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M16.9 7.1v.1" />
    </>
  ),
  tiktok: (
    <>
      <path d="M13.6 2.6v12.6a4.2 4.2 0 1 1-4.2-4.2c.42 0 .82.06 1.2.18" />
      <path d="M13.6 2.6c.45 3.05 2.9 5.45 5.9 5.85" />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6", ...props }) {
  const d = paths[name];
  if (!d) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {d}
    </svg>
  );
}
