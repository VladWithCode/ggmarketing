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
    "Desarrollo web, sistemas administrativos, dashboards, apps móviles, automatización e integración de bases de datos. Paquetes Básico, Profesional y Empresarial.",
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
              Software a medida para <span className="text-gradient">resolver problemas reales</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-white/65">
              Construimos herramientas que se usan todos los días: rápidas, mantenibles y
              diseñadas para tu equipo.
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
