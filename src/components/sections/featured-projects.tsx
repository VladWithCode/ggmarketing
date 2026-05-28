import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { listProjects } from "@/lib/projects";

export async function FeaturedProjects() {
  const projects = (await listProjects({ featuredOnly: true })).slice(0, 4);

  return (
    <section className="relative py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
                · Trabajo seleccionado
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Casos que <span className="text-gradient">construimos</span>.
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="link-underline inline-flex items-center gap-1 text-sm text-white/75 hover:text-white"
            >
              Ver portafolio completo <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/proyectos/${p.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)] via-[color:var(--color-bg)]/40 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-wider text-white/85 backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/65 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-[color:var(--color-accent)]/40 group-hover:bg-[color:var(--color-accent)]/15 group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm text-white/65">{p.shortDescription}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/65"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.results && p.results[0] && (
                    <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                      <div className="font-display text-2xl font-semibold text-[color:var(--color-accent)]">
                        {p.results[0].value}
                      </div>
                      <div className="text-xs text-white/55">{p.results[0].label}</div>
                    </div>
                  )}

                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/80 transition group-hover:text-white">
                    Ver caso
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
