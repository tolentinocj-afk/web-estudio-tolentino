/* ==========================================================================
   PageHeader — encabezado estándar de las páginas internas
   --------------------------------------------------------------------------
   Banda azul marino con antetítulo, título y bajada, en el mismo lenguaje
   visual del hero pero de menor altura.
   ========================================================================== */

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import FondoImagen from "@/components/ui/FondoImagen";
import { imagenes } from "@/content/site";

export default function PageHeader({ antetitulo, titulo, bajada, migas = [] }) {
  const conFoto = Boolean(imagenes.cabeceras.src);

  return (
    <section
      className={`relative bg-navy pt-40 pb-16 lg:pt-44 lg:pb-20 ${
        conFoto ? "" : "pattern-lines"
      }`}
    >
      {conFoto ? (
        <FondoImagen imagen={imagenes.cabeceras} intensidad="fuerte" prioridad />
      ) : (
        <div
          className="absolute inset-0 bg-[radial-gradient(110%_90%_at_80%_10%,rgba(61,74,107,0.75)_0%,rgba(46,58,89,0.96)_55%,rgba(35,44,68,1)_100%)]"
          aria-hidden="true"
        />
      )}

      <div className="container-brand relative z-10">
        {/* Migas de pan */}
        {migas.length > 0 && (
          <nav aria-label="Ruta de navegación" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] tracking-[0.08em] text-white/45 uppercase">
              <li>
                <Link href="/" className="transition-colors hover:text-bronze-soft">
                  Inicio
                </Link>
              </li>
              {migas.map((m) => (
                <li key={m.etiqueta} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-white/25">
                    /
                  </span>
                  {m.href ? (
                    <Link
                      href={m.href}
                      className="transition-colors hover:text-bronze-soft"
                    >
                      {m.etiqueta}
                    </Link>
                  ) : (
                    <span className="text-white/70">{m.etiqueta}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {antetitulo && (
          <p className="eyebrow text-bronze-soft">{antetitulo}</p>
        )}

        <h1 className="mt-5 max-w-4xl font-serif text-3xl leading-[1.15] text-white sm:text-4xl lg:text-[3rem]">
          {titulo}
        </h1>

        {bajada && (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            {bajada}
          </p>
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   PageStub — contenido provisional para las páginas aún no desarrolladas.
   Se retira a medida que cada página se construye.
   -------------------------------------------------------------------------- */

export function PageStub({ nota }) {
  return (
    <section className="bg-paper py-24 lg:py-28">
      <div className="container-brand">
        <div className="max-w-2xl border-l-2 border-bronze pl-8">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-bronze uppercase">
            Sección en preparación
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">{nota}</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-[0.76rem] font-semibold tracking-[0.14em] text-navy uppercase transition-colors hover:text-bronze"
          >
            <Icon name="flecha" className="h-4 w-4 rotate-180" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
