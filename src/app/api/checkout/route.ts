import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Stripe checkout — SCAFFOLDING / INACTIVE.
 *
 * Not wired yet on purpose:
 *  1. Packages currently use "cotización personalizada" (no fixed price to charge).
 *  2. The `stripe` SDK is not installed in this environment.
 *
 * To activate later:
 *  - `npm install stripe`
 *  - Set STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET in env
 *  - Set Plan.priceCents + Plan.stripePriceId in the DB (admin)
 *  - Replace the body below with a real `stripe.checkout.sessions.create(...)`
 *    using the plan's stripePriceId, then redirect to session.url.
 *  - Implement /api/stripe/webhook to persist Subscription on
 *    `checkout.session.completed`.
 *
 * Until then this returns 501 so the UI falls back to contacto/WhatsApp.
 */
export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      error: "checkout_not_configured",
      message:
        "El checkout en línea aún no está activo. Cotiza tu paquete por contacto o WhatsApp.",
    },
    { status: 501 },
  );
}
