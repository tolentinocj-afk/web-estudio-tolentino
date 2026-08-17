/* ==========================================================================
   /nosotros — quiénes somos, misión, visión, valores y socio fundador
   ========================================================================== */

import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Founder from "@/components/home/Founder";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { nosotros, credibilidad, firm, imagenes } from "@/content/site";
import Counter from "@/components/ui/Counter";

export const metadata = {
  title: "Nosotros",
  description:
    "Estudio Tolentino & Asociados: firma peruana de abogados y contadores desde 2013. Misión, visión, valores institucionales y perfil del socio fundador.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <PageHeader
        antetitulo={nosotros.antetitulo}
        titulo={nosotros.titulo}
        bajada={nosotros.bajada}
        migas={[{ etiqueta: "Nosotros" }]}
      />

      {/* --- Quiénes somos ------------------------------------------------- */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-brand grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-navy">
              Una firma que no separa lo legal de lo contable
            </h2>
            <div className="rule-gold mt-8" aria-hidden="true" />
          </Reveal>

          <Reveal delay={100} className="lg:col-span-8">
            <div className="space-y-6 text-base leading-relaxed text-muted">
              {nosotros.quienesSomos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Indicadores, reutilizados de la portada */}
            <ul className="mt-14 grid grid-cols-2 gap-y-10 border-t border-line pt-12 sm:grid-cols-4">
              {credibilidad.map((c) => (
                <li key={c.etiqueta}>
                  <p className="font-serif text-3xl leading-none text-navy">
                    <Counter
                      valor={c.valor}
                      sufijo={c.sufijo}
                      formato={c.formato}
                    />
                  </p>
                  <p className="mt-2.5 text-[0.68rem] font-semibold tracking-[0.14em] text-bronze uppercase">
                    {c.etiqueta}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* --- Banda fotográfica ---------------------------------------------
          Solo aparece si hay imagen configurada en content/site.js.
          Sin ella, la página pasa directo de "quiénes somos" a misión y visión
          sin dejar hueco. */}
      {imagenes.nosotros.src && (
        <section aria-hidden="true">
          <div className="relative h-[42vh] max-h-[26rem] min-h-[15rem] w-full overflow-hidden">
            <Image
              src={imagenes.nosotros.src}
              alt={imagenes.nosotros.alt}
              fill
              sizes="100vw"
              quality={82}
              className="object-cover"
              style={{ objectPosition: imagenes.nosotros.posicion || "center" }}
            />
            {/* Velo tenue: unifica la fotografía con la paleta de la marca */}
            <div className="absolute inset-0 bg-navy/25" />
            {/* Filete dorado inferior, recurso recurrente de la identidad */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-bronze" />
          </div>
        </section>
      )}

      {/* --- Misión y visión ------------------------------------------------ */}
      <section className="pattern-lines bg-navy py-20 lg:py-24">
        <div className="container-brand grid gap-12 md:grid-cols-2 md:gap-16">
          {[nosotros.mision, nosotros.vision].map((b, i) => (
            <Reveal key={b.titulo} delay={i * 120}>
              <h2 className="font-serif text-2xl text-white">{b.titulo}</h2>
              <div className="mt-5 h-px w-12 bg-bronze" aria-hidden="true" />
              <p className="mt-7 text-base leading-relaxed text-white/75">
                {b.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- Valores institucionales ---------------------------------------- */}
      <section
        className="bg-paper-alt py-20 lg:py-28"
        aria-labelledby="valores-titulo"
      >
        <div className="container-brand">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Valores institucionales</p>
            <h2
              id="valores-titulo"
              className="mt-5 font-serif text-3xl leading-tight text-navy sm:text-4xl"
            >
              Siete criterios que ordenan cómo trabajamos
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {nosotros.valores.map((v, i) => (
              <Reveal as="li" key={v.titulo} delay={i * 70} className="flex gap-5">
                <span className="mt-0.5 inline-flex h-11 w-11 flex-none items-center justify-center border border-bronze/35 bg-white text-bronze">
                  <Icon name={v.icono} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg leading-snug text-navy">
                    {v.titulo}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                    {v.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* --- Socio fundador (mismo bloque de la portada) --------------------- */}
      <Founder />

      {/* --- Equipo ---------------------------------------------------------- */}
      <section className="bg-paper-alt py-20 lg:py-24">
        <div className="container-brand">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{nosotros.equipo.titulo}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {nosotros.equipo.texto}
            </p>
            <Button href="/contacto" variante="contorno" className="mt-9">
              Agendar consulta
              <Icon name="flecha" className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* --- Cierre con datos de contacto ------------------------------------ */}
      <section className="bg-navy-deep py-14">
        <div className="container-brand flex flex-col gap-6 text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl text-white">
            ¿Conversamos sobre tu caso?
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[0.92rem]">
            {firm.telefonos.map((t) => (
              <a
                key={t.tel}
                href={`tel:${t.tel}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-white"
              >
                <Icon name="telefono" className="h-4.5 w-4.5 text-bronze-soft" />
                {t.etiqueta}
              </a>
            ))}
            <a
              href={`mailto:${firm.email}`}
              className="inline-flex items-center gap-3 transition-colors hover:text-white"
            >
              <Icon name="correo" className="h-4.5 w-4.5 text-bronze-soft" />
              {firm.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
