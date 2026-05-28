import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Quiénes somos en SIBRA DGO: equipo de software local en Durango.",
};

const values = [
  { title: "Trabajo cercano", desc: "Equipo local. Hablamos contigo, no detrás de un ticket." },
  { title: "Código mantenible", desc: "Construimos para durar: pruebas, claridad y documentación." },
  { title: "Resultados medibles", desc: "Cada proyecto se entrega con métricas claras de éxito." },
  { title: "Tecnología moderna", desc: "Stack actual, ágil y compatible con tu equipo." },
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
            Equipo de software en Durango.
          </h1>
          <p className="mt-6 max-w-2xl text-white/65">
            Somos SIBRA DGO. Diseñamos y desarrollamos software a medida para negocios,
            instituciones y proyectos reales. Nos importa la calidad del código tanto como
            el resultado para el cliente.
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
