import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Clouds } from "@/components/sections/clouds";
import { CloudShape } from "@/components/ui/cloud-shape";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function WebDesign() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionEyebrow index="02">Diseño web · Landing pages</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Llevamos tu <span className="text-gradient">presencia digital</span> al siguiente nivel
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)]">
            Diseñamos páginas web, landing pages y campañas conectadas a objetivos
            comerciales reales: más clientes, más ventas y una marca que se ve
            profesional en cada pantalla.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contacto">¡Contáctanos!</Link>
            </Button>
          </div>
        </Reveal>

        {/* Mockup on a sky panel with clouds */}
        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#cfe1ff] to-[#eef4ff] p-8 shadow-soft-lg md:p-12">
            <Clouds density="soft" className="opacity-80" />
            <CloudShape variant="small" fill="#ffffff" className="animate-cloud-bob absolute right-6 top-6 w-16" />

            <div className="relative mx-auto w-full max-w-md rounded-[1.4rem] border border-white/70 bg-white p-3 shadow-soft-lg">
              <div className="overflow-hidden rounded-2xl ring-1 ring-[color:var(--color-border)]">
                <div className="flex items-center gap-1.5 border-b border-[color:var(--color-border)] bg-white px-4 py-3">
                  <span className="size-2.5 rounded-full bg-[#f43f6b]" />
                  <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="size-2.5 rounded-full bg-[#34a853]" />
                  <span className="ml-3 h-4 w-36 rounded-full bg-[color:var(--color-bg-soft)]" />
                </div>
                <div className="space-y-4 bg-white p-5">
                  <div className="grad-brand h-24 rounded-xl opacity-90" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-xl bg-[color:var(--color-accent)]/10" />
                    <div className="h-16 rounded-xl bg-[color:var(--color-accent-2)]/12" />
                    <div className="h-16 rounded-xl bg-[color:var(--color-accent-3)]/12" />
                  </div>
                  <div className="h-3 w-3/4 rounded-full bg-[color:var(--color-bg-soft)]" />
                  <div className="grad-brand h-9 w-32 rounded-full" />
                </div>
              </div>
            </div>

            {/* floating stat chip */}
            <div className="absolute -bottom-4 left-6 rounded-2xl bg-white px-4 py-3 shadow-soft-lg ring-1 ring-[color:var(--color-border)]">
              <div className="font-display text-lg font-bold text-[color:var(--color-accent)]">+120%</div>
              <div className="text-[11px] text-[color:var(--color-muted)]">tráfico web</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
