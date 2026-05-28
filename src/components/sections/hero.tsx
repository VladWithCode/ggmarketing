"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Megaphone, Instagram, PenTool, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clouds } from "@/components/sections/clouds";

const badges = [
  { Icon: Instagram, label: "Redes sociales" },
  { Icon: Megaphone, label: "Campañas Meta Ads" },
  { Icon: PenTool, label: "Contenido y branding" },
  { Icon: Globe, label: "Páginas web" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28">
      {/* Background: clouds + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 line-grid opacity-[0.3] [mask-image:radial-gradient(60%_50%_at_50%_25%,black,transparent)]" />
        <Clouds className="[mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]" />
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
          Agencia de marketing digital · Durango, México
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-5xl font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem]"
        >
          <span className="text-gradient">Impulsamos tu marca</span>
          <br />
          <span className="text-white/90">con estrategia y</span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10">campañas digitales.</span>
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
          En GG Marketing creamos contenido, gestionamos tus redes, lanzamos campañas
          de publicidad y diseñamos páginas web que conectan con tus clientes.
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
            <Link href="/servicios">Ver paquetes</Link>
          </Button>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
          }}
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2"
        >
          {badges.map(({ Icon, label }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 backdrop-blur"
            >
              <Icon className="size-4 text-[color:var(--color-accent)]" />
              {label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
