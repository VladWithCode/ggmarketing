import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils";
import { listProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticPaths = [
    "",
    "/servicios",
    "/proyectos",
    "/acerca-de-nosotros",
    "/contacto",
    "/aviso-de-privacidad",
    "/terminos-y-condiciones",
    "/politica-de-cookies",
  ];

  const projects = await listProjects();
  const projectEntries = projects.map((p) => ({
    url: `${base}/proyectos/${p.slug}`,
    lastModified: p.createdAt ?? new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...projectEntries,
  ];
}
