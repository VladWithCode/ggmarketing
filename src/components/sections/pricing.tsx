import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getPlans } from "@/lib/plans";
import { siteConfig } from "@/lib/utils";

export async function Pricing() {
  const plans = await getPlans();
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola SIBRA DGO, quiero cotizar un paquete.",
  )}`;

  return (
    <section id="paquetes" className="relative py-28">
      <div className="container-page">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Paquetes
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Elige por dónde <span className="text-gradient">empezar</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-white/60">
            Cada proyecto es distinto. Estos paquetes son punto de partida; el precio final
            depende del alcance. Agenda una llamada y te damos una cotización clara.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <div
                className={
                  p.featured
                    ? "card-hover relative flex h-full flex-col rounded-3xl border border-[color:var(--color-accent)]/50 bg-gradient-to-b from-[color:var(--color-accent)]/12 to-transparent p-7 shadow-[0_24px_70px_-30px_color-mix(in_oklab,var(--color-accent)_70%,transparent)] hover:-translate-y-1.5 md:-translate-y-3 md:scale-[1.02]"
                    : "card-hover relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:-translate-y-1 hover:border-white/25"
                }
              >
                {p.featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent"
                  />
                )}
                {p.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-[color:var(--color-accent)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
                    Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1.5 text-sm text-white/55">{p.tagline}</p>
                <p className="mt-5 font-display text-lg font-semibold text-[color:var(--color-accent)]">
                  {p.priceLabel}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-white/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-[color:var(--color-accent)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-2">
                  <Button asChild variant={p.featured ? "accent" : "outline"}>
                    <Link href="/contacto">Cotizar este paquete</Link>
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
