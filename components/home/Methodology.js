/* ==========================================================================
   Methodology — línea de tiempo horizontal de cuatro pasos
   --------------------------------------------------------------------------
   En escritorio los pasos se disponen sobre una línea horizontal con nodos;
   en móvil la línea pasa a ser vertical.
   ========================================================================== */

import Reveal from "@/components/ui/Reveal";
import FondoImagen from "@/components/ui/FondoImagen";
import { imagenes, metodologia } from "@/content/site";

export default function Methodology() {
  const conFoto = Boolean(imagenes.metodologia.src);

  return (
    <section
      className={`relative bg-navy py-24 lg:py-32 ${conFoto ? "" : "pattern-lines"}`}
      aria-labelledby="metodologia-titulo"
    >
      <FondoImagen imagen={imagenes.metodologia} intensidad="media" />

      <div className="container-brand relative">
        {/* --- Encabezado ------------------------------------------------- */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-bronze-soft">{metodologia.antetitulo}</p>
          <h2
            id="metodologia-titulo"
            className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-[2.6rem]"
          >
            {metodologia.titulo}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            {metodologia.bajada}
          </p>
        </Reveal>

        {/* --- Línea de tiempo -------------------------------------------- */}
        <ol className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Línea horizontal continua (solo escritorio) */}
          <span
            aria-hidden="true"
            className="absolute top-[1.35rem] right-0 left-0 hidden h-px bg-white/15 lg:block"
          />

          {metodologia.pasos.map((paso, i) => (
            <Reveal
              as="li"
              key={paso.numero}
              delay={i * 140}
              className="relative pl-16 lg:pr-6 lg:pl-0"
            >
              {/* Línea vertical (solo móvil) */}
              {i < metodologia.pasos.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-12 bottom-[-3rem] left-[1.35rem] w-px bg-white/15 lg:hidden"
                />
              )}

              {/* Nodo numerado */}
              <span className="absolute top-0 left-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-bronze/60 bg-navy font-serif text-sm text-bronze-soft lg:relative lg:mb-8 lg:flex">
                {paso.numero}
              </span>

              <h3 className="font-serif text-xl text-white lg:mt-0">
                {paso.titulo}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-white/65">
                {paso.texto}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
