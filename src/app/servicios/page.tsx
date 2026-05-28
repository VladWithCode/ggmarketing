import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Pricing } from "@/components/sections/pricing";
import { Comparison } from "@/components/sections/comparison";
import { CtaSection } from "@/components/sections/cta";
import { Clouds } from "@/components/sections/clouds";

export const metadata: Metadata = {
  title: "Servicios y paquetes",
  description:
    "Marketing digital, publicidad en redes, gestión de redes sociales, branding, campañas Meta Ads y páginas web. Paquetes Presencia Digital, Campañas y Redes, y Estrategia Integral.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <Clouds className="[mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" />
        </div>
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              · Servicios
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Marketing digital para <span className="text-gradient">hacer crecer tu marca</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-white/65">
              Contenido, publicidad, redes y presencia web. Estrategias que se ejecutan cada
              día y se miden con resultados.
            </p>
          </Reveal>
        </div>
      </section>

      <ServicesGrid />
      <Pricing />
      <Comparison />
      <CtaSection />
    </>
  );
}
