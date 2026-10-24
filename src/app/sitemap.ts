import type { MetadataRoute } from "next";
import { projects } from "@/data/content";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/sobre-mi", "/proyectos", "/trayectoria", "/contacto"];
  return [
    ...pages.map((p) => ({ url: `${siteUrl}${p}`, changeFrequency: "monthly" as const, priority: p ? 0.8 : 1 })),
    ...projects.map((p) => ({ url: `${siteUrl}/proyectos/${p.id}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
