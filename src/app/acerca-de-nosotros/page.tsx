import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Quiénes somos en GG Marketing: agencia de marketing digital y publicidad en Durango.",
};

const values = [
  { title: "Trabajo cercano", desc: "Equipo local y creativo. Hablamos contigo, no detrás de un ticket." },
  { title: "Contenido con identidad", desc: "Diseño y copy hechos para tu marca, no plantillas genéricas." },
  { title: "Resultados medibles", desc: "Cada campaña se entrega con métricas claras de alcance y conversión." },
  { title: "Estrategia primero", desc: "Definimos objetivos y público antes de publicar o pautar." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="container-page pt-32 pb-16 text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full grad-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft">
            #OptimizarOMorir
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Agencia de <span className="text-gradient">marketing digital</span> en Durango
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[color:var(--color-muted)]">
            Somos un equipo creativo que combina estrategia, diseño, publicidad y desarrollo
            web para ayudar a marcas a crecer en digital. Nos importa tu marca tanto como tus
            resultados.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="card-hover h-full soft-card p-6">
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
