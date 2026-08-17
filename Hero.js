"use client";

/* ==========================================================================
   Hero — bloque de apertura del inicio
   --------------------------------------------------------------------------
   Fondo azul marino con textura de líneas finas y un parallax muy contenido.
   Si en content/site.js se define hero.imagenFondo, la fotografía se muestra
   detrás con una capa azul marino translúcida encima.
   ========================================================================== */

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import FondoImagen from "@/components/ui/FondoImagen";
import { hero, imagenes, oficinas } from "@/content/site";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  // Parallax sutil: el fondo se desplaza a un tercio de la velocidad del scroll
  useEffect(() => {
    const sinMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (sinMovimiento) return;

    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setOffset(Math.min(window.scrollY, 700) * 0.28);
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative flex min-h-[86vh] items-center overflow-hidden bg-navy pt-40 pb-24 lg:min-h-[92vh] lg:pt-44"
      aria-labelledby="hero-titulo"
    >
      {/* --- Capas de fondo ------------------------------------------------ */}
      <div
        className="absolute inset-0 -top-24 -bottom-24"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        aria-hidden="true"
      >
        {imagenes.hero.src ? (
          // Con fotografía: la imagen manda y la capa azul asegura el contraste
          <FondoImagen imagen={imagenes.hero} intensidad="suave" prioridad />
        ) : (
          // Sin fotografía: textura de líneas y degradado de profundidad
          <>
            <div className="pattern-lines absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_18%,rgba(61,74,107,0.85)_0%,rgba(46,58,89,0.94)_45%,rgba(35,44,68,1)_100%)]" />
          </>
        )}
      </div>

      {/* Filete dorado vertical decorativo */}
      <div
        className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-bronze/50 to-transparent lg:left-[7%]"
        aria-hidden="true"
      />

      {/* --- Contenido ----------------------------------------------------- */}
      <div className="container-brand relative z-10">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade text-bronze-soft [animation-delay:100ms]">
            {hero.antetitulo}
          </p>

          <h1
            id="hero-titulo"
            className="animate-fade-up mt-7 font-serif text-4xl leading-[1.12] text-white [animation-delay:220ms] sm:text-5xl lg:text-[3.9rem]"
          >
            {hero.titular}
          </h1>

          <div
            className="animate-grow-x mt-8 h-px w-28 bg-bronze [animation-delay:520ms]"
            aria-hidden="true"
          />

          <p className="animate-fade-up mt-8 max-w-2xl text-base leading-relaxed text-white/80 [animation-delay:400ms] sm:text-lg">
            {hero.subtitulo}
          </p>

          <div className="animate-fade-up mt-11 flex flex-col gap-4 [animation-delay:560ms] sm:flex-row sm:items-center">
            <Button href={hero.ctaPrimario.href} variante="acento">
              {hero.ctaPrimario.etiqueta}
              <Icon name="flecha" className="h-4 w-4" />
            </Button>
            <Button href={hero.ctaSecundario.href} variante="claro">
              {hero.ctaSecundario.etiqueta}
            </Button>
          </div>

          {/* Sedes, como refuerzo de cercanía */}
          <ul className="animate-fade mt-14 flex flex-wrap gap-x-8 gap-y-3 text-[0.78rem] tracking-[0.08em] text-white/55 uppercase [animation-delay:760ms]">
            {oficinas.map((o) => (
              <li key={o.id} className="inline-flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-bronze-soft" />
                {o.distrito}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- Indicador de scroll ------------------------------------------- */}
      <a
        href="#servicios"
        className="animate-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.62rem] tracking-[0.24em] text-white/45 uppercase transition-colors hover:text-bronze-soft [animation-delay:1000ms] lg:flex"
      >
        Desliza
        <span
          aria-hidden="true"
          className="h-10 w-px bg-gradient-to-b from-bronze/70 to-transparent"
        />
      </a>
    </section>
  );
}
