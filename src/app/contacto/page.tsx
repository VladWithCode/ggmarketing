import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { getSettings } from "@/lib/settings";
import { Clouds } from "@/components/sections/clouds";
import { CloudBullet } from "@/components/ui/cloud-shape";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para impulsar tu marca con marketing digital y publicidad.",
};

export default async function ContactoPage() {
  const s = await getSettings();
  const wa = `https://wa.me/${s.whatsappNumber}?text=${encodeURIComponent(
    "Hola GG Marketing, quiero impulsar mi marca.",
  )}`;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#dcebff] to-[color:var(--color-bg)]">
      {/* cloudscape + soft blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh]">
        <Clouds density="soft" className="opacity-80" />
        <div className="absolute left-[12%] top-24 size-72 rounded-full bg-[color:var(--color-accent)]/12 blur-2xl" />
        <div className="absolute right-[10%] top-10 size-72 rounded-full bg-[color:var(--color-accent-2)]/12 blur-2xl" />
      </div>

      <div className="container-page grid gap-12 pt-32 pb-24 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            <CloudBullet /> Contacto
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Hablemos de tu <span className="text-gradient">marca</span>
          </h1>
          <p className="mt-5 max-w-md text-[color:var(--color-muted)]">
            Respondemos en horas hábiles con una estrategia clara. Si necesitas algo urgente,
            escríbenos directamente por WhatsApp.
          </p>

          {/* flat illustration */}
          <svg viewBox="0 0 320 180" className="mt-8 w-full max-w-sm" aria-hidden>
            <rect x="20" y="30" width="180" height="120" rx="16" fill="#ffffff" stroke="#dde6f7" />
            <rect x="40" y="55" width="120" height="10" rx="5" fill="#2f6bff" opacity="0.8" />
            <rect x="40" y="78" width="140" height="8" rx="4" fill="#dde6f7" />
            <rect x="40" y="96" width="100" height="8" rx="4" fill="#dde6f7" />
            <rect x="40" y="118" width="70" height="20" rx="10" fill="#8b5cf6" />
            <circle cx="250" cy="70" r="34" fill="#8b5cf6" opacity="0.9" />
            <rect x="226" y="104" width="48" height="56" rx="18" fill="#2f6bff" />
          </svg>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a href={wa} target="_blank" rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-4 shadow-soft transition hover:-translate-y-0.5">
                <span className="grid size-10 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle className="size-4" />
                </span>
                <div>
                  <div className="font-semibold">WhatsApp directo</div>
                  <div className="text-xs text-[color:var(--color-muted)]">+{s.whatsappNumber}</div>
                </div>
              </a>
            </li>
            <li>
              <a href={`mailto:${s.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-4 shadow-soft transition hover:-translate-y-0.5">
                <span className="grid size-10 place-items-center rounded-xl bg-[color:var(--color-accent)]/12 text-[color:var(--color-accent)]">
                  <Mail className="size-4" />
                </span>
                <div>
                  <div className="font-semibold">Correo</div>
                  <div className="text-xs text-[color:var(--color-muted)]">{s.email}</div>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-4 shadow-soft">
              <span className="grid size-10 place-items-center rounded-xl bg-[color:var(--color-accent-3)]/12 text-[color:var(--color-accent-3)]">
                <MapPin className="size-4" />
              </span>
              <div>
                <div className="font-semibold">{s.address || "Durango, México"}</div>
                <div className="text-xs text-[color:var(--color-muted)]">Trabajamos remoto en LATAM</div>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex gap-2">
            {[
              { href: s.instagramUrl, Icon: Instagram, label: "Instagram" },
              { href: s.facebookUrl, Icon: Facebook, label: "Facebook" },
              { href: s.linkedinUrl, Icon: Linkedin, label: "LinkedIn" },
            ].filter((x) => x.href).map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)] shadow-soft transition hover:text-[color:var(--color-accent)]">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="soft-card p-6 shadow-soft-lg md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
