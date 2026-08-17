/* ==========================================================================
   /recursos/[slug] — página de artículo
   ========================================================================== */

import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { listarArticulos, obtenerArticulo } from "@/lib/recursos";
import { firm } from "@/content/site";

export function generateStaticParams() {
  return listarArticulos().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = await obtenerArticulo(slug);
  if (!a) return {};
  return {
    title: a.titulo,
    description: a.resumen,
    alternates: { canonical: `/recursos/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.titulo,
      description: a.resumen,
      publishedTime: a.fecha,
      authors: [a.autor],
    },
  };
}

export default async function Articulo({ params }) {
  const { slug } = await params;
  const articulo = await obtenerArticulo(slug);
  if (!articulo) notFound();

  const relacionados = listarArticulos()
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  /* Datos estructurados del artículo, para resultados enriquecidos */
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articulo.titulo,
    description: articulo.resumen,
    datePublished: articulo.fecha,
    author: { "@type": "Person", name: articulo.autor },
    publisher: {
      "@type": "Organization",
      name: firm.razonSocial,
      url: firm.dominio,
    },
    mainEntityOfPage: `${firm.dominio}/recursos/${articulo.slug}`,
  };

  return (
    <>
      <PageHeader
        antetitulo={articulo.categoria}
        titulo={articulo.titulo}
        bajada={articulo.resumen}
        migas={[
          { etiqueta: "Recursos", href: "/recursos" },
          { etiqueta: articulo.titulo },
        ]}
      />

      <article className="bg-paper py-16 lg:py-24">
        <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* --- Ficha lateral -------------------------------------------- */}
          <Reveal className="lg:col-span-3">
            <div className="sticky top-32 space-y-6 border-t-2 border-bronze pt-6 text-[0.85rem] text-muted">
              <div>
                <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-navy uppercase">
                  Publicado
                </p>
                <p className="mt-1.5">{articulo.fechaLegible}</p>
              </div>
              <div>
                <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-navy uppercase">
                  Autor
                </p>
                <p className="mt-1.5">{articulo.autor}</p>
              </div>
              <div>
                <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-navy uppercase">
                  Materia
                </p>
                <p className="mt-1.5">{articulo.categoria}</p>
              </div>
              {articulo.lectura && (
                <div>
                  <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-navy uppercase">
                    Lectura
                  </p>
                  <p className="mt-1.5">{articulo.lectura} minutos</p>
                </div>
              )}

              <a
                href={`https://wa.me/${firm.whatsapp.numero}?text=${encodeURIComponent(
                  `Hola, leí el artículo "${articulo.titulo}" en la web de ${firm.nombreCorto} y quisiera consultar sobre mi caso.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 border border-navy/20 px-5 py-3.5 text-[0.7rem] font-semibold tracking-[0.14em] text-navy uppercase transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Consultar
              </a>
            </div>
          </Reveal>

          {/* --- Cuerpo del artículo --------------------------------------- */}
          <Reveal delay={100} className="lg:col-span-9">
            <div
              className="prosa max-w-3xl"
              dangerouslySetInnerHTML={{ __html: articulo.html }}
            />

            <Link
              href="/recursos"
              className="mt-14 inline-flex items-center gap-2 text-[0.74rem] font-semibold tracking-[0.14em] text-navy uppercase transition-colors hover:text-bronze"
            >
              <Icon name="flecha" className="h-4 w-4 rotate-180" />
              Volver a Recursos
            </Link>
          </Reveal>
        </div>
      </article>

      {/* --- Otros artículos ---------------------------------------------- */}
      {relacionados.length > 0 && (
        <section className="bg-paper-alt py-16 lg:py-20">
          <div className="container-brand">
            <p className="eyebrow">Seguir leyendo</p>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {relacionados.map((a, i) => (
                <Reveal as="li" key={a.slug} delay={i * 80}>
                  <Link
                    href={`/recursos/${a.slug}`}
                    className="group flex h-full flex-col border border-line bg-paper p-8 transition-all hover:border-bronze/40 hover:bg-white"
                  >
                    <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-bronze uppercase">
                      {a.categoria}
                    </p>
                    <h2 className="mt-4 font-serif text-lg leading-snug text-navy">
                      {a.titulo}
                    </h2>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-bronze uppercase">
                      Leer
                      <Icon
                        name="flecha"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
