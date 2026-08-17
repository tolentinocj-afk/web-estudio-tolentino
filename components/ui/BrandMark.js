/* ==========================================================================
   BrandMark — imagotipo del estudio
   --------------------------------------------------------------------------
   Reconstrucción vectorial del imagotipo: monograma "T&A" con la T y la A en
   azul marino y el ampersand en bronce, acompañado del texto institucional en
   serif con versalitas.

   Se construye con tipografía y no con un archivo de imagen para que se vea
   nítido en cualquier resolución y se adapte a fondos claros y oscuros.

   ⚠️ Si el estudio entrega el imagotipo original en SVG, basta con
   reemplazar el contenido de <Monograma> por ese archivo vectorial.

   variante: "oscuro" (para fondos claros) | "claro" (para fondos oscuros)
   ========================================================================== */

export function Monograma({ variante = "oscuro", className = "h-11 w-11" }) {
  const esClaro = variante === "claro";
  const colorLetras = esClaro ? "text-white" : "text-navy";
  const colorBorde = esClaro ? "border-white/35" : "border-navy/25";

  return (
    <span
      className={`${className} ${colorBorde} relative inline-flex flex-none items-center justify-center border`}
      aria-hidden="true"
    >
      {/* Filete dorado en las esquinas superiores, guiño al sello de la marca */}
      <span className="absolute -top-px -left-px h-2 w-2 border-t border-l border-bronze" />
      <span className="absolute -right-px -bottom-px h-2 w-2 border-r border-b border-bronze" />

      <span
        className={`font-serif leading-none tracking-[0.02em] ${colorLetras}`}
        style={{ fontSize: "0.92em" }}
      >
        T<span className="text-bronze">&amp;</span>A
      </span>
    </span>
  );
}

export default function BrandMark({
  variante = "oscuro",
  conTexto = true,
  className = "",
}) {
  const esClaro = variante === "claro";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Monograma
        variante={variante}
        className="h-9 w-9 flex-none text-[1.05rem] sm:h-11 sm:w-11 sm:text-[1.25rem]"
      />

      {conTexto && (
        <span className="flex flex-col justify-center leading-none">
          <span
            className={`font-serif text-[0.72rem] leading-tight tracking-[0.04em] whitespace-nowrap uppercase sm:text-[0.94rem] sm:tracking-[0.06em] ${
              esClaro ? "text-white" : "text-navy"
            }`}
          >
            Estudio Tolentino{" "}
            <span className="text-bronze">&amp;</span> Asociados
          </span>
          <span
            className={`mt-1 text-[0.5rem] leading-none font-medium tracking-[0.18em] uppercase sm:text-[0.6rem] sm:tracking-[0.24em] ${
              esClaro ? "text-white/65" : "text-muted"
            }`}
          >
            Abogados y Contadores
          </span>
        </span>
      )}
    </span>
  );
}
