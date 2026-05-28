import Link from "next/link";
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
        {/* Light CSS-only floating accents */}
        <div className="animate-float-slow absolute left-[14%] top-[24%] size-2 rounded-full bg-[color:var(--color-accent)]/70 shadow-[0_0_24px_6px_color-mix(in_oklab,var(--color-accent)_50%,transparent)]" />
        <div
          className="animate-float-slow absolute right-[16%] top-[34%] size-1.5 rounded-full bg-[color:var(--color-accent-3)]/70 shadow-[0_0_20px_5px_color-mix(in_oklab,var(--color-accent-3)_50%,transparent)]"
          style={{ animationDelay: "1.5s", animationDuration: "11s" }}
        />
        <div
          className="animate-float-slow absolute left-[28%] bottom-[20%] size-1.5 rounded-full bg-[color:var(--color-accent-2)]/60 shadow-[0_0_20px_5px_color-mix(in_oklab,var(--color-accent-2)_45%,transparent)]"
          style={{ animationDelay: "3s", animationDuration: "13s" }}
        />
      </div>

      <div className="container-page text-center">
        <div className="rise mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/75 backdrop-blur">
          <span className="relative grid size-2 place-items-center">
            <span className="absolute inset-0 animate-pulse-soft rounded-full bg-[color:var(--color-accent)]" />
            <span className="size-1 rounded-full bg-[color:var(--color-accent)]" />
          </span>
          <Sparkles className="size-3.5 text-[color:var(--color-accent)]" />
          Agencia de marketing digital · Durango, México
        </div>

        <h1
          className="rise mx-auto mt-7 max-w-5xl font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem]"
          style={{ animationDelay: "0.08s" }}
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
        </h1>

        <p
          className="rise mx-auto mt-7 max-w-2xl text-balance text-base text-white/65 md:text-lg"
          style={{ animationDelay: "0.18s" }}
        >
          En GG Marketing creamos contenido, gestionamos tus redes, lanzamos campañas
          de publicidad y diseñamos páginas web que conectan con tus clientes.
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.28s" }}
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
        </div>

        <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {badges.map(({ Icon, label }, i) => (
            <li
              key={label}
              className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 backdrop-blur"
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              <Icon className="size-4 text-[color:var(--color-accent)]" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
