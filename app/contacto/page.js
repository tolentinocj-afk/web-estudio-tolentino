/* ==========================================================================
   /contacto — formulario, datos de las oficinas y mapas
   ========================================================================== */

import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { contacto, firm, oficinas } from "@/content/site";

export const metadata = {
  title: "Contacto",
  description:
    "Agenda una consulta con Estudio Tolentino & Asociados. Oficinas en Miraflores (Lima) y Chilca (Cañete).",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  const urlWhatsapp = `https://wa.me/${firm.whatsapp.numero}?text=${encodeURIComponent(
    firm.whatsapp.mensajeBase,
  )}`;

  return (
    <>
      <PageHeader
        antetitulo={contacto.antetitulo}
        titulo="Agenda tu consulta"
        bajada={contacto.bajada}
        migas={[{ etiqueta: "Contacto" }]}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* --- Datos --------------------------------------------------- */}
          <Reveal className="lg:col-span-5">
            <div className="pattern-lines h-full bg-navy p-9 text-white/75 lg:p-10">
              <h2 className="font-serif text-xl text-white">
                Datos de contacto
              </h2>
              <div className="mt-5 h-px w-12 bg-bronze" aria-hidden="true" />

              <ul className="mt-8 space-y-5 text-[0.92rem]">
                {firm.telefonos.map((t) => (
                  <li key={t.tel}>
                    <a
                      href={`tel:${t.tel}`}
                      className="flex items-center gap-4 transition-colors hover:text-white"
                    >
                      <Icon
                        name="telefono"
                        className="h-5 w-5 flex-none text-bronze-soft"
                      />
                      {t.etiqueta}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${firm.email}`}
                    className="flex items-center gap-4 break-all transition-colors hover:text-white"
                  >
                    <Icon
                      name="correo"
                      className="h-5 w-5 flex-none text-bronze-soft"
                    />
                    {firm.email}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Icon
                    name="reloj"
                    className="mt-0.5 h-5 w-5 flex-none text-bronze-soft"
                  />
                  <span className="leading-relaxed">
                    {firm.horario.semana}
                    <br />
                    {firm.horario.sabado}
                  </span>
                </li>
              </ul>

              <h2 className="mt-10 border-t border-white/12 pt-8 font-serif text-xl text-white">
                Oficinas
              </h2>
              <ul className="mt-6 space-y-6 text-[0.9rem]">
                {oficinas.map((o) => (
                  <li key={o.id} className="flex gap-4">
                    <Icon
                      name="pin"
                      className="mt-0.5 h-5 w-5 flex-none text-bronze-soft"
                    />
                    <span className="leading-relaxed">
                      <span className="block text-[0.7rem] font-semibold tracking-[0.14em] text-bronze-soft uppercase">
                        {o.nombre}
                      </span>
                      {o.direccion}
                      <br />
                      {o.distrito}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={urlWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 border border-white/30 px-6 py-4 text-[0.76rem] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:border-bronze hover:bg-bronze"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>

          {/* --- Formulario ---------------------------------------------- */}
          <Reveal delay={120} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* --- Mapas ---------------------------------------------------------- */}
      <section className="bg-paper-alt py-16 lg:py-20">
        <div className="container-brand grid gap-6 md:grid-cols-2">
          {oficinas.map((o) => (
            <figure key={o.id} className="border border-line bg-white">
              <iframe
                src={o.mapa}
                title={`Mapa de la ${o.nombre}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full grayscale-[35%]"
              />
              <figcaption className="flex flex-col gap-3 border-t border-line px-5 py-4 text-[0.85rem] text-muted sm:flex-row sm:items-end sm:justify-between">
                <span>
                  <span className="block text-[0.7rem] font-semibold tracking-[0.14em] text-navy uppercase">
                    {o.nombre}
                  </span>
                  {o.direccion}
                  <br />
                  {o.distrito}
                </span>
                <a
                  href={o.comoLlegar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-none items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-bronze uppercase transition-colors hover:text-navy"
                >
                  Cómo llegar
                  <Icon name="flecha" className="h-4 w-4" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
