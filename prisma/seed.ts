import { PrismaClient } from "@prisma/client";
import { seedProjects } from "../src/lib/projects-seed";
import { plans } from "../src/lib/plans";

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
  for (const [i, p] of plans.entries()) {
    await prisma.plan.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        priceLabel: p.priceLabel,
        features: p.features,
        featured: p.featured ?? false,
        order: i,
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
