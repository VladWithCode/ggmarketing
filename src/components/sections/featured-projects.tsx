import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { listProjects } from "@/lib/projects";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export async function FeaturedProjects() {
  const projects = (await listProjects({ featuredOnly: true })).slice(0, 3);

  return (
    <section className="relative bg-[color:var(--color-bg)] py-24">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow index="03">Casos de éxito</SectionEyebrow>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight md:text-5xl">
                Trabajo que <span className="text-gradient">habla por sí solo</span>
              </h2>
            </div>
            <Link href="/proyectos" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-accent)] hover:underline">
              Ver portafolio completo <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        {/* Alternating case-study rows */}
        <div className="mt-14 space-y-10">
          {projects.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={p.slug} delay={(i % 2) * 0.05}>
                <Link
                  href={`/proyectos/${p.slug}`}
                  className="card-hover group grid items-center gap-8 overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white p-5 shadow-soft md:grid-cols-2 md:p-6"
                >
                  {/* image */}
                  <div className={`relative aspect-[16/11] overflow-hidden rounded-3xl ${flipped ? "md:order-2" : ""}`}>
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] shadow-soft">
                      {p.category}
                    </span>
                  </div>

                  {/* text */}
                  <div className={`px-2 md:px-6 ${flipped ? "md:order-1" : ""}`}>
                    <span className="font-display text-5xl font-extrabold text-[color:var(--color-accent)]/12">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="-mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">{p.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)]">{p.shortDescription}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 5).map((t) => (
                        <span key={t} className="rounded-full bg-[color:var(--color-bg)] px-2.5 py-0.5 text-[11px] text-[color:var(--color-muted)]">{t}</span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-6">
                      {p.results && p.results[0] && (
                        <div>
                          <div className="font-display text-3xl font-extrabold text-gradient">{p.results[0].value}</div>
                          <div className="text-xs text-[color:var(--color-muted)]">{p.results[0].label}</div>
                        </div>
                      )}
                      <span className="ml-auto inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] transition-all duration-500 group-hover:rotate-[-45deg] group-hover:grad-brand group-hover:text-white">
                        <ArrowUpRight className="size-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
