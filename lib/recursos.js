/* ==========================================================================
   Motor de artículos de la sección Recursos
   --------------------------------------------------------------------------
   Cada artículo es un archivo Markdown dentro de content/recursos/.
   No hace falta base de datos ni gestor de contenidos: para publicar un
   artículo nuevo basta con crear un .md en esa carpeta y volver a desplegar.

   Encabezado (frontmatter) esperado en cada archivo:

     ---
     titulo: "Título del artículo"
     resumen: "Una o dos líneas que se muestran en el listado."
     categoria: "Tributario"          # etiqueta visible
     fecha: "2026-08-15"              # AAAA-MM-DD
     autor: "Carlos José Tolentino Béjar"
     lectura: 6                       # minutos estimados, opcional
     destacado: true                  # opcional, lo sube al inicio del listado
     ---

   Solo se ejecuta en el servidor, durante la compilación.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const DIRECTORIO = path.join(process.cwd(), "content", "recursos");

/* Convierte "2026-08-15" en "15 de agosto de 2026" */
export function formatearFecha(iso) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre",
  ];
  const [a, m, d] = String(iso).split("-").map(Number);
  if (!a || !m || !d) return String(iso);
  return `${d} de ${meses[m - 1]} de ${a}`;
}

/* Lista de artículos ordenada de más reciente a más antiguo.
   Los marcados como destacados suben al inicio. */
export function listarArticulos() {
  if (!fs.existsSync(DIRECTORIO)) return [];

  const archivos = fs
    .readdirSync(DIRECTORIO)
    .filter((f) => f.endsWith(".md"));

  return archivos
    .map((archivo) => {
      const crudo = fs.readFileSync(path.join(DIRECTORIO, archivo), "utf8");
      const { data } = matter(crudo);
      return {
        slug: archivo.replace(/\.md$/, ""),
        titulo: data.titulo || "Sin título",
        resumen: data.resumen || "",
        categoria: data.categoria || "General",
        fecha: data.fecha || "",
        fechaLegible: formatearFecha(data.fecha),
        autor: data.autor || "Estudio Tolentino & Asociados",
        lectura: data.lectura || null,
        destacado: Boolean(data.destacado),
      };
    })
    .sort((a, b) => {
      if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
      return String(b.fecha).localeCompare(String(a.fecha));
    });
}

/* Artículo completo con su contenido ya convertido a HTML */
export async function obtenerArticulo(slug) {
  const ruta = path.join(DIRECTORIO, `${slug}.md`);
  if (!fs.existsSync(ruta)) return null;

  const crudo = fs.readFileSync(ruta, "utf8");
  const { data, content } = matter(crudo);

  const procesado = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    titulo: data.titulo || "Sin título",
    resumen: data.resumen || "",
    categoria: data.categoria || "General",
    fecha: data.fecha || "",
    fechaLegible: formatearFecha(data.fecha),
    autor: data.autor || "Estudio Tolentino & Asociados",
    lectura: data.lectura || null,
    html: String(procesado),
  };
}

/* Categorías presentes, para los filtros del listado */
export function listarCategorias() {
  return [...new Set(listarArticulos().map((a) => a.categoria))].sort();
}
