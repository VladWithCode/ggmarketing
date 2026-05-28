import { Reveal } from "@/components/ui/reveal";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Testimonios
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Lo que dicen quienes <span className="text-gradient">ya trabajaron</span> con nosotros.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.role}
              as="figure"
              delay={i * 0.08}
              className="group card-hover flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Quote className="size-6 text-[color:var(--color-accent)]/70 transition-all duration-500 group-hover:scale-110 group-hover:text-[color:var(--color-accent)]" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[color:var(--color-accent)]/30 to-[color:var(--color-accent-2)]/30 text-xs font-semibold text-white">
                  {t.initials}
                </span>
                <span className="text-xs text-white/55">{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/30">
          {/* TODO: reemplazar con testimonios reales y verificados. */}
          Testimonios representativos. Próximamente con casos verificados.
        </p>
      </div>
    </section>
  );
}
