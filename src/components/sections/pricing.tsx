import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getPlans } from "@/lib/plans";
import { siteConfig } from "@/lib/utils";
import { CloudShape } from "@/components/ui/cloud-shape";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

// Simple Corporate-Memphis style illustration (flat blobs + circle).
function MemphisArt({ i }: { i: number }) {
  const palette = [
    ["#2f6bff", "#8b5cf6"],
    ["#8b5cf6", "#a855f7"],
    ["#f43f6b", "#fbbf24"],
  ][i % 3];
  return (
    <svg viewBox="0 0 120 70" className="h-16 w-full" aria-hidden>
      <circle cx="28" cy="34" r="20" fill={palette[0]} opacity="0.9" />
      <rect x="50" y="18" width="34" height="34" rx="12" fill={palette[1]} opacity="0.9" />
      <path d="M86 50 q14 -28 28 0" fill="none" stroke={palette[0]} strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="20" r="6" fill={palette[1]} />
    </svg>
  );
}

export async function Pricing() {
  const plans = await getPlans();
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola GG Marketing, quiero cotizar un paquete.",
  )}`;

  return (
    <section id="paquetes" className="relative overflow-hidden bg-[color:var(--color-bg)] py-24">
      <CloudShape variant="wide" fill="#ffffff" opacity={0.6} className="animate-cloud pointer-events-none absolute left-[-4%] top-10 w-64" />
      <CloudShape variant="puffy" fill="#ffffff" opacity={0.5} className="animate-cloud-rev pointer-events-none absolute right-[-2%] top-24 w-56" />
      <div className="container-page relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionEyebrow>Planes</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Elige por dónde <span className="text-gradient">empezar</span>
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)]">
            Cada marca es distinta. Estos planes son punto de partida; la inversión final
            depende del alcance. Agenda una llamada y te damos una cotización clara.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <div
                className={
                  p.featured
                    ? "card-hover relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[color:var(--color-accent)]/40 bg-white p-7 shadow-soft-lg md:-translate-y-3"
                    : "card-hover relative flex h-full flex-col rounded-3xl border border-[color:var(--color-border)] bg-white p-7 shadow-soft"
                }
              >
                {p.featured && (
                  <>
                    <span className="absolute right-6 top-6 z-10 rounded-full grad-brand px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Popular
                    </span>
                    <CloudShape variant="puffy" fill="var(--color-accent)" opacity={0.08} className="pointer-events-none absolute -left-6 -top-6 w-40" />
                  </>
                )}
                <MemphisArt i={i} />
                <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1.5 text-sm text-[color:var(--color-muted)]">{p.tagline}</p>

                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-[color:var(--color-fg)]/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-[color:var(--color-accent-2)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <span className="inline-flex w-fit items-center rounded-full bg-[color:var(--color-price)]/12 px-3 py-1 text-xs font-semibold text-[color:var(--color-price)]">
                    {p.priceLabel}
                  </span>
                  <Button asChild variant={p.featured ? "accent" : "outline"}>
                    <Link href="/contacto">Cotizar este plan</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={wa} target="_blank" rel="noreferrer">
                      Agendar llamada por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
