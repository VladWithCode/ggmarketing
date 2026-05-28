import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Github, Instagram, Linkedin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para cotizar tu proyecto de software.",
};

export default function ContactoPage() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola SIBRA DGO, me interesa cotizar un proyecto.",
  )}`;
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]"
      >
        <div className="absolute left-1/2 top-0 size-[700px] -translate-x-1/2 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
      </div>

      <div className="container-page grid gap-12 pt-32 pb-24 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            · Contacto
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Hablemos de tu <span className="text-gradient">proyecto</span>.
          </h1>
          <p className="mt-5 max-w-md text-white/65">
            Respondemos en horas hábiles con un plan claro. Si necesitas algo urgente,
            escríbenos directamente por WhatsApp.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle className="size-4" />
                </span>
                <div>
                  <div className="font-medium">WhatsApp directo</div>
                  <div className="text-xs text-white/50">+{siteConfig.whatsapp}</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent)]">
                  <Mail className="size-4" />
                </span>
                <div>
                  <div className="font-medium">Correo</div>
                  <div className="text-xs text-white/50">{siteConfig.email}</div>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="grid size-10 place-items-center rounded-xl bg-[color:var(--color-accent-3)]/15 text-[color:var(--color-accent-3)]">
                <MapPin className="size-4" />
              </span>
              <div>
                <div className="font-medium">Durango, México</div>
                <div className="text-xs text-white/50">Trabajamos remoto en LATAM</div>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex gap-2">
            {[
              { href: siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
              { href: siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: siteConfig.social.github, Icon: Github, label: "GitHub" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/25 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[color:var(--color-accent)]/30 via-transparent to-[color:var(--color-accent-2)]/20 opacity-60 blur"
            />
            <div className="relative rounded-[2rem] border border-white/10 bg-[color:var(--color-bg-soft)]/80 p-6 backdrop-blur md:p-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
