import { Reveal } from "@/components/ui/reveal";
import {
  Megaphone,
  Instagram,
  PenTool,
  Palette,
  Globe,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Item = { Icon: LucideIcon; title: string; desc: string };

const items: Item[] = [
  {
    Icon: Instagram,
    title: "Publicidad en redes sociales",
    desc: "Campañas Meta Ads en Facebook e Instagram segmentadas para llegar a clientes reales.",
  },
  {
    Icon: PenTool,
    title: "Gestión de contenido",
    desc: "Calendario, publicaciones, reels e historias con identidad propia que detienen el scroll.",
  },
  {
    Icon: Globe,
    title: "Páginas web y landing pages",
    desc: "Sitios rápidos y listos para SEO que convierten visitas en clientes.",
  },
  {
    Icon: Palette,
    title: "Branding digital",
    desc: "Logo, paleta, tipografía y guía de marca para verte profesional y memorable.",
  },
  {
    Icon: Megaphone,
    title: "Estrategia de campañas",
    desc: "Plan digital con objetivos claros, mensajes y embudos pensados para vender.",
  },
  {
    Icon: BarChart3,
    title: "Reportes y optimización",
    desc: "Medimos alcance, interacción y conversiones cada mes y ajustamos para mejorar.",
  },
];

export function ServicesGrid() {
  return (
    <section id="servicios" className="relative bg-white py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            ¿Qué ofrecemos para tu negocio?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Conoce nuestros <span className="text-gradient">servicios digitales</span>
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)]">
            Marketing digital, publicidad y desarrollo web pensados para que tu marca crezca
            con estrategia desde el día uno.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 0.06}
              className="card-hover group soft-card p-7 text-center"
            >
              <div className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-accent)]/12 to-[color:var(--color-accent-2)]/12 text-[color:var(--color-accent)] ring-1 ring-[color:var(--color-accent)]/15 transition-transform duration-500 group-hover:-translate-y-1">
                <s.Icon className="size-7" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
