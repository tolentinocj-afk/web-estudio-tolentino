/* ==========================================================================
   Layout raíz
   --------------------------------------------------------------------------
   Carga las tipografías, define los metadatos y el marcado estructurado
   schema.org, y monta la barra superior, el pie de página y el botón flotante
   de WhatsApp en todas las páginas.
   ========================================================================== */

/* Tipografías autoalojadas (no se cargan desde servidores de Google).
   Playfair Display para titulares, Inter para el cuerpo de texto.
   Los archivos viajan con el proyecto: mejor rendimiento y sin peticiones a
   terceros, lo que además simplifica el cumplimiento en materia de datos. */
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/inter";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { firm, oficinas, seo, servicios } from "@/content/site";

/* --- Metadatos y SEO ------------------------------------------------------ */

export const metadata = {
  metadataBase: new URL(firm.dominio),
  title: {
    default: seo.titulo,
    template: seo.tituloPlantilla,
  },
  description: seo.descripcion,
  keywords: seo.palabrasClave,
  authors: [{ name: firm.razonSocial }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: firm.dominio,
    siteName: firm.nombreCorto,
    title: seo.titulo,
    description: seo.descripcion,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${firm.nombreCorto} — ${firm.bajada}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titulo,
    description: seo.descripcion,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: "#2E3A59",
  width: "device-width",
  initialScale: 1,
};

/* --- Datos estructurados schema.org --------------------------------------- */

function datosEstructurados() {
  const direcciones = oficinas.map((o) => ({
    "@type": "PostalAddress",
    streetAddress: o.direccion,
    addressLocality: o.distrito,
    addressRegion: "Lima",
    addressCountry: "PE",
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "AccountingService", "LocalBusiness"],
        "@id": `${firm.dominio}/#organizacion`,
        name: firm.razonSocial,
        alternateName: firm.nombreCorto,
        url: firm.dominio,
        email: firm.email,
        telephone: firm.telefonos.map((t) => t.tel),
        foundingDate: String(firm.anioFundacion),
        taxID: firm.ruc,
        description: seo.descripcion,
        image: `${firm.dominio}/og-image.jpg`,
        // Perfiles oficiales: ayudan a Google a vincular la ficha del negocio
        // con las redes de la firma y a evitar suplantaciones.
        sameAs: firm.redes.map((r) => r.url),
        areaServed: [
          { "@type": "Country", name: "Perú" },
          { "@type": "City", name: "Lima" },
          { "@type": "City", name: "Cañete" },
        ],
        address: direcciones,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "13:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Líneas de práctica",
          itemListElement: servicios.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.titulo,
              description: s.resumen,
              url: `${firm.dominio}/servicios/${s.slug}`,
            },
          })),
        },
      },
      ...oficinas.map((o, i) => ({
        "@type": "LocalBusiness",
        "@id": `${firm.dominio}/#oficina-${o.id}`,
        name: `${firm.nombreCorto} — ${o.nombre}`,
        parentOrganization: { "@id": `${firm.dominio}/#organizacion` },
        address: direcciones[i],
        telephone: firm.telefonos[0].tel,
        email: firm.email,
        url: firm.dominio,
      })),
    ],
  };
}

/* --- Layout --------------------------------------------------------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="es-PE" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        {/* Enlace de salto para navegación por teclado */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Ir al contenido principal
        </a>

        <Header />

        <main id="contenido" className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(datosEstructurados()),
          }}
        />
      </body>
    </html>
  );
}
