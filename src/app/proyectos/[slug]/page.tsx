import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta";
import { getProjectBySlug, listProjects } from "@/lib/projects";

type Params = { slug: string };

export async function generateStaticParams() {
  const projects = await listProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProjectBySlug(slug);
  if (!p) return { title: "Proyecto no encontrado" };
  return {
    title: p.title,
    description: p.shortDescription,
    openGraph: { title: p.title, description: p.shortDescription, images: [p.heroImage] },
  };
}

export default async function ProyectoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = await getProjectBySlug(slug);
  if (!p) notFound();

  return (
    <>
      <article className="container-page pt-32 pb-16">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <ArrowLeft className="size-4" /> Volver a proyectos
        </Link>

        <header className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <Badge>{p.category}</Badge>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              {p.title}
            </h1>
            <p className="mt-5 max-w-xl text-white/65">{p.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {p.liveUrl && (
                <Button asChild variant="accent">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">
                    Ver en vivo <ExternalLink className="size-4" />
                  </a>
                </Button>
              )}
              {p.repoUrl && (
                <Button asChild variant="outline">
                  <a href={p.repoUrl} target="_blank" rel="noreferrer">
                    Repositorio <Github className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 text-sm">
            {p.clientName && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="text-[11px] uppercase tracking-wider text-white/45">Cliente</dt>
                <dd className="mt-1 font-medium">{p.clientName}</dd>
              </div>
            )}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] uppercase tracking-wider text-white/45">Categoría</dt>
              <dd className="mt-1 font-medium">{p.category}</dd>
            </div>
            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] uppercase tracking-wider text-white/45">Tecnologías</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </header>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={p.heroImage}
            alt={p.title}
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Problema
            </h2>
            <p className="mt-3 text-white/75">{p.shortDescription}</p>
          </section>
          <section>
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Solución
            </h2>
            <p className="mt-3 text-white/75">{p.fullDescription}</p>
          </section>
        </div>

        {p.services.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Módulos / Servicios
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.services.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </section>
        )}

        {p.results && p.results.length > 0 && (
          <section className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {p.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="font-display text-3xl font-semibold text-[color:var(--color-accent)]">
                  {r.value}
                </div>
                <div className="mt-1 text-sm text-white/60">{r.label}</div>
              </div>
            ))}
          </section>
        )}

        {p.galleryImages.length > 0 && (
          <section className="mt-16 grid gap-4 md:grid-cols-2">
            {p.galleryImages.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image src={src} alt={`${p.title} ${i + 1}`} fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </section>
        )}
      </article>

      <CtaSection />
    </>
  );
}
