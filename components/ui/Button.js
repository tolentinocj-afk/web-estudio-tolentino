/* ==========================================================================
   Button — botón / enlace de acción
   --------------------------------------------------------------------------
   variantes:
     primario   → azul marino sólido, acción principal
     acento     → bronce sólido, acción principal sobre fondo claro
     contorno   → borde fino, sobre fondo claro
     claro      → borde blanco, sobre fondo oscuro (hero, pie de página)
   ========================================================================== */

import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]";

const variantes = {
  primario:
    "bg-navy text-white hover:bg-navy-deep hover:shadow-[0_10px_28px_-12px_rgba(46,58,89,0.7)] hover:-translate-y-0.5",
  acento:
    "bg-bronze text-white hover:bg-[#7a6449] hover:shadow-[0_10px_28px_-12px_rgba(138,115,85,0.8)] hover:-translate-y-0.5",
  contorno:
    "border border-navy/25 text-navy hover:border-bronze hover:text-bronze",
  claro:
    "border border-white/45 text-white hover:border-bronze hover:bg-bronze hover:text-white",
};

export default function Button({
  href,
  variante = "primario",
  className = "",
  children,
  ...props
}) {
  const clases = `${base} ${variantes[variante] || variantes.primario} ${className}`;

  // Enlaces externos y anclas usan <a>; las rutas internas usan <Link>.
  if (href) {
    const esExterno = href.startsWith("http") || href.startsWith("#");
    if (esExterno) {
      return (
        <a href={href} className={clases} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={clases} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clases} {...props}>
      {children}
    </button>
  );
}
