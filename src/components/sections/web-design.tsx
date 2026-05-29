import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function WebDesign() {
  return (
    <section className="relative bg-white py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            Diseño web · Landing pages
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Tenemos al mejor equipo para llevar tu{" "}
            <span className="text-gradient">presencia digital</span> al siguiente nivel.
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)]">
            En GG Marketing diseñamos páginas web, landing pages y campañas conectadas a
            objetivos comerciales reales: más clientes, más ventas y una marca que se ve
            profesional en cada pantalla.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contacto">¡Contáctanos!</Link>
            </Button>
          </div>
        </Reveal>

        {/* Desktop / iMac-style SVG mockup */}
        <Reveal delay={0.1} className="relative">
          <div className="soft-shadow-lg relative mx-auto w-full max-w-lg rounded-[1.6rem] border border-[color:var(--color-border)] bg-white p-3">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#eaf1ff] to-white ring-1 ring-[color:var(--color-border)]">
              <div className="flex items-center gap-1.5 border-b border-[color:var(--color-border)] bg-white px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#f43f6b]" />
                <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                <span className="size-2.5 rounded-full bg-[#34a853]" />
                <span className="ml-3 h-4 w-40 rounded-full bg-[color:var(--color-bg-soft)]" />
              </div>
              <div className="space-y-4 p-5">
                <div className="grad-brand h-24 rounded-xl opacity-90" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-[color:var(--color-accent)]/10" />
                  <div className="h-16 rounded-xl bg-[color:var(--color-accent-2)]/12" />
                  <div className="h-16 rounded-xl bg-[color:var(--color-accent-3)]/12" />
                </div>
                <div className="h-3 w-3/4 rounded-full bg-[color:var(--color-bg-soft)]" />
                <div className="h-3 w-1/2 rounded-full bg-[color:var(--color-bg-soft)]" />
                <div className="grad-brand h-9 w-32 rounded-full" />
              </div>
            </div>
          </div>
          {/* iMac stand */}
          <div className="mx-auto mt-2 h-6 w-24 rounded-b-2xl bg-[color:var(--color-border)]" />
          <div className="mx-auto h-2 w-40 rounded-full bg-[color:var(--color-border)]" />
        </Reveal>
      </div>
    </section>
  );
}
