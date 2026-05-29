import { Reveal } from "@/components/ui/reveal";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CloudShape } from "@/components/ui/cloud-shape";

export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container-page">
        <Reveal>
          <SectionEyebrow index="04">Testimonios</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            Marcas que ya están <span className="text-gradient">en las nubes</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Featured quote — spans 2 cols, navy, large */}
          {lead && (
            <Reveal as="figure" className="relative overflow-hidden rounded-[2rem] bg-[color:var(--color-navy)] p-8 text-white shadow-soft-lg lg:col-span-2 lg:p-12">
              <CloudShape variant="puffy" fill="#ffffff" opacity={0.06} className="pointer-events-none absolute -right-6 -top-6 w-56" />
              <Quote className="size-10 text-[color:var(--color-accent-2)]" />
              <blockquote className="mt-5 max-w-2xl font-display text-xl font-semibold leading-snug md:text-2xl">
                “{lead.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full grad-brand text-sm font-bold text-white">{lead.initials}</span>
                <span className="text-sm text-white/70">{lead.role}</span>
              </figcaption>
            </Reveal>
          )}

          {/* Stacked smaller quotes */}
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <Reveal
                key={t.role}
                as="figure"
                delay={i * 0.08}
                className="card-hover flex-1 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-6 shadow-soft"
              >
                <Quote className="size-6 text-[color:var(--color-accent-2)]" />
                <blockquote className="mt-3 text-sm leading-relaxed text-[color:var(--color-fg)]/80">“{t.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-2.5 border-t border-[color:var(--color-border)] pt-4">
                  <span className="grid size-9 place-items-center rounded-full grad-brand text-xs font-bold text-white">{t.initials}</span>
                  <span className="text-xs text-[color:var(--color-muted)]">{t.role}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-[color:var(--color-muted)]/70">
          Testimonios representativos. Próximamente con casos verificados.
        </p>
      </div>
    </section>
  );
}
