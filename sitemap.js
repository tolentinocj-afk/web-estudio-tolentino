/* ==========================================================================
   Sitemap generado automáticamente
   --------------------------------------------------------------------------
   Incluye las páginas fijas, una entrada por cada línea de práctica y una por
   cada artículo publicado en la sección Recursos. No hay que mantenerlo a
   mano: al agregar un servicio o un artículo, la entrada aparece sola.
   ========================================================================== */

import { firm, servicios } from "@/content/site";
import { listarArticulos } from "@/lib/recursos";

export default function sitemap() {
  const base = firm.dominio;
  const ahora = new Date();

  const fijas = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" },
    { url: "/servicios", priority: 0.9, changeFrequency: "monthly" },
    { url: "/nosotros", priority: 0.7, changeFrequency: "yearly" },
    { url: "/recursos", priority: 0.7, changeFrequency: "weekly" },
    { url: "/contacto", priority: 0.9, changeFrequency: "yearly" },
    { url: "/libro-de-reclamaciones", priority: 0.4, changeFrequency: "yearly" },
    { url: "/politica-de-privacidad", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terminos-de-uso", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...fijas.map((p) => ({
      url: `${base}${p.url}`,
      lastModified: ahora,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...servicios.map((s) => ({
      url: `${base}/servicios/${s.slug}`,
      lastModified: ahora,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...listarArticulos().map((a) => ({
      url: `${base}/recursos/${a.slug}`,
      lastModified: a.fecha ? new Date(a.fecha) : ahora,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
