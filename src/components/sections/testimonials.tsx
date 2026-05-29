import { Reveal } from "@/components/ui/reveal";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="relative bg-[color:var(--color-bg)] py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Testimonios
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Lo que dicen quienes <span className="text-gradient">ya trabajaron</span> con nosotros
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.role}
              as="figure"
              delay={i * 0.08}
              className="card-hover flex h-full flex-col soft-card p-7"
            >
              <Quote className="size-7 text-[color:var(--color-accent-2)]" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--color-fg)]/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[color:var(--color-border)] pt-5">
                <span className="grid size-10 place-items-center rounded-full grad-brand text-xs font-bold text-white">
                  {t.initials}
                </span>
                <span className="text-xs text-[color:var(--color-muted)]">{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[color:var(--color-muted)]/70">
          Testimonios representativos. Próximamente con casos verificados.
        </p>
      </div>
    </section>
  );
}
