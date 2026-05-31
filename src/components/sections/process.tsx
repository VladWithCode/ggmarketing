import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CloudShape } from "@/components/ui/cloud-shape";
import { Search, PenLine, Megaphone, BarChart3, Rocket, type LucideIcon } from "lucide-react";

type Step = { n: string; title: string; desc: string; Icon: LucideIcon };

const steps: Step[] = [
  { n: "01", title: "Diagnóstico", desc: "Escuchamos. Analizamos tu marca, tu público y tus objetivos reales.", Icon: Search },
  { n: "02", title: "Estrategia y contenido", desc: "Definimos mensaje, calendario y creatividades antes de publicar.", Icon: PenLine },
  { n: "03", title: "Campañas", desc: "Publicamos y lanzamos anuncios segmentados para llegar a clientes.", Icon: Megaphone },
  { n: "04", title: "Optimización", desc: "Medimos métricas y ajustamos creatividades y segmentación.", Icon: BarChart3 },
  { n: "05", title: "Crecimiento", desc: "Reportes claros y acompañamiento continuo para escalar la marca.", Icon: Rocket },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-navy)] py-24 text-white">
      {/* cloud watermarks drifting on the night-sky */}
      <CloudShape variant="wide" fill="#ffffff" opacity={0.05} className="animate-cloud pointer-events-none absolute left-[-3%] top-12 w-72" />
      <CloudShape variant="puffy" fill="#ffffff" opacity={0.06} className="animate-cloud-rev pointer-events-none absolute right-[-2%] bottom-10 w-64" />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow tone="dark">Cómo trabajamos</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
Tu marca, paso a paso, <span className="text-gradient">hasta las nubes</span>
          </h2>
        </Reveal>

        {/* Desktop: ascending cloud trail */}
        <div className="mt-20 hidden md:block">
          <div className="relative">
            {/* dotted ascending path */}
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-44 w-full" aria-hidden>
              <path d="M40,170 C220,140 260,60 460,80 C640,98 700,30 960,30" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
            </svg>
            <ol className="relative grid grid-cols-5 items-end gap-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} as="li" delay={i * 0.08} className={["mt-[104px]", "mt-[78px]", "mt-[52px]", "mt-[26px]", "mt-0"][i]}>
                  <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                    <span className="font-display text-3xl font-extrabold text-white/15">{s.n}</span>
                    <div className="-mt-4 inline-flex size-11 items-center justify-center rounded-2xl grad-brand text-white shadow-soft">
                      <s.Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <ol className="mt-12 space-y-4 md:hidden">
          {steps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 0.06} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="relative grid size-12 shrink-0 place-items-center rounded-2xl grad-brand text-white">
                <s.Icon className="size-5" />
                <span className="absolute -bottom-1.5 -right-1.5 rounded-full bg-white px-1.5 py-0.5 text-[9px] font-bold text-[color:var(--color-navy)]">{s.n}</span>
              </div>
              <div>
                <h3 className="font-display text-base font-bold">{s.title}</h3>
                <p className="mt-1 text-xs text-white/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
