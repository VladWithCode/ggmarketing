import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PlanForm } from "@/components/admin/plan-form";

export default async function EditPlan({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!process.env.DATABASE_URL) notFound();
  const p = await prisma.plan.findUnique({ where: { id } });
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-semibold">Editar plan</h1>
      <p className="mt-1 text-sm text-white/55">{p.name}</p>
      <div className="mt-8">
        <PlanForm
          id={p.id}
          initial={{
            slug: p.slug,
            name: p.name,
            tagline: p.tagline,
            priceLabel: p.priceLabel,
            features: p.features,
            featured: p.featured,
            published: p.published,
            order: p.order,
          }}
        />
      </div>
    </div>
  );
}
