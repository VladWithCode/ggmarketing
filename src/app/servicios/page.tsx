import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Pricing } from "@/components/sections/pricing";
import { Comparison } from "@/components/sections/comparison";
import { CtaSection } from "@/components/sections/cta";
import { Clouds } from "@/components/sections/clouds";
import { WaveDivider } from "@/components/ui/wave-divider";

export const metadata: Metadata = {
  title: "Servicios y planes",
  description:
    "Marketing digital, publicidad en redes, gestión de redes sociales, branding, campañas Meta Ads y páginas web. Planes Emprendedor, Empresario y Magnate.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#cfe1ff] to-[#eef4ff] pt-32 pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <Clouds />
        </div>
        <div className="container-page text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              · Servicios
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
              Marketing digital para <span className="text-gradient">hacer crecer tu marca</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[color:var(--color-muted)]">
              Contenido, publicidad, redes y presencia web. Estrategias que se ejecutan cada
              día y se miden con resultados.
            </p>
          </Reveal>
        </div>
        <WaveDivider fill="#ffffff" className="absolute inset-x-0 bottom-0" />
      </section>

      <ServicesGrid />
      <Pricing />
      <Comparison />
      <CtaSection />
    </>
  );
}
