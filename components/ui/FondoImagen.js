/* ==========================================================================
   FondoImagen — fotografía de fondo con capa azul marino
   --------------------------------------------------------------------------
   Un solo componente resuelve los cuatro espacios fotográficos del sitio.

   Si no hay imagen configurada, no renderiza nada y la sección conserva su
   textura de líneas: por eso el sitio se ve terminado con fotos y sin ellas.

   La capa azul encima no es decorativa: garantiza que el texto blanco cumpla
   el contraste WCAG AA sobre cualquier fotografía, incluso si tiene zonas
   claras. La intensidad se regula con "intensidad".
   ========================================================================== */

import Image from "next/image";

const CAPAS = {
  // Para el hero: deja respirar la fotografía, el texto ocupa solo la izquierda
  suave:
    "bg-[linear-gradient(100deg,rgba(35,44,68,0.94)_0%,rgba(46,58,89,0.86)_45%,rgba(46,58,89,0.62)_100%)]",
  // Para bandas con texto sobre toda la superficie
  media:
    "bg-[linear-gradient(180deg,rgba(35,44,68,0.92)_0%,rgba(46,58,89,0.88)_100%)]",
  // Para cabeceras de páginas internas: la foto queda como textura de fondo
  fuerte:
    "bg-[linear-gradient(180deg,rgba(35,44,68,0.95)_0%,rgba(46,58,89,0.93)_100%)]",
};

export default function FondoImagen({
  imagen,
  intensidad = "media",
  prioridad = false,
  className = "",
}) {
  if (!imagen?.src) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <Image
        src={imagen.src}
        alt={imagen.alt || ""}
        fill
        priority={prioridad}
        sizes="100vw"
        quality={82}
        className="object-cover"
        style={{ objectPosition: imagen.posicion || "center" }}
      />
      {/* Capa azul marino que asegura la legibilidad del texto */}
      <div className={`absolute inset-0 ${CAPAS[intensidad] || CAPAS.media}`} />
      {/* Trama fina, para que la fotografía no se lea como un banco de imágenes */}
      <div className="pattern-lines absolute inset-0 opacity-60" />
    </div>
  );
}
