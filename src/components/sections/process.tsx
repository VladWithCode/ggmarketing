"use client";

import { motion } from "framer-motion";
import { Search, PenLine, Code2, ShieldCheck, Rocket, type LucideIcon } from "lucide-react";

type Step = { n: string; title: string; desc: string; Icon: LucideIcon };

const steps: Step[] = [
  { n: "01", title: "Diagnóstico", desc: "Escuchamos. Mapeamos tu operación, tus metas y los cuellos de botella reales.", Icon: Search },
  { n: "02", title: "Diseño de solución", desc: "Definimos arquitectura, flujos y experiencia. Documentamos antes de codificar.", Icon: PenLine },
  { n: "03", title: "Desarrollo", desc: "Construimos en sprints cortos, con entregas visibles cada semana.", Icon: Code2 },
  { n: "04", title: "Pruebas", desc: "Validamos con datos y usuarios reales antes de cada lanzamiento.", Icon: ShieldCheck },
  { n: "05", title: "Entrega y soporte", desc: "Despliegue, capacitación y acompañamiento post-lanzamiento.", Icon: Rocket },
];

export function Process() {
  return (
    <section className="relative py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Proceso
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Cómo <span className="text-gradient">trabajamos</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-white/60">
            Un proceso simple, transparente y enfocado en resultados. Sin promesas vacías.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="mt-20 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ol className="relative grid grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="relative mx-auto grid size-14 place-items-center rounded-full border border-white/10 bg-[color:var(--color-bg-soft)] text-[color:var(--color-accent)]">
                    <s.Icon className="size-5" />
                    <span className="absolute -bottom-2 -right-2 rounded-full bg-[color:var(--color-accent)] px-1.5 py-0.5 text-[10px] font-semibold text-black">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">{s.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile timeline */}
        <ol className="mt-12 space-y-5 md:hidden">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="relative grid size-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-[color:var(--color-accent)]">
                <s.Icon className="size-5" />
                <span className="absolute -bottom-1.5 -right-1.5 rounded-full bg-[color:var(--color-accent)] px-1.5 py-0.5 text-[9px] font-semibold text-black">
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-white/60">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
