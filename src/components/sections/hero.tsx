"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LayoutDashboard, Smartphone, Workflow, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "@/components/sections/hero-mockup";

const badges = [
  { Icon: Globe, label: "Web apps" },
  { Icon: LayoutDashboard, label: "Dashboards" },
  { Icon: Workflow, label: "Automatización" },
  { Icon: Smartphone, label: "Apps móviles" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 line-grid opacity-[0.35] [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]" />
        <div className="orb left-[10%] top-[5%] size-[420px] bg-[color:var(--color-accent)]/40" />
        <div className="orb right-[5%] top-[15%] size-[360px] bg-[color:var(--color-accent-2)]/35" />
        <div className="orb left-1/2 top-[60%] size-[520px] -translate-x-1/2 bg-[color:var(--color-accent-3)]/20" />
      </div>

      <div className="container-page text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/75 backdrop-blur"
        >
          <span className="relative grid size-2 place-items-center">
            <span className="absolute inset-0 animate-pulse-soft rounded-full bg-[color:var(--color-accent)]" />
            <span className="size-1 rounded-full bg-[color:var(--color-accent)]" />
          </span>
          <Sparkles className="size-3.5 text-[color:var(--color-accent)]" />
          Estudio de software · Durango, México
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-5xl font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          <span className="text-gradient">Construimos software</span>
          <br />
          <span className="text-white/90">que convierte ideas</span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10">en sistemas reales.</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 h-3 -skew-x-6 rounded-sm bg-[color:var(--color-accent)]/30 md:bottom-2 md:h-4"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mx-auto mt-7 max-w-2xl text-balance text-base text-white/65 md:text-lg"
        >
          Diseñamos y desarrollamos páginas web, sistemas administrativos, dashboards,
          apps y automatizaciones para negocios que quieren operar mejor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" variant="accent" className="group">
            <Link href="/contacto">
              Cotizar proyecto
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/proyectos">Ver proyectos</Link>
          </Button>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
          }}
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {badges.map(({ Icon, label }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 backdrop-blur"
            >
              <Icon className="size-3.5 text-[color:var(--color-accent)]" />
              {label}
            </motion.li>
          ))}
        </motion.ul>

        <HeroMockup />
      </div>
    </section>
  );
}
