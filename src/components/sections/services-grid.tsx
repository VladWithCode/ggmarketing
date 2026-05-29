import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import {
  Megaphone,
  Instagram,
  PenTool,
  Palette,
  Globe,
  BarChart3,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Item = { Icon: LucideIcon; title: string; desc: string };

// First item is the featured/hero service (big card).
const featured: Item = {
  Icon: Instagram,
  title: "Publicidad en redes sociales",
  desc: "Campañas Meta Ads en Facebook e Instagram, segmentadas y optimizadas para llegar a clientes reales y vender — no solo likes.",
};

const items: Item[] = [
  { Icon: PenTool, title: "Gestión de contenido", desc: "Calendario, reels e historias con identidad propia." },
  { Icon: Globe, title: "Páginas web y landings", desc: "Sitios rápidos, listos para SEO, que convierten." },
  { Icon: Palette, title: "Branding digital", desc: "Logo, paleta y guía de marca memorable." },
  { Icon: Megaphone, title: "Estrategia de campañas", desc: "Mensajes y embudos pensados para vender." },
  { Icon: BarChart3, title: "Reportes y optimización", desc: "Medimos y ajustamos cada mes sobre datos." },
];

export function ServicesGrid() {
  return (
    <section id="servicios" className="relative bg-white py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <SectionEyebrow index="01">¿Qué ofrecemos?</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Servicios digitales que <span className="text-gradient">mueven tu marca</span>
          </h2>
        </Reveal>

        {/* editorial asymmetric grid: featured spans 2 rows on lg */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Featured card */}
          <Reveal as="article" className="group relative overflow-hidden rounded-[2rem] grad-brand p-8 text-white shadow-soft-lg lg:row-span-2 lg:p-10">
            <div aria-hidden className="absolute -right-10 -top-10 size-48 rounded-full bg-white/10" />
            <div aria-hidden className="absolute -bottom-16 -left-10 size-56 rounded-full bg-white/10" />
            <div className="relative flex h-full flex-col">
              <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                Lo más solicitado
              </span>
              <div className="mt-8 inline-flex size-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30">
                <featured.Icon className="size-8" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold md:text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">{featured.desc}</p>
              <div className="mt-auto pt-8">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  Cómo lo hacemos <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Reveal>

          {/* Smaller cards */}
          {items.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 0.05}
              className="card-hover group soft-card p-6"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-accent)]/12 to-[color:var(--color-accent-2)]/12 text-[color:var(--color-accent)] ring-1 ring-[color:var(--color-accent)]/15 transition-transform duration-500 group-hover:-translate-y-1">
                <s.Icon className="size-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
