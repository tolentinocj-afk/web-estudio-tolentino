/* ==========================================================================
   /recursos — listado de artículos y alertas normativas
   --------------------------------------------------------------------------
   Los artículos se leen de content/recursos/*.md durante la compilación.
   Para publicar uno nuevo basta con crear el archivo .md y volver a desplegar.
   ========================================================================== */

import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { listarArticulos } from "@/lib/recursos";
import { firm } from "@/content/site";

export const metadata = {
  title: "Recursos",
  description:
    "Artículos y alertas normativas en materia tributaria, contable, laboral y societaria del Estudio Tolentino & Asociados.",
  alternates: { canonical: "/recursos" },
};

export default function Recursos() {
  const articulos = listarArticulos();
  const [principal, ...resto] = articulos;

  return (
    <>
      <PageHeader
        antetitulo="Publicaciones"
        titulo="Recursos y alertas normativas"
        bajada="Análisis breves sobre cambios normativos, criterios de la administración y buenas prácticas de cumplimiento, escritos para quien tiene que tomar la decisión."
        migas={[{ etiqueta: "Recursos" }]}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-brand">
          {articulos.length === 0 ? (
            <p className="max-w-xl border-l-2 border-bronze pl-8 text-base leading-relaxed text-muted">
              Estamos preparando las primeras publicaciones. Vuelve pronto o
              escríbenos si hay un tema que te interese que abordemos.
            </p>
          ) : (
            <>
              {/* --- Artículo destacado --------------------------------- */}
              <Reveal>
                <Link
                  href={`/recursos/${principal.slug}`}
                  className="group grid gap-8 border border-line p-8 transition-all duration-400 hover:border-bronze/50 hover:shadow-[0_26px_50px_-32px_rgba(46,58,89,0.55)] lg:grid-cols-12 lg:gap-12 lg:p-12"
                >
                  <div className="lg:col-span-3">
                    <span className="inline-block bg-navy px-3 py-1.5 text-[0.66rem] font-semibold tracking-[0.16em] text-white uppercase">
                      {principal.categoria}
                    </span>
                    <p className="mt-5 text-[0.8rem] text-muted">
                      {principal.fechaLegible}
                    </p>
                    {principal.lectura && (
                      <p className="mt-1 text-[0.8rem] text-muted">
                        {principal.lectura} min de lectura
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-serif text-2xl leading-snug text-navy transition-colors group-hover:text-bronze sm:text-3xl">
                      {principal.titulo}
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                      {principal.resumen}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-bronze uppercase">
                      Leer artículo
                      <Icon
                        name="flecha"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>

              {/* --- Resto de artículos --------------------------------- */}
              {/* Tarjetas con borde propio y no una cuadrícula de celdas:
                  así una fila incompleta no deja huecos grises visibles. */}
              {resto.length > 0 && (
                <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {resto.map((a, i) => (
                    <Reveal as="li" key={a.slug} delay={i * 80}>
                      <Link
                        href={`/recursos/${a.slug}`}
                        className="group relative flex h-full flex-col border border-line bg-paper p-8 transition-all duration-400 hover:-translate-y-1 hover:border-bronze/40 hover:bg-white hover:shadow-[0_26px_50px_-30px_rgba(46,58,89,0.55)]"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-bronze transition-transform duration-400 group-hover:scale-x-100"
                        />
                        <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-bronze uppercase">
                          {a.categoria}
                        </p>
                        <h2 className="mt-4 font-serif text-xl leading-snug text-navy">
                          {a.titulo}
                        </h2>
                        <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted">
                          {a.resumen}
                        </p>
                        <p className="mt-6 text-[0.78rem] text-muted">
                          {a.fechaLegible}
                          {a.lectura ? ` · ${a.lectura} min` : ""}
                        </p>
                      </Link>
                    </Reveal>
                  ))}
                </ul>
              )}
            </>
          )}

          {/* --- Aviso de suscripción por WhatsApp --------------------- */}
          <Reveal className="mt-16">
            <div className="pattern-lines flex flex-col gap-6 bg-navy px-8 py-10 text-white/75 sm:flex-row sm:items-center sm:justify-between lg:px-12">
              <div className="max-w-xl">
                <h2 className="font-serif text-2xl text-white">
                  ¿Quieres que revisemos tu caso concreto?
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed">
                  Los artículos son generales por definición. Si tu situación
                  necesita una lectura particular, escríbenos: el primer
                  contacto no tiene costo.
                </p>
              </div>
              <a
                href={`https://wa.me/${firm.whatsapp.numero}?text=${encodeURIComponent(
                  firm.whatsapp.mensajeBase,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-none items-center justify-center gap-3 bg-bronze px-7 py-4 text-[0.76rem] font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-300 hover:bg-[#7a6449]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
