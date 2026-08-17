/* ==========================================================================
   Página 404 — dirección no encontrada
   --------------------------------------------------------------------------
   En lugar de un mensaje seco, ofrece las rutas más probables para que el
   visitante no abandone el sitio.
   ========================================================================== */

import Link from "next/link";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { servicios } from "@/content/site";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NoEncontrada() {
  const destacados = servicios.slice(0, 4);

  return (
    <section className="pattern-lines relative flex min-h-[75vh] items-center bg-navy pt-40 pb-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(110%_90%_at_75%_15%,rgba(61,74,107,0.8)_0%,rgba(46,58,89,0.96)_55%,rgba(35,44,68,1)_100%)]"
        aria-hidden="true"
      />

      <div className="container-brand relative z-10">
        <p className="eyebrow text-bronze-soft">Error 404</p>

        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl">
          Esta página no existe o cambió de dirección
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70">
          Es posible que el enlace esté desactualizado o que la dirección se
          haya escrito de otra forma. Estas son las rutas más consultadas.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/" variante="acento">
            Ir al inicio
            <Icon name="flecha" className="h-4 w-4" />
          </Button>
          <Button href="/contacto" variante="claro">
            Contactar al estudio
          </Button>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-4 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {destacados.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/servicios/${s.slug}`}
                className="group inline-flex items-start gap-2.5 text-[0.9rem] leading-snug text-white/70 transition-colors hover:text-white"
              >
                <Icon
                  name="flecha"
                  className="mt-1 h-4 w-4 flex-none text-bronze-soft transition-transform group-hover:translate-x-1"
                />
                {s.titulo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
