import { Reveal } from "@/components/ui/reveal";
import { Target, TrendingUp, Sparkles } from "lucide-react";
import { CloudShape } from "@/components/ui/cloud-shape";

const pillars = [
  {
    Icon: Target,
    title: "Estrategia, no improvisación",
    desc: "Definimos objetivos, público y mensaje antes de publicar. Cada campaña tiene un para qué claro.",
  },
  {
    Icon: Sparkles,
    title: "Contenido que detiene el scroll",
    desc: "Diseño, copy y video pensados para tu marca. Publicaciones que la gente sí quiere ver y compartir.",
  },
  {
    Icon: TrendingUp,
    title: "Resultados medibles",
    desc: "Reportes claros de alcance, interacción y conversiones. Optimizamos sobre datos, no corazonadas.",
  },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-bg)] py-24">
      <CloudShape variant="puffy" fill="#ffffff" opacity={0.7} className="animate-cloud pointer-events-none absolute left-[-3%] top-12 w-60" />
      <CloudShape variant="wide" fill="#ffffff" opacity={0.6} className="animate-cloud-rev pointer-events-none absolute right-[-4%] bottom-16 w-72" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full grad-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft">
            #OptimizarOMorir
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-5xl">
            No solo publicamos bonito.{" "}
            <span className="text-gradient">Hacemos crecer tu marca.</span>
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)]">
            Somos un equipo creativo que combina estrategia, diseño, publicidad y desarrollo
            web para ayudar a marcas a crecer en digital.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              delay={i * 0.08}
              className="card-hover rounded-3xl bg-[color:var(--color-navy)] p-7 text-white shadow-soft"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                <p.Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
