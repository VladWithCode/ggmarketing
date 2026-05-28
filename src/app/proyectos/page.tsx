import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { listProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Portafolio de campañas, marcas y sitios web creados por GG Marketing.",
};

export default async function ProyectosPage() {
  const projects = await listProjects();

  return (
    <>
      <section className="container-page pt-32 pb-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Portafolio
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Proyectos que hemos construido.
          </h1>
          <p className="mt-5 max-w-2xl text-white/65">
            Una muestra del trabajo real entregado a nuestros clientes.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.05}>
              <Link
                href={`/proyectos/${p.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-white/50">
                      {p.category}
                    </span>
                    <ArrowUpRight className="size-4 text-white/50 transition group-hover:text-white" />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-white/60">{p.shortDescription}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
