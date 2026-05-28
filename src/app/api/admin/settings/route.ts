import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { settingsSchema } from "@/lib/settings-schema";

export const runtime = "nodejs";

export async function PUT(req: Request) {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const json = await req.json();
  const parsed = settingsSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });
  }
  const d = parsed.data;
  const data = {
    siteName: d.siteName,
    tagline: d.tagline,
    email: d.email,
    phone: d.phone || null,
    whatsappNumber: d.whatsappNumber,
    instagramUrl: d.instagramUrl || null,
    facebookUrl: d.facebookUrl || null,
    linkedinUrl: d.linkedinUrl || null,
    githubUrl: d.githubUrl || null,
    address: d.address || null,
  };
  const saved = await prisma.settings.upsert({
    where: { id: "singleton" },
    update: data,
    create: { id: "singleton", ...data },
  });
  return NextResponse.json(saved);
}
