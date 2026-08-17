"use client";

/* ==========================================================================
   WhatsAppFloat — botón flotante de WhatsApp
   --------------------------------------------------------------------------
   Fijo en la esquina inferior derecha, visible en todas las vistas.
   El mensaje llega prellenado. En las páginas internas de servicio
   (/servicios/[slug]) el texto se especializa automáticamente con la materia
   correspondiente, sin necesidad de configurarlo en cada página.
   ========================================================================== */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { firm, servicios } from "@/content/site";

export default function WhatsAppFloat({ mensaje }) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Detecta si estamos en la página interna de un servicio
  const slug = pathname?.startsWith("/servicios/")
    ? pathname.split("/")[2]
    : null;
  const servicio = slug ? servicios.find((s) => s.slug === slug) : null;
  const mensajeFinal = mensaje || servicio?.whatsapp;

  // Entrada retardada para que no compita con la carga del hero
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const texto = mensajeFinal
    ? `Hola, escribo desde la web de ${firm.nombreCorto}. ${mensajeFinal}`
    : firm.whatsapp.mensajeBase;

  const url = `https://wa.me/${firm.whatsapp.numero}?text=${encodeURIComponent(texto)}`;

  /* z-40 lo deja por debajo de la barra superior (z-50), de modo que el menú
     móvil a pantalla completa lo cubra al abrirse. */
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir al estudio por WhatsApp"
      className={`group fixed right-5 bottom-5 z-40 inline-flex items-center gap-3 transition-all duration-500 sm:right-7 sm:bottom-7 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {/* Etiqueta que se despliega al pasar el cursor (solo escritorio) */}
      <span className="pointer-events-none hidden max-w-0 overflow-hidden rounded-full bg-navy py-2.5 text-sm whitespace-nowrap text-white opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:px-5 group-hover:opacity-100 lg:block">
        Escríbenos por WhatsApp
      </span>

      <span className="relative inline-flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105">
        {/* Anillo de pulso sutil */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-[brand-pulse-ring_2.6s_ease-out_infinite]"
        />
        <Icon name="whatsapp" className="relative h-7 w-7" strokeWidth="1.6" />
      </span>
    </a>
  );
}
