"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  Smartphone,
  Cog,
  BarChart3,
  Database,
  type LucideIcon,
} from "lucide-react";

type Item = { Icon: LucideIcon; title: string; desc: string; tone: string };

const items: Item[] = [
  {
    Icon: Code2,
    title: "Desarrollo web",
    desc: "Sitios y plataformas rápidas, accesibles y listas para SEO. Stack moderno, código mantenible.",
    tone: "from-[color:var(--color-accent)]/40 to-transparent",
  },
  {
    Icon: LayoutDashboard,
    title: "Sistemas administrativos",
    desc: "Sistemas a medida para gestionar clientes, inventarios, ventas y reportes de tu operación real.",
    tone: "from-[color:var(--color-accent-2)]/40 to-transparent",
  },
  {
    Icon: BarChart3,
    title: "Dashboards y reportes",
    desc: "Tableros interactivos con métricas en tiempo real para decidir con datos, no con corazonadas.",
    tone: "from-[color:var(--color-accent-3)]/40 to-transparent",
  },
  {
    Icon: Smartphone,
    title: "Apps móviles",
    desc: "Apps iOS y Android con sincronización offline, notificaciones y experiencia nativa fluida.",
    tone: "from-[color:var(--color-accent)]/40 to-transparent",
  },
  {
    Icon: Cog,
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas conectando tus herramientas y orquestando flujos confiables.",
    tone: "from-[color:var(--color-accent-2)]/40 to-transparent",
  },
  {
    Icon: Database,
    title: "Integración de bases de datos",
    desc: "Conectamos sistemas, migramos datos y construimos APIs sólidas que escalan con tu negocio.",
    tone: "from-[color:var(--color-accent-3)]/40 to-transparent",
  },
];

export function ServicesGrid() {
  return (
    <section id="servicios" className="relative py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Servicios
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Lo que hacemos por <span className="text-gradient">tu operación</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-white/60">
            Cada servicio se construye con foco en rendimiento, escalabilidad y mantenimiento
            desde el día uno.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((s) => (
            <motion.article
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, color-mix(in oklab, var(--color-accent) 50%, transparent), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[color:var(--color-accent)] transition-all duration-500 group-hover:border-[color:var(--color-accent)]/40 group-hover:bg-[color:var(--color-accent)]/10 group-hover:text-white">
                  <s.Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
