/* ==========================================================================
   Footer — pie de página
   --------------------------------------------------------------------------
   Logo en blanco, razón social y RUC, menú resumido, líneas de práctica,
   datos de contacto, horario, redes sociales, enlaces legales y aviso visible
   del Libro de Reclamaciones.
   ========================================================================== */

import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import Icon from "@/components/ui/Icon";
import {
  firm,
  navegacion,
  servicios,
  oficinas,
  legales,
  pie,
} from "@/content/site";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="pattern-lines bg-navy-deep text-white/70">
      <div className="container-brand py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* --- Marca y descripción -------------------------------------- */}
          <div className="lg:col-span-4">
            <BrandMark variante="claro" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {pie.descripcion}
            </p>
            <p className="mt-6 text-xs tracking-[0.08em] text-white/50">
              {firm.razonSocial}
              <br />
              RUC {firm.ruc}
            </p>

            <ul className="mt-6 flex gap-3">
              {firm.redes.map((r) => (
                <li key={r.nombre}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${firm.nombreCorto} en ${r.nombre}`}
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
                  >
                    <Icon name={r.icono} className="h-4.5 w-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Menú resumido -------------------------------------------- */}
          <nav className="lg:col-span-2" aria-label="Navegación del pie">
            <h2 className="mb-5 text-[0.7rem] font-semibold tracking-[0.2em] text-bronze-soft uppercase">
              Navegación
            </h2>
            <ul className="space-y-2.5 text-sm">
              {navegacion.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.etiqueta}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* --- Líneas de práctica --------------------------------------- */}
          <nav className="lg:col-span-3" aria-label="Líneas de práctica">
            <h2 className="mb-5 text-[0.7rem] font-semibold tracking-[0.2em] text-bronze-soft uppercase">
              Líneas de práctica
            </h2>
            <ul className="space-y-2.5 text-sm">
              {servicios.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="leading-snug transition-colors hover:text-white"
                  >
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* --- Contacto y oficinas -------------------------------------- */}
          <div className="lg:col-span-3">
            <h2 className="mb-5 text-[0.7rem] font-semibold tracking-[0.2em] text-bronze-soft uppercase">
              Contacto
            </h2>

            <ul className="space-y-3 text-sm">
              {firm.telefonos.map((t) => (
                <li key={t.tel}>
                  <a
                    href={`tel:${t.tel}`}
                    className="flex items-center gap-3 transition-colors hover:text-white"
                  >
                    <Icon
                      name="telefono"
                      className="h-4 w-4 flex-none text-bronze-soft"
                    />
                    {t.etiqueta}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${firm.email}`}
                  className="flex items-center gap-3 text-[0.8rem] transition-colors hover:text-white"
                >
                  <Icon
                    name="correo"
                    className="h-4 w-4 flex-none text-bronze-soft"
                  />
                  {firm.email}
                </a>
              </li>
              {oficinas.map((o) => (
                <li key={o.id}>
                  <a
                    href={o.comoLlegar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 transition-colors hover:text-white"
                  >
                    <Icon
                      name="pin"
                      className="mt-0.5 h-4 w-4 flex-none text-bronze-soft"
                    />
                    <span className="leading-snug">
                      {o.direccion}
                      <br />
                      {o.distrito}
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Icon
                  name="reloj"
                  className="mt-0.5 h-4 w-4 flex-none text-bronze-soft"
                />
                <span className="leading-snug">
                  {firm.horario.semana}
                  <br />
                  {firm.horario.sabado}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Aviso del Libro de Reclamaciones --------------------------- */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-white/55">
            {pie.avisoReclamaciones}
          </p>
          <Link
            href="/libro-de-reclamaciones"
            className="inline-flex flex-none items-center gap-3 border border-white/25 px-5 py-3 text-[0.7rem] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:border-bronze hover:bg-bronze"
          >
            <span
              aria-hidden="true"
              className="inline-block h-4 w-3 border border-current"
            />
            Libro de Reclamaciones
          </Link>
        </div>
      </div>

      {/* --- Barra legal inferior ----------------------------------------- */}
      <div className="border-t border-white/10">
        <div className="container-brand flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          {/* La razón social ya termina en punto, por eso no se agrega otro */}
          <p>
            © {anio} {firm.razonSocial} Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legales.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
