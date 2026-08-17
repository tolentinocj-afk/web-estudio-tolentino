/* ==========================================================================
   LegalPage — maqueta común de las páginas legales
   --------------------------------------------------------------------------
   Índice lateral pegajoso más el cuerpo del documento. Las secciones se
   declaran como datos, de modo que el índice se genera solo.
   ========================================================================== */

import Reveal from "@/components/ui/Reveal";

export default function LegalPage({ actualizado, intro, secciones }) {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* --- Índice ---------------------------------------------------- */}
        <Reveal className="lg:col-span-3">
          <nav
            aria-label="Índice del documento"
            className="sticky top-32 border-t-2 border-bronze pt-6"
          >
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-navy uppercase">
              Contenido
            </p>
            <ol className="mt-5 space-y-2.5 text-[0.85rem] leading-snug">
              {secciones.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-muted transition-colors hover:text-bronze"
                  >
                    <span className="mr-2 text-bronze">{i + 1}.</span>
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ol>

            {actualizado && (
              <p className="mt-8 border-t border-line pt-6 text-[0.78rem] leading-relaxed text-muted">
                Última actualización:
                <br />
                {actualizado}
              </p>
            )}
          </nav>
        </Reveal>

        {/* --- Cuerpo ----------------------------------------------------- */}
        <Reveal delay={100} className="lg:col-span-9">
          <div className="max-w-3xl">
            {intro && (
              <p className="border-l-2 border-bronze pl-6 text-base leading-relaxed text-ink">
                {intro}
              </p>
            )}

            {secciones.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-32 border-t border-line pt-8 first-of-type:border-t-0 mt-12"
              >
                <h2 className="font-serif text-2xl leading-snug text-navy">
                  <span className="mr-3 text-bronze">{i + 1}.</span>
                  {s.titulo}
                </h2>

                <div className="mt-6 space-y-5 text-[0.98rem] leading-relaxed text-muted">
                  {s.parrafos?.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}

                  {s.lista && (
                    <ul className="space-y-3 pl-0">
                      {s.lista.map((li, j) => (
                        <li key={j} className="relative pl-6">
                          <span
                            aria-hidden="true"
                            className="absolute top-[0.85em] left-0 h-px w-2.5 bg-bronze"
                          />
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.cierre?.map((p, j) => (
                    <p key={`c${j}`}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
