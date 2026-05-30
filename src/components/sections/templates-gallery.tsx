import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CloudShape } from "@/components/ui/cloud-shape";
import { templates, prettyDomain } from "@/lib/showcase";
import { siteConfig } from "@/lib/utils";

const grads = [
  "from-[#2f6bff] to-[#8b5cf6]",
  "from-[#8b5cf6] to-[#a855f7]",
  "from-[#f43f6b] to-[#fbbf24]",
  "from-[#0ea5e9] to-[#2f6bff]",
];

export function TemplatesGallery() {
  return (
    <section id="disenos" className="relative overflow-hidden bg-[color:var(--color-bg)] py-24">
      <CloudShape variant="wide" fill="#ffffff" opacity={0.6} className="animate-cloud pointer-events-none absolute left-[-4%] top-10 w-64" />
      <CloudShape variant="puffy" fill="#ffffff" opacity={0.5} className="animate-cloud-rev pointer-events-none absolute right-[-2%] top-24 w-56" />

      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Diseños disponibles para ti</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Demos listos para <span className="text-gradient">adaptar a tu marca</span>
          </h2>
          <p className="mt-4 text-[color:var(--color-muted)]">
            Explora diseños listos para adaptar con tu marca, tus colores, tus servicios y tus
            datos de contacto.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((t, i) => {
            const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              `Hola, me interesa adaptar el diseño ${t.name} para mi negocio.`,
            )}`;
            return (
              <Reveal key={t.url} delay={(i % 4) * 0.05}>
                <article className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white shadow-soft">
                  {/* mini browser preview */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${grads[i % grads.length]}`} />
                    <div className="absolute inset-x-0 top-0 flex items-center gap-1 bg-white/95 px-3 py-2">
                      <span className="size-2 rounded-full bg-[#f43f6b]" />
                      <span className="size-2 rounded-full bg-[#fbbf24]" />
                      <span className="size-2 rounded-full bg-[#34a853]" />
                      <span className="ml-1.5 flex-1 truncate text-[10px] text-[color:var(--color-muted)]">
                        {prettyDomain(t.url)}
                      </span>
                    </div>
                    <div className="absolute inset-0 grid place-items-center px-4 pt-6 text-center">
                      <span className="font-display text-lg font-extrabold text-white drop-shadow-sm">
                        {t.name}
                      </span>
                    </div>
                    <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[color:var(--color-accent-2)] shadow-soft">
                      Template adaptable
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
                      {t.category}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold">{t.name}</h3>
                    <p className="mt-1.5 flex-1 text-xs leading-relaxed text-[color:var(--color-muted)]">
                      {t.description}
                    </p>
                    <div className="mt-4 flex flex-col gap-2">
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[color:var(--color-accent)]/30 bg-white px-4 py-2 text-xs font-semibold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)]/5"
                      >
                        Ver demo <ArrowUpRight className="size-3.5" />
                      </a>
                      <a
                        href={wa}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full grad-brand px-4 py-2 text-xs font-semibold text-white transition hover:brightness-105"
                      >
                        <Sparkles className="size-3.5" /> Quiero este diseño
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
