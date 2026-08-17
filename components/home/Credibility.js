/* ==========================================================================
   Credibility — barra de indicadores con contadores animados
   ========================================================================== */

import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { credibilidad } from "@/content/site";

export default function Credibility() {
  return (
    <section
      className="relative border-b border-line bg-paper-alt"
      aria-label="Indicadores de la firma"
    >
      <div className="container-brand grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4 lg:gap-y-0 lg:py-16">
        {credibilidad.map((item, i) => (
          <Reveal
            key={item.etiqueta}
            delay={i * 110}
            className={`px-2 text-center lg:px-8 ${
              i > 0 ? "lg:border-l lg:border-line" : ""
            }`}
          >
            <p className="font-serif text-4xl leading-none text-navy lg:text-[2.9rem]">
              <Counter
                valor={item.valor}
                sufijo={item.sufijo}
                formato={item.formato}
              />
            </p>
            <p className="mt-3 text-[0.72rem] font-semibold tracking-[0.16em] text-bronze uppercase">
              {item.etiqueta}
            </p>
            <p className="mx-auto mt-2 max-w-[15rem] text-[0.82rem] leading-snug text-muted">
              {item.detalle}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
