import { ArrowUpRight, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { realProjects, prettyDomain } from "@/lib/showcase";

// Gradient pairs cycle so each mockup looks distinct.
const grads = [
  "from-[#2f6bff] to-[#8b5cf6]",
  "from-[#8b5cf6] to-[#a855f7]",
  "from-[#2f6bff] to-[#22d3ee]",
  "from-[#f43f6b] to-[#fbbf24]",
  "from-[#0ea5e9] to-[#2f6bff]",
];

export function ShowcaseProjects() {
  return (
    <section id="proyectos" className="relative bg-white py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow index="03">Proyectos que hemos creado</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Páginas reales, <span className="text-gradient">en línea hoy</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[color:var(--color-muted)]">
            Sitios y apps que construimos y siguen funcionando para negocios reales.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realProjects.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 0.06}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white shadow-soft"
              >
                {/* browser mockup */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${grads[i % grads.length]}`} />
                  <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 bg-white/95 px-4 py-2.5">
                    <span className="size-2.5 rounded-full bg-[#f43f6b]" />
                    <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                    <span className="size-2.5 rounded-full bg-[#34a853]" />
                    <span className="ml-2 flex-1 truncate rounded-full bg-[color:var(--color-bg)] px-3 py-1 text-[11px] text-[color:var(--color-muted)]">
                      {prettyDomain(p.url)}
                    </span>
                  </div>
                  <div className="absolute inset-0 grid place-items-center px-6 pt-8 text-center">
                    <span className="font-display text-2xl font-extrabold text-white drop-shadow-sm md:text-3xl">
                      {p.name}
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-accent)] shadow-soft">
                    Proyecto real
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
                    {p.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-accent)]">
                    <Globe className="size-4" /> Ver proyecto
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
