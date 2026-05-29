import Link from "next/link";
import { ArrowRight, Instagram, Facebook, MessageCircle, Search, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clouds } from "@/components/sections/clouds";
import { RotatingWords } from "@/components/sections/rotating-words";
import { WaveDivider } from "@/components/ui/wave-divider";

// Floating "3D-ish" glass social objects (midground layer).
const floats = [
  { Icon: Instagram, grad: "from-[#f9508a] to-[#fbbf24]", pos: "left-[6%] top-[26%]", dur: "8s", delay: "0s", size: "size-16 md:size-20" },
  { Icon: Facebook, grad: "from-[#2f6bff] to-[#1e3a8a]", pos: "right-[8%] top-[20%]", dur: "10s", delay: "1.2s", size: "size-14 md:size-20" },
  { Icon: Search, grad: "from-[#34a853] to-[#2f6bff]", pos: "left-[12%] bottom-[20%]", dur: "11s", delay: "0.6s", size: "size-12 md:size-16" },
  { Icon: MessageCircle, grad: "from-[#25D366] to-[#0f9d58]", pos: "right-[12%] bottom-[24%]", dur: "9s", delay: "2s", size: "size-14 md:size-18" },
  { Icon: Megaphone, grad: "from-[#8b5cf6] to-[#a855f7]", pos: "right-[26%] top-[46%]", dur: "12s", delay: "1.6s", size: "size-12 md:size-14" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-24">
      {/* ---- Layer 1: sky + mountains ---- */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfe1ff] via-[#e8f0ff] to-[#eef4ff]" />
        <Clouds />
        {/* Mountain silhouettes */}
        <svg
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-[46%] w-full"
        >
          <path d="M0,420 L0,250 L260,90 L470,260 L640,140 L860,300 L1040,170 L1240,290 L1440,180 L1440,420 Z" fill="#bcd0ff" opacity="0.55" />
          <path d="M0,420 L0,300 L220,170 L430,320 L660,210 L900,350 L1130,250 L1440,330 L1440,420 Z" fill="#9bb8ff" opacity="0.6" />
          <path d="M0,420 L0,360 L300,250 L560,360 L820,290 L1100,380 L1440,310 L1440,420 Z" fill="#7c9dff" opacity="0.55" />
        </svg>
      </div>

      {/* ---- Layer 2: floating social objects ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {floats.map(({ Icon, grad, pos, dur, delay, size }, i) => (
          <div
            key={i}
            className={`animate-float-slow absolute ${pos} ${size} grid place-items-center rounded-[28%] bg-gradient-to-br ${grad} text-white shadow-soft-lg ring-1 ring-white/40`}
            style={{ animationDuration: dur, animationDelay: delay }}
          >
            <Icon className="size-1/2" />
          </div>
        ))}
      </div>

      {/* ---- Layer 3: content ---- */}
      <div className="container-page relative text-center">
        <div className="rise mx-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent)]/20 bg-white/80 px-4 py-1.5 text-xs font-medium text-[color:var(--color-accent)] backdrop-blur">
          <span className="relative grid size-2 place-items-center">
            <span className="absolute inset-0 animate-pulse-soft rounded-full bg-[color:var(--color-accent)]" />
            <span className="size-1 rounded-full bg-[color:var(--color-accent)]" />
          </span>
          Agencia de marketing digital · Durango, México
        </div>

        <h1
          className="rise mx-auto mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.08s" }}
        >
          <RotatingWords
            words={["Marketing Digital", "Desarrollo Web", "Publicidad en Redes", "Branding Digital"]}
            className="w-full"
          />
        </h1>

        <p
          className="rise mx-auto mt-6 max-w-2xl text-balance text-base text-[color:var(--color-muted)] md:text-lg"
          style={{ animationDelay: "0.18s" }}
        >
          Creamos campañas, contenido y sitios web que ayudan a tu marca a verse mejor,
          conectar con clientes y crecer en digital.
        </p>

        <div
          className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.28s" }}
        >
          <Button asChild size="lg" variant="accent" className="group">
            <Link href="/contacto">
              Impulsar mi marca
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/servicios">Ver servicios</Link>
          </Button>
        </div>
      </div>

      {/* ---- Bottom wave into white services section ---- */}
      <WaveDivider fill="#ffffff" className="absolute inset-x-0 bottom-0 -z-0" />
    </section>
  );
}
