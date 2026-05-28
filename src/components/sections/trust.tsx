"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Sparkles } from "lucide-react";

const pillars = [
  {
    Icon: Target,
    title: "Estrategia, no improvisación",
    desc: "Definimos objetivos, público y mensaje antes de publicar. Cada campaña tiene un para qué claro.",
  },
  {
    Icon: Sparkles,
    title: "Contenido que detiene el scroll",
    desc: "Diseño, copy y video pensados para tu marca. Publicaciones que la gente sí quiere ver y compartir.",
  },
  {
    Icon: TrendingUp,
    title: "Resultados medibles",
    desc: "Reportes claros de alcance, interacción y conversiones. Optimizamos sobre datos, no corazonadas.",
  },
];

const metrics = [
  { value: "Campañas con propósito", sub: "Cada anuncio nace de una estrategia, no de un impulso." },
  { value: "Equipo creativo en Durango", sub: "Comunicación directa, sin intermediarios ni fricción horaria." },
  { value: "Marcas creciendo en redes", sub: "No solo likes: comunidad, leads y ventas reales." },
];

export function Trust() {
  return (
    <section className="relative py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Por qué GG Marketing
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            No solo publicamos bonito.{" "}
            <span className="text-gradient">Hacemos crecer tu marca.</span>
          </h2>
          <p className="mt-5 text-white/65">
            Trabajamos para que cada peso invertido en marketing se traduzca en presencia,
            comunidad y ventas. Ese es el estándar.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[color:var(--color-accent)]">
                <p.Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.value} className="bg-[color:var(--color-bg)] p-7">
              <div className="font-display text-lg font-semibold tracking-tight">{m.value}</div>
              <div className="mt-2 text-sm text-white/55">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
