import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Clouds } from "@/components/sections/clouds";
import { WaveDivider } from "@/components/ui/wave-divider";
import { ShowcaseProjects } from "@/components/sections/showcase-projects";
import { TemplatesGallery } from "@/components/sections/templates-gallery";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Proyectos y diseños",
  description:
    "Proyectos reales creados por GG Marketing y diseños demo listos para adaptar a tu marca.",
};

export default async function ProyectosPage() {
  const s = await getSettings();
  const wa = `https://wa.me/${s.whatsappNumber}?text=${encodeURIComponent(
    "Hola, vi sus proyectos y quiero adaptar un diseño para mi negocio.",
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#cfe1ff] to-[#eef4ff] pt-32 pb-24">
        <Clouds density="soft" />
        <div className="container-page relative text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[color:var(--color-accent)] shadow-soft backdrop-blur">
              Portafolio · GG Marketing
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Proyectos y diseños listos para{" "}
              <span className="text-gradient">impulsar tu marca</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[color:var(--color-muted)]">
              Explora trabajos reales y demos que podemos adaptar con tu identidad, servicios
              y objetivos.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full grad-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
              >
                Ver proyectos reales
              </a>
              <a
                href="#disenos"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent)]/30 bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)]/5"
              >
                Ver diseños disponibles
              </a>
            </div>
          </Reveal>
        </div>
        <WaveDivider fill="#ffffff" className="absolute inset-x-0 bottom-0" />
      </section>

      <ShowcaseProjects />
      <TemplatesGallery />

      {/* Final CTA */}
      <section className="relative bg-[color:var(--color-bg)] py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2.5rem] grad-brand px-8 py-16 text-center text-white shadow-soft-lg md:px-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                ¿Ya viste un diseño que te gustó?
              </h2>
              <p className="mt-4 text-white/85">
                Lo adaptamos a tu negocio con tu marca, colores, servicios y datos reales.
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-[color:var(--color-accent)] shadow-soft transition hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" /> Quiero adaptar un diseño
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
