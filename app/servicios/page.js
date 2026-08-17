/* ==========================================================================
   /servicios — índice de líneas de práctica
   ========================================================================== */

import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { servicios, firm } from "@/content/site";

export const metadata = {
  title: "Servicios",
  description:
    "Asesoría tributaria, devolución de impuestos, drawback, disolución y liquidación de empresas, contabilidad, finanzas, laboral y legal corporativa, civil y penal.",
};

export default function Servicios() {
  return (
    <>
      <PageHeader
        antetitulo="Líneas de práctica"
        titulo="Servicios legales, contables y financieros"
        bajada="Once líneas de práctica que se articulan entre sí. Elige la materia de tu consulta para conocer el alcance del servicio."
        migas={[{ etiqueta: "Servicios" }]}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-brand">
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 70} className="bg-paper">
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group relative flex h-full flex-col p-9 transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_50px_-30px_rgba(46,58,89,0.55)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-bronze transition-transform duration-400 group-hover:scale-x-100"
                  />
                  <Icon
                    name={s.icono}
                    className="h-9 w-9 text-navy transition-colors duration-300 group-hover:text-bronze"
                  />
                  <h2 className="mt-6 font-serif text-xl leading-snug text-navy">
                    {s.titulo}
                  </h2>
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
            <Reveal
              as="li"
              delay={servicios.length * 70}
              className="bg-navy"
            >
              <a
                href={`https://wa.me/${firm.whatsapp.numero}?text=${encodeURIComponent(
                  firm.whatsapp.mensajeBase,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between p-9 transition-colors duration-300 hover:bg-navy-deep"
              >
                <div>
                  <Icon name="whatsapp" className="h-9 w-9 text-bronze-soft" />
                  <h2 className="mt-6 font-serif text-xl leading-snug text-white">
                    ¿Tu caso no encaja en ninguna?
                  </h2>
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
    </>
  );
}
