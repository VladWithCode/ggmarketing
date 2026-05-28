import { NextResponse } from "next/server";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

/**
 * Env-gated notification. No external SDK required.
 * - CONTACT_WEBHOOK_URL: si está, hace POST del contacto (Zapier / Make / n8n /
 *   Slack incoming webhook / etc.). Si no está, solo se guarda en DB. Nunca rompe.
 * - CONTACT_NOTIFY_EMAIL: documentado para integración futura de correo (requiere
 *   proveedor SMTP/API; no se envía aún sin esa integración).
 */
async function notify(data: ContactInput) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "ggmarketing/contacto",
        notifyEmail: process.env.CONTACT_NOTIFY_EMAIL ?? null,
        receivedAt: new Date().toISOString(),
        ...data,
      }),
      // No bloquear la respuesta al usuario por un webhook lento.
      signal: AbortSignal.timeout(4000),
    });
  } catch (e) {
    console.error("[contact] webhook notify failed", e);
  }
}

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

  await notify(data);

  return NextResponse.json({ ok: true });
}
