import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { planSchema } from "@/lib/plan-schema";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const json = await req.json();
  const parsed = planSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });
  }
  const d = parsed.data;
  const created = await prisma.plan.create({
    data: {
      slug: d.slug,
      name: d.name,
      tagline: d.tagline,
      priceLabel: d.priceLabel,
      features: d.features,
      featured: d.featured,
      published: d.published,
      order: d.order,
    },
  });
  return NextResponse.json(created);
}
