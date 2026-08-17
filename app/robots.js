import { firm } from "@/content/site";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${firm.dominio}/sitemap.xml`,
  };
}
