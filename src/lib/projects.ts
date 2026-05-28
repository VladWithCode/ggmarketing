import { prisma } from "@/lib/prisma";
import { seedProjects, type SeedProject } from "@/lib/projects-seed";

export type PublicProject = SeedProject & {
  id: string;
  createdAt?: Date;
};

function fromSeed(s: SeedProject): PublicProject {
  return { ...s, id: s.slug };
}

function hasDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return false;
  // Reject obvious placeholders so seed fallback runs silently in dev/CI.
  if (/(^|@)host(:|\/)/.test(url) || /user:password/.test(url)) return false;
  return true;
}

export async function listProjects(opts?: { featuredOnly?: boolean }): Promise<PublicProject[]> {
  if (!hasDb()) {
    const list = opts?.featuredOnly ? seedProjects.filter((p) => p.featured) : seedProjects;
    return list.map(fromSeed);
  }
  try {
    const rows = await prisma.project.findMany({
      where: { published: true, ...(opts?.featuredOnly ? { featured: true } : {}) },
      orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    });
    if (rows.length === 0) {
      const list = opts?.featuredOnly ? seedProjects.filter((p) => p.featured) : seedProjects;
      return list.map(fromSeed);
    }
    return rows.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      clientName: r.clientName ?? undefined,
      shortDescription: r.shortDescription,
      fullDescription: r.fullDescription,
      category: r.category,
      technologies: r.technologies,
      services: r.services,
      heroImage: r.heroImage,
      galleryImages: r.galleryImages,
      liveUrl: r.liveUrl ?? undefined,
      repoUrl: r.repoUrl ?? undefined,
      results: (r.results as { label: string; value: string }[] | null) ?? undefined,
      featured: r.featured,
      createdAt: r.createdAt,
    }));
  } catch {
    return (opts?.featuredOnly ? seedProjects.filter((p) => p.featured) : seedProjects).map(fromSeed);
  }
}

export async function getProjectBySlug(slug: string): Promise<PublicProject | null> {
  if (!hasDb()) {
    const s = seedProjects.find((p) => p.slug === slug);
    return s ? fromSeed(s) : null;
  }
  try {
    const r = await prisma.project.findUnique({ where: { slug } });
    if (!r) {
      const s = seedProjects.find((p) => p.slug === slug);
      return s ? fromSeed(s) : null;
    }
    const list = await listProjects();
    return list.find((p) => p.slug === slug) ?? null;
  } catch {
    const s = seedProjects.find((p) => p.slug === slug);
    return s ? fromSeed(s) : null;
  }
}
