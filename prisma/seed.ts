import { PrismaClient } from "@prisma/client";
import { seedProjects } from "../src/lib/projects-seed";

const prisma = new PrismaClient();

async function main() {
  for (const p of seedProjects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        title: p.title,
        clientName: p.clientName,
        shortDescription: p.shortDescription,
        fullDescription: p.fullDescription,
        category: p.category,
        technologies: p.technologies,
        services: p.services,
        heroImage: p.heroImage,
        galleryImages: p.galleryImages,
        results: p.results ?? undefined,
        featured: p.featured,
        published: true,
      },
    });
  }
  await prisma.settings.upsert({
    where: { id: "singleton" },
    update: {},
    create: { id: "singleton" },
  });
  console.log("Seed completo");
}

main().finally(() => prisma.$disconnect());
