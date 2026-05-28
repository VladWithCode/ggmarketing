import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/lib/project-schema";

export const runtime = "nodejs";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const { id } = await params;
  const json = await req.json();
  const parsed = projectSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });
  }
  const d = parsed.data;
  const updated = await prisma.project.update({
    where: { id },
    data: {
      slug: d.slug,
      title: d.title,
      clientName: d.clientName || null,
      shortDescription: d.shortDescription,
      fullDescription: d.fullDescription,
      category: d.category,
      technologies: d.technologies,
      services: d.services,
      heroImage: d.heroImage,
      galleryImages: d.galleryImages,
      liveUrl: d.liveUrl || null,
      repoUrl: d.repoUrl || null,
      results: d.results ?? undefined,
      featured: d.featured,
      published: d.published,
      order: d.order,
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const { id } = await params;
  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
