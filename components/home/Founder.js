/* ==========================================================================
   Founder — perfil del socio fundador
   --------------------------------------------------------------------------
   Mientras no exista la fotografía formal, se muestra un marco con el
   monograma de iniciales sobre azul marino. Al definir fundador.foto en
   content/site.js, el retrato reemplaza automáticamente al marco.
   ========================================================================== */

import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { fundador } from "@/content/site";

export default function Founder() {
  return (
    <section
      className="bg-paper py-24 lg:py-32"
      aria-labelledby="fundador-titulo"
    >
      <div className="container-brand">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* --- Retrato ----------------------------------------------------- */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              {/* Marco dorado desplazado, recurso gráfico de la marca */}
              <span
                aria-hidden="true"
                className="absolute -top-4 -left-4 hidden h-full w-full border border-bronze/45 sm:block"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
                {fundador.foto ? (
                  <Image
                    src={fundador.foto}
                    alt={fundador.fotoAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                ) : (
                  <div
                    className="pattern-lines flex h-full w-full flex-col items-center justify-center gap-4"
                    role="img"
                    aria-label={fundador.fotoAlt}
                  >
                    <span className="font-serif text-6xl text-white/85">
                      {fundador.iniciales}
                    </span>
                    <span className="h-px w-14 bg-bronze" aria-hidden="true" />
                    <span className="px-8 text-center text-[0.66rem] tracking-[0.2em] text-white/45 uppercase">
                      Fotografía institucional pendiente
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Colegiaturas */}
            <ul className="mt-8 flex flex-wrap gap-3">
              {fundador.colegiaturas.map((c) => (
                <li
                  key={c}
                  className="border border-line px-4 py-2 text-[0.7rem] font-semibold tracking-[0.14em] text-navy uppercase"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* --- Perfil ------------------------------------------------------ */}
          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow">{fundador.antetitulo}</p>

            <h2
              id="fundador-titulo"
              className="mt-5 font-serif text-3xl leading-tight text-navy sm:text-4xl"
            >
              {fundador.nombre}
            </h2>
            <p className="mt-3 text-[0.78rem] font-semibold tracking-[0.16em] text-bronze uppercase">
              {fundador.cargo}
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              {fundador.perfil.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Formación y certificaciones */}
            <div className="mt-10 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
              <div>
                <h3 className="text-[0.7rem] font-semibold tracking-[0.18em] text-navy uppercase">
                  Formación
                </h3>
                <ul className="mt-4 space-y-3">
                  {fundador.formacion.map((f) => (
                    <li key={f} className="flex gap-3 text-[0.88rem] leading-snug text-muted">
                      <Icon
                        name="check"
                        className="mt-1 h-3.5 w-3.5 flex-none text-bronze"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[0.7rem] font-semibold tracking-[0.18em] text-navy uppercase">
                  Certificaciones
                </h3>
                <ul className="mt-4 space-y-3">
                  {fundador.certificaciones.map((c) => (
                    <li key={c} className="flex gap-3 text-[0.88rem] leading-snug text-muted">
                      <Icon
                        name="check"
                        className="mt-1 h-3.5 w-3.5 flex-none text-bronze"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              href={fundador.cta.href}
              variante="contorno"
              className="mt-10"
            >
              {fundador.cta.etiqueta}
              <Icon name="flecha" className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
