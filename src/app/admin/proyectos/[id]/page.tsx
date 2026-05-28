import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProjectForm } from "@/components/admin/project-form";

export default async function EditProject({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!process.env.DATABASE_URL) notFound();
  const p = await prisma.project.findUnique({ where: { id } });
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-semibold">Editar proyecto</h1>
      <p className="mt-1 text-sm text-white/55">{p.title}</p>
      <div className="mt-8">
        <ProjectForm
          id={p.id}
          initial={{
            slug: p.slug,
            title: p.title,
            clientName: p.clientName ?? "",
            shortDescription: p.shortDescription,
            fullDescription: p.fullDescription,
            category: p.category,
            technologies: p.technologies,
            services: p.services,
            heroImage: p.heroImage,
            galleryImages: p.galleryImages,
            liveUrl: p.liveUrl ?? "",
            repoUrl: p.repoUrl ?? "",
            featured: p.featured,
            published: p.published,
            order: p.order,
          }}
        />
      </div>
    </div>
  );
}
