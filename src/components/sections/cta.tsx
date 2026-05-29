import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/utils";

export function CtaSection() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola GG Marketing, quiero impulsar mi marca.",
  )}`;
  return (
    <section className="relative bg-[color:var(--color-bg)] py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] grad-brand p-10 text-white shadow-soft-lg md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              · Contacto
            </Reveal>
            <Reveal as="h2" delay={0.09} className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              ¿Listo para que tu marca crezca en digital?
            </Reveal>
            <Reveal as="p" delay={0.18} className="mt-5 max-w-xl text-white/85">
              Cuéntanos sobre tu negocio. Te respondemos con una estrategia clara,
              contenido, campañas y un rango realista de inversión.
            </Reveal>
            <Reveal delay={0.27} className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-[color:var(--color-accent)] shadow-soft transition hover:-translate-y-0.5"
              >
                Impulsar mi marca
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white/85 transition hover:text-white"
              >
                <Mail className="size-4" /> {siteConfig.email}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
