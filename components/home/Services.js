/* ==========================================================================
   Services — cuadrícula de líneas de práctica
   --------------------------------------------------------------------------
   Cada tarjeta enlaza a su página interna en /servicios/[slug].
   Entrada escalonada y hover con elevación leve, borde dorado y cambio de
   color del ícono.
   ========================================================================== */

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { servicios, firm } from "@/content/site";

export default function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-28 bg-paper py-24 lg:py-32"
      aria-labelledby="servicios-titulo"
    >
      <div className="container-brand">
        {/* --- Encabezado ------------------------------------------------- */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Líneas de práctica</p>
          <h2
            id="servicios-titulo"
            className="mt-5 font-serif text-3xl leading-tight text-navy sm:text-4xl lg:text-[2.75rem]"
          >
            Servicios legales, contables y financieros bajo un mismo criterio
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Once líneas de práctica que se articulan entre sí. Un mismo equipo
            revisa el expediente desde lo legal, lo contable y lo financiero, de
            modo que la solución no genere una contingencia en otro frente.
          </p>
        </Reveal>

        {/* --- Cuadrícula -------------------------------------------------- */}
        <ul className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 80} className="bg-paper">
              <Link
                href={`/servicios/${s.slug}`}
                className="group relative flex h-full flex-col p-8 transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_50px_-30px_rgba(46,58,89,0.55)]"
              >
                {/* Filete dorado que crece en el borde superior al hacer hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-bronze transition-transform duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-x-100"
                />

                <Icon
                  name={s.icono}
                  className="h-9 w-9 text-navy transition-colors duration-300 group-hover:text-bronze"
                />

                <h3 className="mt-6 font-serif text-xl leading-snug text-navy">
                  {s.titulo}
                </h3>

                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted">
                  {s.resumen}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-bronze uppercase">
                  Ver servicio
                  <Icon
                    name="flecha"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}

          {/* Celda final: completa la cuadrícula de 12 y capta al visitante
              cuya materia no aparece listada. */}
          <Reveal as="li" delay={servicios.length * 80} className="bg-navy">
            <a
              href={`https://wa.me/${firm.whatsapp.numero}?text=${encodeURIComponent(
                firm.whatsapp.mensajeBase,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between p-8 transition-colors duration-300 hover:bg-navy-deep"
            >
              <div>
                <Icon name="whatsapp" className="h-9 w-9 text-bronze-soft" />
                <h3 className="mt-6 font-serif text-xl leading-snug text-white">
                  ¿Tu caso no encaja en ninguna?
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-white/65">
                  Escríbenos y te decimos en la misma conversación si podemos
                  ayudarte. El primer contacto no tiene costo.
                </p>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-bronze-soft uppercase">
                Consultar ahora
                <Icon
                  name="flecha"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
