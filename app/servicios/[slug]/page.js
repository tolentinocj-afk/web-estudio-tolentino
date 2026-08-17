/* ==========================================================================
   /servicios/[slug] — página interna de cada línea de práctica
   --------------------------------------------------------------------------
   Se genera automáticamente a partir del listado de content/site.js.

   El orden de los bloques sigue el orden real de las dudas del visitante:

     1. ¿Esto es para mí?      → paraQuien
     2. ¿Qué es exactamente?   → detalle
     3. ¿Qué van a hacer?      → puntos
     4. ¿Qué me llevo?         → entregables
     5. ¿Qué necesitan de mí?  → documentos
     6. Dudas de esta materia  → preguntas
     7. Escribir               → formulario
     8. Servicios afines       → relacionados

   El botón flotante de WhatsApp de estas páginas lleva el mensaje prellenado
   del servicio correspondiente, resuelto en components/layout/WhatsAppFloat.js.
   ========================================================================== */

import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import ServicioFaq from "@/components/servicios/ServicioFaq";
import { servicios, firm } from "@/content/site";

/* Genera una ruta estática por cada servicio */
export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = servicios.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.titulo,
    description: s.resumen,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { title: s.titulo, description: s.resumen },
  };
}

export default async function Servicio({ params }) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) notFound();

  /* Servicios afines, elegidos a mano en content/site.js y no por posición */
  const otros = (servicio.relacionados || [])
    .map((r) => servicios.find((s) => s.slug === r))
    .filter(Boolean);

  const urlWhatsapp = `https://wa.me/${firm.whatsapp.numero}?text=${encodeURIComponent(
    `Hola, escribo desde la web de ${firm.nombreCorto}. ${servicio.whatsapp}`,
  )}`;

  /* Datos estructurados del servicio y de sus preguntas frecuentes: permiten
     que Google muestre las preguntas directamente en el resultado de búsqueda. */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: servicio.titulo,
        description: servicio.detalle,
        serviceType: servicio.titulo,
        provider: { "@id": `${firm.dominio}/#organizacion` },
        areaServed: { "@type": "Country", name: "Perú" },
        url: `${firm.dominio}/servicios/${servicio.slug}`,
      },
      ...(servicio.preguntas?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: servicio.preguntas.map((q) => ({
                "@type": "Question",
                name: q.p,
                acceptedAnswer: { "@type": "Answer", text: q.r },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <PageHeader
        antetitulo="Línea de práctica"
        titulo={servicio.titulo}
        bajada={servicio.resumen}
        migas={[
          { etiqueta: "Servicios", href: "/servicios" },
          { etiqueta: servicio.titulo },
        ]}
      />

      {/* --- 1. ¿Esto es para mí? -----------------------------------------
          Va primero a propósito: el visitante que se reconoce en una de estas
          situaciones ya sabe que está en el lugar correcto, y el que no se
          reconoce se ahorra la consulta. */}
      {servicio.paraQuien?.length > 0 && (
        <section className="bg-paper-alt py-16 lg:py-20">
          <div className="container-brand">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Este servicio es para ti si</p>
            </Reveal>

            <ul className="mt-9 grid gap-x-10 gap-y-5 lg:grid-cols-2">
              {servicio.paraQuien.map((caso, i) => (
                <Reveal
                  as="li"
                  key={caso}
                  delay={i * 70}
                  className="flex gap-4 border-l-2 border-bronze/40 bg-white py-5 pr-6 pl-6"
                >
                  <span className="mt-1 font-serif text-sm text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-ink">
                    {caso}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* --- 2 y 3. Alcance del servicio ---------------------------------- */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-brand grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Alcance</p>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              {servicio.detalle}
            </p>

            <h2 className="mt-12 font-serif text-2xl text-navy">Qué incluye</h2>
            <div className="rule-gold mt-5" aria-hidden="true" />

            <ul className="mt-8 space-y-4">
              {servicio.puntos.map((p) => (
                <li
                  key={p}
                  className="flex gap-3.5 text-[0.94rem] leading-relaxed text-muted"
                >
                  <Icon
                    name="check"
                    className="mt-1.5 h-4 w-4 flex-none text-bronze"
                  />
                  {p}
                </li>
              ))}
            </ul>

            {/* Plazo de ejecución, cuando el servicio lo tiene definido */}
            {servicio.plazo && (
              <div className="mt-10 flex gap-4 border-l-2 border-bronze bg-paper-alt py-5 pr-6 pl-6">
                <Icon
                  name="reloj"
                  className="mt-0.5 h-5 w-5 flex-none text-bronze"
                />
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-navy uppercase">
                    Plazo de ejecución
                  </p>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                    {servicio.plazo}
                  </p>
                </div>
              </div>
            )}

            {/* Pagos que el cliente asume por su cuenta */}
            {servicio.excluye && (
              <div className="mt-4 flex gap-4 border-l-2 border-line bg-paper-alt py-5 pr-6 pl-6">
                <Icon
                  name="alerta"
                  className="mt-0.5 h-5 w-5 flex-none text-muted"
                />
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-navy uppercase">
                    No incluye
                  </p>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                    {servicio.excluye}
                  </p>
                </div>
              </div>
            )}
          </Reveal>

          {/* Panel lateral de contacto rápido */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="pattern-lines sticky top-32 bg-navy p-9 text-white/75">
              <h2 className="font-serif text-xl text-white">
                ¿Tu caso encaja en esta materia?
              </h2>
              <div className="mt-5 h-px w-12 bg-bronze" aria-hidden="true" />
              <p className="mt-6 text-[0.92rem] leading-relaxed">
                Escríbenos con los datos del expediente y el plazo que tienes.
                La primera conversación no tiene costo y sirve para saber si
                podemos ayudarte.
              </p>

              {/* Honorarios del servicio */}
              {servicio.precio && (
                <div className="mt-8 border border-white/15 px-6 py-5">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-bronze-soft uppercase">
                    Honorarios
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-snug text-white">
                    {servicio.precio}
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-snug text-white/55">
                    Recibes la propuesta por escrito antes de que iniciemos.
                  </p>
                </div>
              )}

              <a
                href={urlWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-bronze px-6 py-4 text-[0.76rem] font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-300 hover:bg-[#7a6449]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Consultar por WhatsApp
              </a>

              <ul className="mt-8 space-y-4 border-t border-white/12 pt-8 text-[0.9rem]">
                {firm.telefonos.map((t) => (
                  <li key={t.tel}>
                    <a
                      href={`tel:${t.tel}`}
                      className="flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <Icon
                        name="telefono"
                        className="h-4.5 w-4.5 flex-none text-bronze-soft"
                      />
                      {t.etiqueta}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${firm.email}`}
                    className="flex items-center gap-3 break-all transition-colors hover:text-white"
                  >
                    <Icon
                      name="correo"
                      className="h-4.5 w-4.5 flex-none text-bronze-soft"
                    />
                    {firm.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- 4 y 5. Qué recibes y qué necesitamos de ti -------------------- */}
      {(servicio.entregables?.length > 0 || servicio.documentos?.length > 0) && (
        <section className="bg-paper-alt py-16 lg:py-20">
          <div className="container-brand grid gap-12 lg:grid-cols-2 lg:gap-16">
            {servicio.entregables?.length > 0 && (
              <Reveal>
                <p className="eyebrow">Qué recibes</p>
                <h2 className="mt-5 font-serif text-2xl leading-snug text-navy">
                  Entregables concretos, no promesas
                </h2>
                <ul className="mt-8 space-y-4">
                  {servicio.entregables.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3.5 text-[0.94rem] leading-relaxed text-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-1.5 h-4 w-4 flex-none text-bronze"
                      />
                      {e}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {servicio.documentos?.length > 0 && (
              <Reveal delay={110}>
                <p className="eyebrow">Qué necesitamos de ti</p>
                <h2 className="mt-5 font-serif text-2xl leading-snug text-navy">
                  Para empezar sin vueltas
                </h2>
                <ul className="mt-8 space-y-4">
                  {servicio.documentos.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3.5 text-[0.94rem] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-3 flex-none bg-bronze"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-[0.86rem] leading-relaxed text-muted">
                  Si no tienes todo, no es impedimento para escribir. Parte de
                  la primera conversación es justamente identificar qué falta.
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* --- 6. Preguntas propias de esta materia -------------------------- */}
      {servicio.preguntas?.length > 0 && (
        <ServicioFaq preguntas={servicio.preguntas} />
      )}

      {/* --- 7. Formulario ------------------------------------------------- */}
      <section className="bg-paper-alt py-20 lg:py-24">
        <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Consulta</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-navy">
              Cuéntanos tu caso
            </h2>
            <p className="mt-6 text-[0.92rem] leading-relaxed text-muted">
              El formulario llega directamente al equipo a cargo de esta línea
              de práctica, con la materia ya seleccionada.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <ContactForm materiaPorDefecto={servicio.titulo} />
          </Reveal>
        </div>
      </section>

      {/* --- 8. Servicios afines ------------------------------------------- */}
      {otros.length > 0 && (
        <section className="bg-paper py-16 lg:py-20">
          <div className="container-brand">
            <p className="eyebrow">También podría interesarte</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {otros.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 80}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex h-full flex-col border border-line bg-paper p-8 transition-all duration-400 hover:-translate-y-1 hover:border-bronze/40 hover:bg-white hover:shadow-[0_26px_50px_-30px_rgba(46,58,89,0.55)]"
                  >
                    <Icon
                      name={s.icono}
                      className="h-8 w-8 text-navy transition-colors group-hover:text-bronze"
                    />
                    <h3 className="mt-5 font-serif text-lg leading-snug text-navy">
                      {s.titulo}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-muted">
                      {s.resumen}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-bronze uppercase">
                      Ver servicio
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
