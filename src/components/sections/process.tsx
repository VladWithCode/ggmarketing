import { Reveal } from "@/components/ui/reveal";
import { Search, PenLine, Megaphone, BarChart3, Rocket, type LucideIcon } from "lucide-react";

type Step = { n: string; title: string; desc: string; Icon: LucideIcon };

const steps: Step[] = [
  { n: "01", title: "Diagnóstico", desc: "Escuchamos. Analizamos tu marca, tu público y tus objetivos reales.", Icon: Search },
  { n: "02", title: "Estrategia y contenido", desc: "Definimos mensaje, calendario y creatividades. Planeamos antes de publicar.", Icon: PenLine },
  { n: "03", title: "Campañas", desc: "Publicamos y lanzamos anuncios segmentados en redes para llegar a clientes.", Icon: Megaphone },
  { n: "04", title: "Optimización", desc: "Medimos métricas y ajustamos creatividades y segmentación para mejor rendimiento.", Icon: BarChart3 },
  { n: "05", title: "Reporte y crecimiento", desc: "Reportes claros y acompañamiento continuo para seguir escalando la marca.", Icon: Rocket },
];

export function Process() {
  return (
    <section className="relative bg-white py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Proceso
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Cómo <span className="text-gradient">trabajamos</span>
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)]">
            Un proceso simple, transparente y enfocado en resultados. Sin promesas vacías.
          </p>
        </Reveal>

        {/* Desktop timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--color-accent)]/25 to-transparent" />
            <ol className="relative grid grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} as="li" delay={i * 0.08} className="text-center">
                  <div className="relative mx-auto grid size-16 place-items-center rounded-full bg-white text-[color:var(--color-accent)] shadow-soft ring-1 ring-[color:var(--color-border)]">
                    <s.Icon className="size-6" />
                    <span className="absolute -bottom-2 -right-1 rounded-full grad-brand px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted)]">{s.desc}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile timeline */}
        <ol className="mt-12 space-y-4 md:hidden">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              as="li"
              delay={i * 0.06}
              className="flex gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-soft"
            >
              <div className="relative grid size-12 shrink-0 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                <s.Icon className="size-5" />
                <span className="absolute -bottom-1.5 -right-1.5 rounded-full grad-brand px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-bold">{s.title}</h3>
                <p className="mt-1 text-xs text-[color:var(--color-muted)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
