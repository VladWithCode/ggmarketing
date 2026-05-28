"use client";

import { motion } from "framer-motion";
import { Gauge, Layers, Wrench } from "lucide-react";

const pillars = [
  {
    Icon: Gauge,
    title: "Rendimiento desde el día uno",
    desc: "Optimizamos carga, base de datos y experiencia para que el sistema vuele incluso con miles de registros.",
  },
  {
    Icon: Layers,
    title: "Pensado para escalar",
    desc: "Arquitectura modular y código limpio. Que sumar usuarios o módulos no implique empezar de cero.",
  },
  {
    Icon: Wrench,
    title: "Mantenimiento real",
    desc: "Documentación clara y pruebas. Tú o tu equipo pueden seguir trabajando el proyecto cuando lo necesiten.",
  },
];

const metrics = [
  { value: "Software hecho a la medida", sub: "Cada proyecto se construye desde sus necesidades, no de un template." },
  { value: "Equipo local en Durango", sub: "Comunicación directa, sin intermediarios ni fricción horaria." },
  { value: "Sistemas en operación real", sub: "No demos bonitos: herramientas que se usan todos los días." },
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
            · Por qué SIBRA
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            No solo diseñamos bonito.{" "}
            <span className="text-gradient">Construimos sistemas útiles.</span>
          </h2>
          <p className="mt-5 text-white/65">
            Trabajamos para que el software resuelva el problema real, hoy y dentro de tres
            años. Ese es el estándar.
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
