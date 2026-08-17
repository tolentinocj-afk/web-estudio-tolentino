"use client";

/* ==========================================================================
   Header — barra superior fija
   --------------------------------------------------------------------------
   - Franja de contacto superior (teléfono y correo), visible solo en escritorio
     y solo mientras la página está arriba del todo.
   - Al desplazarse, la barra reduce su altura y gana sombra.
   - Menú desplegable de servicios en escritorio y menú lateral en móvil.
   ========================================================================== */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/ui/BrandMark";
import Icon from "@/components/ui/Icon";
import { firm, navegacion, servicios } from "@/content/site";

export default function Header() {
  const [desplazado, setDesplazado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [serviciosAbierto, setServiciosAbierto] = useState(false);
  const pathname = usePathname();

  // Detecta el scroll para compactar la barra
  useEffect(() => {
    const onScroll = () => setDesplazado(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de página
  useEffect(() => {
    setMenuAbierto(false);
    setServiciosAbierto(false);
  }, [pathname]);

  // Bloquea el scroll del cuerpo mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  const esActivo = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
        desplazado
          ? "bg-white/97 shadow-[0_1px_24px_-8px_rgba(46,58,89,0.35)] backdrop-blur"
          : "bg-white"
      }`}
    >
      {/* --- Franja de contacto ------------------------------------------- */}
      <div
        className={`overflow-hidden bg-navy transition-all duration-300 ${
          desplazado ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-brand flex items-center justify-between py-2 text-[0.72rem] tracking-[0.06em] text-white/80">
          <p className="hidden sm:block">
            {firm.razonSocial} &nbsp;·&nbsp; RUC {firm.ruc}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${firm.email}`}
              className="hidden items-center gap-2 transition-colors hover:text-bronze-soft md:inline-flex"
            >
              <Icon name="correo" className="h-3.5 w-3.5" />
              {firm.email}
            </a>
            <a
              href={`tel:${firm.telefonos[0].tel}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-bronze-soft"
            >
              <Icon name="telefono" className="h-3.5 w-3.5" />
              {firm.telefonos[0].etiqueta}
            </a>
          </div>
        </div>
      </div>

      {/* --- Barra principal ---------------------------------------------- */}
      <div
        className={`container-brand flex items-center justify-between transition-all duration-300 ${
          desplazado ? "py-2.5" : "py-4"
        }`}
      >
        <Link href="/" aria-label={`${firm.nombreCorto}, ir al inicio`}>
          <BrandMark />
        </Link>

        {/* Navegación de escritorio */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegación principal"
        >
          {navegacion.map((item) =>
            item.href === "/servicios" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServiciosAbierto(true)}
                onMouseLeave={() => setServiciosAbierto(false)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-colors ${
                    esActivo(item.href)
                      ? "text-bronze"
                      : "text-navy hover:text-bronze"
                  }`}
                  aria-expanded={serviciosAbierto}
                >
                  {item.etiqueta}
                  <Icon
                    name="chevron"
                    className={`h-3 w-3 transition-transform duration-300 ${
                      serviciosAbierto ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <div
                  className={`absolute top-full left-1/2 w-80 -translate-x-1/2 pt-4 transition-all duration-200 ${
                    serviciosAbierto
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="border-t-2 border-bronze bg-white py-2 shadow-[0_24px_48px_-24px_rgba(46,58,89,0.45)]">
                    {servicios.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/servicios/${s.slug}`}
                          className="block px-5 py-2.5 text-[0.82rem] leading-snug text-ink transition-colors hover:bg-paper-alt hover:text-bronze"
                        >
                          {s.titulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-colors ${
                  esActivo(item.href)
                    ? "text-bronze"
                    : "text-navy hover:text-bronze"
                }`}
              >
                {item.etiqueta}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="hidden bg-navy px-6 py-3 text-[0.76rem] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-bronze md:inline-flex"
          >
            Agendar consulta
          </Link>

          {/* Botón de menú móvil */}
          <button
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            className="p-1.5 text-navy lg:hidden"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            <Icon name={menuAbierto ? "cerrar" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Filete dorado inferior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bronze/45 to-transparent" />

      {/* --- Menú móvil ---------------------------------------------------- */}
      <div
        className={`fixed inset-x-0 top-0 z-40 h-dvh overflow-y-auto bg-navy px-6 pt-24 pb-12 transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] lg:hidden ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuAbierto}
      >
        <button
          type="button"
          onClick={() => setMenuAbierto(false)}
          className="absolute top-6 right-6 p-1.5 text-white"
          aria-label="Cerrar menú"
        >
          <Icon name="cerrar" className="h-6 w-6" />
        </button>

        <nav aria-label="Navegación móvil">
          <ul className="space-y-1">
            {navegacion.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-white/10 py-4 font-serif text-2xl text-white transition-colors hover:text-bronze-soft"
                >
                  {item.etiqueta}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 mb-3 text-[0.68rem] font-semibold tracking-[0.2em] text-bronze-soft uppercase">
            Líneas de práctica
          </p>
          <ul className="space-y-2.5">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="block text-[0.9rem] leading-snug text-white/75 transition-colors hover:text-white"
                >
                  {s.titulo}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-3 border-t border-white/15 pt-8 text-sm text-white/75">
            {firm.telefonos.map((t) => (
              <a
                key={t.tel}
                href={`tel:${t.tel}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Icon name="telefono" className="h-4 w-4 text-bronze-soft" />
                {t.etiqueta}
              </a>
            ))}
            <a
              href={`mailto:${firm.email}`}
              className="flex items-center gap-3 hover:text-white"
            >
              <Icon name="correo" className="h-4 w-4 text-bronze-soft" />
              {firm.email}
            </a>
          </div>

          <Link
            href="/contacto"
            className="mt-8 inline-flex w-full items-center justify-center bg-bronze px-6 py-4 text-[0.8rem] font-semibold tracking-[0.14em] text-white uppercase"
          >
            Agendar consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}
