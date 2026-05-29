import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/utils";
import { CloudShape } from "@/components/ui/cloud-shape";

export function CtaSection() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola GG Marketing, quiero impulsar mi marca.",
  )}`;
  return (
    <section className="relative bg-[color:var(--color-bg)] py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] grad-brand px-8 py-16 text-center text-white shadow-soft-lg md:px-16 md:py-24">
          {/* cloud system echoing the hero — bookends the page */}
          <CloudShape variant="puffy" fill="#ffffff" opacity={0.16} className="animate-cloud pointer-events-none absolute -left-10 top-6 w-64" style={{ animationDuration: "40s" }} />
          <CloudShape variant="wide" fill="#ffffff" opacity={0.14} className="animate-cloud-rev pointer-events-none absolute -right-10 bottom-4 w-72" style={{ animationDuration: "46s" }} />
          <CloudShape variant="small" fill="#ffffff" opacity={0.9} className="animate-cloud-bob pointer-events-none absolute left-[12%] bottom-10 w-14" />
          <CloudShape variant="small" fill="#ffffff" opacity={0.8} className="animate-cloud-bob pointer-events-none absolute right-[16%] top-12 w-12" style={{ animationDelay: "-3s" }} />
          <div aria-hidden className="absolute inset-0 opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <div className="relative mx-auto max-w-3xl">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              ¿Empezamos?
            </Reveal>
            <Reveal as="h2" delay={0.08} className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Llevemos tu marca hasta las nubes
            </Reveal>
            <Reveal as="p" delay={0.16} className="mx-auto mt-5 max-w-xl text-white/85">
              Cuéntanos sobre tu negocio. Te respondemos con una estrategia clara,
              contenido, campañas y un rango realista de inversión.
            </Reveal>
            <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-[color:var(--color-accent)] shadow-soft transition hover:-translate-y-0.5"
              >
                Impulsar mi marca
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Escribir por WhatsApp
              </a>
            </Reveal>
            <Reveal delay={0.3} className="mt-6">
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white">
                <Mail className="size-4" /> {siteConfig.email}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
