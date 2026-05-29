import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { listProjects } from "@/lib/projects";

export async function FeaturedProjects() {
  const projects = (await listProjects({ featuredOnly: true })).slice(0, 4);

  return (
    <section className="relative bg-[color:var(--color-bg)] py-24">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
                · Algunos de nuestros clientes
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Casos que <span className="text-gradient">construimos</span>
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
            >
              Ver portafolio completo <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/proyectos/${p.slug}`}
                className="card-hover group block overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] shadow-soft">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] transition-all duration-500 group-hover:rotate-[-45deg] group-hover:grad-brand group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm text-[color:var(--color-muted)]">{p.shortDescription}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[color:var(--color-bg)] px-2.5 py-0.5 text-[11px] text-[color:var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.results && p.results[0] && (
                    <div className="mt-6 flex items-center gap-3 border-t border-[color:var(--color-border)] pt-5">
                      <div className="font-display text-2xl font-bold text-[color:var(--color-accent)]">
                        {p.results[0].value}
                      </div>
                      <div className="text-xs text-[color:var(--color-muted)]">{p.results[0].label}</div>
                    </div>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
