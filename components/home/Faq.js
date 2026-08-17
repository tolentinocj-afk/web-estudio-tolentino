"use client";

/* ==========================================================================
   Faq — preguntas frecuentes en acordeón
   --------------------------------------------------------------------------
   Acordeón accesible: botones con aria-expanded y paneles con transición de
   altura. Solo un panel abierto a la vez.
   ========================================================================== */

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { faq } from "@/content/site";

export default function Faq() {
  const [abierto, setAbierto] = useState(0);

  return (
    <section
      className="bg-paper-alt py-24 lg:py-32"
      aria-labelledby="faq-titulo"
    >
      <div className="container-brand">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">{faq.antetitulo}</p>
            <h2
              id="faq-titulo"
              className="mt-5 font-serif text-3xl leading-tight text-navy sm:text-4xl"
            >
              {faq.titulo}
            </h2>
            <div className="rule-gold mt-8" aria-hidden="true" />
            <p className="mt-8 text-[0.92rem] leading-relaxed text-muted">
              Si tu consulta no aparece aquí, escríbenos por WhatsApp o
              completa el formulario de contacto. Respondemos dentro del día
              hábil.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <ul className="border-t border-line">
              {faq.items.map((item, i) => {
                const activo = abierto === i;
                return (
                  <Reveal
                    as="li"
                    key={item.pregunta}
                    delay={i * 60}
                    className="border-b border-line"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setAbierto(activo ? -1 : i)}
                        aria-expanded={activo}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-boton-${i}`}
                        className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span
                          className={`font-serif text-lg leading-snug transition-colors duration-300 sm:text-xl ${
                            activo
                              ? "text-bronze"
                              : "text-navy group-hover:text-bronze"
                          }`}
                        >
                          {item.pregunta}
                        </span>
                        <span
                          className={`mt-1 inline-flex h-8 w-8 flex-none items-center justify-center border transition-all duration-300 ${
                            activo
                              ? "rotate-180 border-bronze bg-bronze text-white"
                              : "border-line text-navy group-hover:border-bronze group-hover:text-bronze"
                          }`}
                        >
                          <Icon name="chevron" className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-boton-${i}`}
                      className={`grid transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                        activo
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pr-14 pb-7 text-[0.94rem] leading-relaxed text-muted">
                          {item.respuesta}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
