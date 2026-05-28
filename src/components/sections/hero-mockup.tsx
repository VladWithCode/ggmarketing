"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, TrendingUp, Code2 } from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative mx-auto mt-20 w-full max-w-5xl">
      {/* Stacked glow behind mockup */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 -top-10 bottom-0 rounded-[2.5rem] bg-gradient-to-b from-[color:var(--color-accent)]/30 via-[color:var(--color-accent-2)]/15 to-transparent blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[color:var(--color-surface)]/80 backdrop-blur"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
          <span className="size-2.5 rounded-full bg-red-400/60" />
          <span className="size-2.5 rounded-full bg-yellow-400/60" />
          <span className="size-2.5 rounded-full bg-green-400/60" />
          <span className="ml-4 text-[11px] text-white/40">sibradgo.com/admin</span>
        </div>

        {/* Dashboard body */}
        <div className="grid gap-4 p-5 md:grid-cols-[200px_1fr] md:p-6">
          {/* Sidebar */}
          <aside className="hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 md:block">
            <div className="text-[10px] uppercase tracking-wider text-white/40">Operación</div>
            <ul className="mt-3 space-y-1.5 text-xs">
              {["Resumen", "Clientes", "Proyectos", "Reportes", "Equipo"].map((l, i) => (
                <li
                  key={l}
                  className={
                    i === 0
                      ? "rounded-md bg-[color:var(--color-accent)]/15 px-2 py-1.5 text-white"
                      : "px-2 py-1.5 text-white/55"
                  }
                >
                  {l}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                { Icon: TrendingUp, label: "Ingresos", value: "+24%", color: "text-emerald-300" },
                { Icon: Activity, label: "Operaciones", value: "1,284", color: "text-[color:var(--color-accent)]" },
                { Icon: CheckCircle2, label: "Completadas", value: "97%", color: "text-[color:var(--color-accent-3)]" },
              ].map((c) => (
                <div key={c.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">{c.label}</span>
                    <c.Icon className={`size-3.5 ${c.color}`} />
                  </div>
                  <div className="mt-2 font-display text-xl font-semibold">{c.value}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/40">
                <span>Actividad últimos 30 días</span>
                <span className="text-[color:var(--color-accent)]">Live</span>
              </div>
              <svg viewBox="0 0 400 110" className="mt-3 h-24 w-full">
                <defs>
                  <linearGradient id="hroFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#7c8cff" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#7c8cff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 80 C 40 60, 60 90, 90 70 S 140 30, 180 50 S 240 90, 280 55 S 340 20, 400 35 L 400 110 L 0 110 Z"
                  fill="url(#hroFill)"
                />
                <path
                  d="M0 80 C 40 60, 60 90, 90 70 S 140 30, 180 50 S 240 90, 280 55 S 340 20, 400 35"
                  fill="none"
                  stroke="#7c8cff"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div className="text-[10px] uppercase tracking-wider text-white/40">Sprint actual</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-2)]" />
                  </div>
                  <span className="text-[11px] text-white/60">72%</span>
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div className="text-[10px] uppercase tracking-wider text-white/40">Deploy</div>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-emerald-300">
                  <span className="size-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                  Producción · main
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating code card */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-6 bottom-6 hidden w-64 rotate-[-3deg] rounded-2xl border border-white/10 bg-[color:var(--color-bg)]/90 p-4 shadow-2xl backdrop-blur md:block lg:-left-12 animate-float"
      >
        <div className="flex items-center gap-2 text-[10px] text-white/40">
          <Code2 className="size-3.5 text-[color:var(--color-accent)]" />
          deploy.ts
        </div>
        <pre className="mt-2 overflow-hidden text-[11px] leading-relaxed text-white/85">
{`async function ship() {
  const result = await build();
  return deploy(result);
}`}
        </pre>
      </motion.div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-4 top-20 hidden w-60 rotate-[3deg] rounded-2xl border border-white/10 bg-[color:var(--color-bg)]/90 p-4 shadow-2xl backdrop-blur md:block lg:-right-10"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
            <CheckCircle2 className="size-4" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium">Build exitoso</div>
            <div className="text-[10px] text-white/45">Hace 12 segundos</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
