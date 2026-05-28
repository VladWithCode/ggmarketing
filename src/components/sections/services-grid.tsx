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

type Item = { Icon: LucideIcon; title: string; desc: string; tone: string };

const items: Item[] = [
  {
    Icon: Instagram,
    title: "Gestión de redes sociales",
    desc: "Administramos tus perfiles con calendario de contenido, publicaciones constantes y comunidad activa.",
    tone: "from-[color:var(--color-accent)]/40 to-transparent",
  },
  {
    Icon: Megaphone,
    title: "Publicidad y campañas Meta Ads",
    desc: "Anuncios en Facebook e Instagram segmentados para llegar a clientes reales y generar resultados.",
    tone: "from-[color:var(--color-accent-2)]/40 to-transparent",
  },
  {
    Icon: PenTool,
    title: "Diseño de contenido",
    desc: "Publicaciones, reels, historias y video con identidad propia que detienen el scroll y conectan.",
    tone: "from-[color:var(--color-accent-3)]/40 to-transparent",
  },
  {
    Icon: Palette,
    title: "Branding e identidad visual",
    desc: "Logo, paleta, tipografía y guía de marca para que tu negocio se vea profesional y memorable.",
    tone: "from-[color:var(--color-accent)]/40 to-transparent",
  },
  {
    Icon: Globe,
    title: "Páginas web y landing pages",
    desc: "Sitios rápidos y listos para SEO que convierten visitas en clientes. Soluciones web complementarias.",
    tone: "from-[color:var(--color-accent-2)]/40 to-transparent",
  },
  {
    Icon: BarChart3,
    title: "Estrategia, reportes y optimización",
    desc: "Plan digital con objetivos claros y reportes mensuales de alcance, interacción y conversiones.",
    tone: "from-[color:var(--color-accent-3)]/40 to-transparent",
  },
];

export function ServicesGrid() {
  return (
    <section id="servicios" className="relative py-28">
      <div className="container-page">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Servicios
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Lo que hacemos por <span className="text-gradient">tu marca</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-white/60">
            Marketing digital, publicidad y presencia web pensados para que tu negocio crezca
            con estrategia desde el día uno.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 0.06}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, color-mix(in oklab, var(--color-accent) 50%, transparent), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[color:var(--color-accent)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:border-[color:var(--color-accent)]/40 group-hover:bg-[color:var(--color-accent)]/10 group-hover:text-white">
                  <s.Icon className="size-5 transition-transform duration-500 group-hover:-rotate-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
