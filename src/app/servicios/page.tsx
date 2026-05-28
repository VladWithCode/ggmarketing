import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaSection } from "@/components/sections/cta";
import { packages } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de desarrollo web, sistemas administrativos, apps móviles, automatización y dashboards.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="container-page pt-32 pb-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Servicios
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Software a medida para resolver problemas reales.
          </h1>
          <p className="mt-5 max-w-2xl text-white/65">
            Nos enfocamos en construir herramientas que se usen todos los días: rápidas,
            mantenibles y diseñadas para tu equipo.
          </p>
        </Reveal>
      </section>

      <ServicesGrid />

      <section className="py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Paquetes
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Niveles según el tamaño de tu proyecto.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div
                  className={
                    p.highlight
                      ? "relative h-full rounded-3xl border border-[color:var(--color-accent)]/40 bg-gradient-to-b from-[color:var(--color-accent)]/10 to-transparent p-7"
                      : "h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                  }
                >
                  {p.highlight && (
                    <span className="absolute right-5 top-5 rounded-full bg-[color:var(--color-accent)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
                      Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/55">{p.price}</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-white/75">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-[color:var(--color-accent)]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-7 w-full" variant={p.highlight ? "accent" : "outline"}>
                    <Link href="/contacto">Cotizar este paquete</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
