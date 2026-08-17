"use client";

/* ==========================================================================
   Counter — contador numérico animado
   --------------------------------------------------------------------------
   Cuenta desde un valor inicial hasta el valor final cuando el bloque entra en
   pantalla. Para los años (formato "anio") no se aplica separador de miles y la
   cuenta arranca cerca del valor final para que se lea como una fecha.

   Si el usuario prefiere movimiento reducido, muestra el valor final directo.
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

export default function Counter({
  valor,
  sufijo = "",
  formato = "numero",
  duracion = 1600,
  className = "",
}) {
  const ref = useRef(null);
  const [actual, setActual] = useState(() =>
    formato === "anio" ? valor - 12 : 0,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sinMovimiento =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (sinMovimiento || typeof IntersectionObserver === "undefined") {
      setActual(valor);
      return;
    }

    const inicio = formato === "anio" ? valor - 12 : 0;
    let raf;
    let t0;

    const animar = (t) => {
      if (t0 === undefined) t0 = t;
      const p = Math.min((t - t0) / duracion, 1);
      // easeOutCubic: arranque rápido y frenado suave
      const eased = 1 - Math.pow(1 - p, 3);
      setActual(Math.round(inicio + (valor - inicio) * eased));
      if (p < 1) raf = requestAnimationFrame(animar);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            raf = requestAnimationFrame(animar);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [valor, formato, duracion]);

  const texto =
    formato === "anio" ? String(actual) : actual.toLocaleString("es-PE");

  return (
    <span ref={ref} className={className}>
      {texto}
      {sufijo}
    </span>
  );
}
