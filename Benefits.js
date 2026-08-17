/* ==========================================================================
   Benefits — beneficios de trabajar con el estudio
   ========================================================================== */

import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { beneficios } from "@/content/site";

export default function Benefits() {
  return (
    <section
      className="bg-paper-alt py-24 lg:py-32"
      aria-labelledby="beneficios-titulo"
    >
      <div className="container-brand">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* --- Encabezado lateral ---------------------------------------- */}
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">{beneficios.antetitulo}</p>
            <h2
              id="beneficios-titulo"
              className="mt-5 font-serif text-3xl leading-tight text-navy sm:text-4xl"
            >
              {beneficios.titulo}
            </h2>
            <div className="rule-gold mt-8" aria-hidden="true" />
            <p className="mt-8 text-base leading-relaxed text-muted">
              {beneficios.bajada}
            </p>
          </Reveal>

          {/* --- Lista de beneficios --------------------------------------- */}
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {beneficios.lista.map((b, i) => (
              <Reveal as="li" key={b.titulo} delay={i * 70} className="flex gap-5">
                <span className="mt-0.5 inline-flex h-11 w-11 flex-none items-center justify-center border border-bronze/35 bg-white text-bronze">
                  <Icon name={b.icono} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg leading-snug text-navy">
                    {b.titulo}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                    {b.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
