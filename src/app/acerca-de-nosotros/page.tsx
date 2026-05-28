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
      <section className="container-page pt-32 pb-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Nosotros
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Agencia de marketing digital en Durango.
          </h1>
          <p className="mt-6 max-w-2xl text-white/65">
            Somos GG Marketing. Creamos contenido, gestionamos redes, lanzamos campañas de
            publicidad y diseñamos presencia web para negocios que quieren crecer. Nos importa
            tu marca tanto como tus resultados.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/60">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
