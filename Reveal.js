"use client";

/* ==========================================================================
   Reveal — aparición progresiva al hacer scroll
   --------------------------------------------------------------------------
   Envuelve cualquier bloque y le aplica un fade in con desplazamiento vertical
   cuando entra en pantalla. El retardo (delay) permite la entrada escalonada de
   listas y tarjetas.

   La preferencia prefers-reduced-motion se respeta desde globals.css.
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin soporte de IntersectionObserver, se muestra el contenido sin animar.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // se anima una sola vez
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
