import Link from "next/link";
import { Github, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import type { SiteSettings } from "@/lib/settings";

export function Footer({ settings }: { settings?: SiteSettings }) {
  const s = settings;
  const socials = [
    { href: s?.instagramUrl || siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
    { href: s?.facebookUrl || siteConfig.social.facebook, Icon: Facebook, label: "Facebook" },
    { href: s?.linkedinUrl || siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: s?.githubUrl || siteConfig.social.github, Icon: Github, label: "GitHub" },
  ].filter((x) => x.href);

  const email = s?.email || siteConfig.email;
  const phone = s?.phone;
  const address = s?.address || "Durango, México";
  const siteName = s?.siteName || siteConfig.name;

  return (
    <footer className="mt-32 border-t border-white/10 bg-[color:var(--color-bg-soft)]">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold">
              GG <span className="text-[color:var(--color-accent)]">Marketing</span>
            </h3>
            <p className="mt-3 max-w-md text-sm text-white/60">{siteConfig.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-white/65">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-[color:var(--color-accent)]" />
                <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
              </li>
              {phone && (
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-[color:var(--color-accent)]" />
                  <a href={`tel:${phone}`} className="hover:text-white">{phone}</a>
                </li>
              )}
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-[color:var(--color-accent)]" />
                <span>{address}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/10 p-2.5 text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Sitio</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
              <li><Link href="/acerca-de-nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/aviso-de-privacidad" className="hover:text-white">Aviso de privacidad</Link></li>
              <li><Link href="/terminos-y-condiciones" className="hover:text-white">Términos</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-white">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteName}. Todos los derechos reservados.</p>
          <p>Hecho con Next.js · Durango, México</p>
        </div>
      </div>
    </footer>
  );
}
