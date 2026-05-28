import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (process.env.DATABASE_URL) {
    try {
      await prisma.contact.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          projectType: data.projectType || null,
          budget: data.budget || null,
          message: data.message,
        },
      });
    } catch (e) {
      console.error("contact db error", e);
    }
  } else {
    console.log("[contact] (no DB) ", data);
  }

  // TODO: notify by email/WhatsApp once integration is configured
  return NextResponse.json({ ok: true });
}
