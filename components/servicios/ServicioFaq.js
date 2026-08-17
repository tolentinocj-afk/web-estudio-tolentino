"use client";

/* ==========================================================================
   ServicioFaq — preguntas frecuentes propias de cada línea de práctica
   --------------------------------------------------------------------------
   Distinto del acordeón de la portada: aquí las preguntas son de la materia
   concreta, no generales del estudio. Se muestran abiertas por defecto porque
   son pocas (dos o tres) y son justamente el contenido que el visitante vino
   a buscar: esconderlas detrás de un clic solo agrega fricción.

   El acordeón sigue disponible para plegar lo que ya se leyó.
   ========================================================================== */

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function ServicioFaq({ preguntas }) {
  // Todas abiertas al cargar
  const [abiertas, setAbiertas] = useState(() =>
    preguntas.map((_, i) => i),
  );

  const alternar = (i) =>
    setAbiertas((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  return (
    <section
      className="bg-paper py-16 lg:py-20"
      aria-labelledby="faq-servicio-titulo"
    >
      <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2
            id="faq-servicio-titulo"
            className="mt-5 font-serif text-2xl leading-snug text-navy sm:text-3xl"
          >
            Lo que suelen preguntarnos sobre esta materia
          </h2>
          <div className="rule-gold mt-7" aria-hidden="true" />
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="border-t border-line">
            {preguntas.map((q, i) => {
              const activa = abiertas.includes(i);
              return (
                <Reveal
                  as="li"
                  key={q.p}
                  delay={i * 70}
                  className="border-b border-line"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => alternar(i)}
                      aria-expanded={activa}
                      aria-controls={`servicio-faq-panel-${i}`}
                      id={`servicio-faq-boton-${i}`}
                      className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span
                        className={`font-serif text-lg leading-snug transition-colors duration-300 ${
                          activa
                            ? "text-navy"
                            : "text-navy group-hover:text-bronze"
                        }`}
                      >
                        {q.p}
                      </span>
                      <span
                        className={`mt-1 inline-flex h-7 w-7 flex-none items-center justify-center border transition-all duration-300 ${
                          activa
                            ? "rotate-180 border-bronze text-bronze"
                            : "border-line text-navy group-hover:border-bronze group-hover:text-bronze"
                        }`}
                      >
                        <Icon name="chevron" className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`servicio-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`servicio-faq-boton-${i}`}
                    className={`grid transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                      activa
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pr-12 pb-6 text-[0.94rem] leading-relaxed text-muted">
                        {q.r}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
