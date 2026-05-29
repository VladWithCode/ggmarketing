import Link from "next/link";
import { ArrowRight, Instagram, Facebook, MessageCircle, Search, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clouds } from "@/components/sections/clouds";
import { WaveDivider } from "@/components/ui/wave-divider";
import { CloudShape, CloudBullet } from "@/components/ui/cloud-shape";

// Floating "3D-ish" glass social objects (midground layer).
const floats = [
  { Icon: Instagram, grad: "from-[#f9508a] to-[#fbbf24]", pos: "left-[7%] top-[30%]", dur: "8s", delay: "0s", size: "size-14 md:size-20", rot: "-rotate-6" },
  { Icon: Facebook, grad: "from-[#2f6bff] to-[#1e3a8a]", pos: "right-[9%] top-[24%]", dur: "10s", delay: "1.2s", size: "size-12 md:size-20", rot: "rotate-6" },
  { Icon: Search, grad: "from-[#34a853] to-[#2f6bff]", pos: "left-[13%] bottom-[24%]", dur: "11s", delay: "0.6s", size: "size-11 md:size-16", rot: "rotate-3" },
  { Icon: MessageCircle, grad: "from-[#25D366] to-[#0f9d58]", pos: "right-[13%] bottom-[28%]", dur: "9s", delay: "2s", size: "size-12 md:size-16", rot: "-rotate-3" },
  { Icon: Megaphone, grad: "from-[#8b5cf6] to-[#a855f7]", pos: "right-[28%] top-[40%]", dur: "12s", delay: "1.6s", size: "size-10 md:size-14", rot: "rotate-6" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-24">
      {/* ---- Layer 1: sky + mountains ---- */}
      <div aria-hidden className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-[#bcd6ff] via-[#dcebff] to-[#eef4ff]" />
        <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[44%] w-full">
          <path d="M0,420 L0,250 L260,90 L470,260 L640,140 L860,300 L1040,170 L1240,290 L1440,180 L1440,420 Z" fill="#b6cdff" opacity="0.5" />
          <path d="M0,420 L0,300 L220,170 L430,320 L660,210 L900,350 L1130,250 L1440,330 L1440,420 Z" fill="#93b3ff" opacity="0.55" />
          <path d="M0,420 L0,360 L300,250 L560,360 L820,290 L1100,380 L1440,310 L1440,420 Z" fill="#7396ff" opacity="0.5" />
        </svg>
      </div>

      {/* ---- Layer 2: dense cloudscape ---- */}
      <Clouds className="-z-20" density="full" />

      {/* ---- Layer 3: big soft cloud + spotlight behind content ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid place-items-center">
        <div className="animate-spotlight size-[80vw] max-w-[820px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0)_62%)]" />
        <CloudShape
          variant="puffy"
          fill="#ffffff"
          className="animate-cloud-breathe absolute top-1/2 left-1/2 w-[120%] max-w-[1100px] -translate-x-1/2 -translate-y-[58%] drop-shadow-[0_40px_60px_rgba(47,107,255,0.12)] md:w-[78%]"
        />
      </div>

      {/* ---- Floating social objects ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {floats.map(({ Icon, grad, pos, dur, delay, size, rot }, i) => (
          <div
            key={i}
            className={`animate-float-slow absolute ${pos} ${size} ${rot} grid place-items-center rounded-[28%] bg-gradient-to-br ${grad} text-white shadow-soft-lg ring-1 ring-white/50`}
            style={{ animationDuration: dur, animationDelay: delay }}
          >
            <Icon className="size-1/2" />
          </div>
        ))}
      </div>

      {/* ---- Content ---- */}
      <div className="container-page relative text-center">
        <div className="rise mx-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent)]/20 bg-white/85 px-4 py-1.5 text-xs font-semibold text-[color:var(--color-accent)] shadow-soft backdrop-blur">
          <CloudBullet className="text-[color:var(--color-accent)]" />
          Agencia creativa de marketing · Durango, México
        </div>

        <h1 className="rise mx-auto mt-7 max-w-4xl font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl" style={{ animationDelay: "0.08s" }}>
          <span className="block text-[color:var(--color-navy)]">Hacemos crecer tu marca con</span>
          <span className="text-gradient">Marketing Digital</span>
        </h1>

        <p className="rise mx-auto mt-6 max-w-2xl text-balance text-base text-[color:var(--color-muted)] md:text-lg" style={{ animationDelay: "0.18s" }}>
          Creamos campañas, contenido y sitios web que ayudan a tu marca a verse mejor,
          conectar con clientes y crecer en digital.
        </p>

        <div className="rise mt-9 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.28s" }}>
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

      {/* ---- Foreground clouds overlapping the wave ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-40">
        <CloudShape variant="wide" fill="#ffffff" className="animate-cloud absolute bottom-6 left-[8%] w-[26%]" style={{ animationDuration: "40s" }} />
        <CloudShape variant="puffy" fill="#ffffff" className="animate-cloud-rev absolute bottom-10 right-[10%] w-[22%]" style={{ animationDuration: "46s" }} />
      </div>

      <WaveDivider fill="#ffffff" className="absolute inset-x-0 bottom-0 -z-0" />
    </section>
  );
}
