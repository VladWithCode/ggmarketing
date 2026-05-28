import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/utils";

export function CtaSection() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola GG Marketing, quiero impulsar mi marca.",
  )}`;
  return (
    <section className="relative py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--color-bg-soft)] p-10 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 -top-32 size-[420px] rounded-full bg-[color:var(--color-accent)]/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -bottom-32 size-[380px] rounded-full bg-[color:var(--color-accent-2)]/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 dot-grid opacity-30 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]"
            />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
                · Contacto
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                ¿Listo para que tu marca{" "}
                <span className="text-gradient">crezca en redes</span>?
              </h2>
              <p className="mt-5 max-w-xl text-white/65">
                Cuéntanos sobre tu negocio. Te respondemos con una estrategia clara,
                contenido, campañas y un rango realista de inversión.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg" className="group">
                  <Link href="/contacto">
                    Impulsar mi marca
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={wa} target="_blank" rel="noreferrer">
                    Escribir por WhatsApp
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="size-4" /> {siteConfig.email}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
