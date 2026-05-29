import Link from "next/link";
import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import type { SiteSettings } from "@/lib/settings";
import { WaveDivider } from "@/components/ui/wave-divider";
import { CloudShape } from "@/components/ui/cloud-shape";
import { BrandMark } from "@/components/ui/brand-mark";

export function Footer({ settings }: { settings?: SiteSettings }) {
  const s = settings;
  const wa = `https://wa.me/${siteConfig.whatsapp}`;
  const socials = [
    { href: s?.instagramUrl || siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
    { href: s?.facebookUrl || siteConfig.social.facebook, Icon: Facebook, label: "Facebook" },
    { href: wa, Icon: MessageCircle, label: "WhatsApp" },
    { href: s?.linkedinUrl || siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
  ].filter((x) => x.href);

  const email = s?.email || siteConfig.email;
  const phone = s?.phone;
  const address = s?.address || "Durango, México";
  const siteName = s?.siteName || siteConfig.name;

  return (
    <footer className="relative mt-24 overflow-hidden bg-[color:var(--color-navy)] text-white">
      {/* organic wave transition into the navy footer */}
      <WaveDivider fill="var(--color-navy)" flip className="absolute inset-x-0 top-0 -translate-y-[99%]" />
      {/* faint cloud watermark motif */}
      <CloudShape variant="puffy" fill="#ffffff" opacity={0.05} className="pointer-events-none absolute -right-10 top-10 w-72" />
      <CloudShape variant="wide" fill="#ffffff" opacity={0.04} className="pointer-events-none absolute left-[30%] bottom-0 w-80" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: contact */}
          <div>
            <BrandMark tone="dark" />
            <p className="mt-4 max-w-md text-sm text-white/65">{siteConfig.description}</p>

            <ul className="mt-6 space-y-2.5 text-sm text-white/75">
              {phone && (
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 text-[color:var(--color-accent-2)]" />
                  <a href={`tel:${phone}`} className="hover:text-white">{phone}</a>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-[color:var(--color-accent-2)]" />
                <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-[color:var(--color-accent-2)]" />
                <span>{address}</span>
              </li>
            </ul>
          </div>

          {/* Right: socials + nav */}
          <div className="flex flex-col gap-8 md:items-end">
            <div className="md:text-right">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">Redes Sociales</h4>
              <div className="mt-4 flex gap-3 md:justify-end">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70 md:justify-end">
              <Link href="/servicios" className="hover:text-white">Servicios</Link>
              <Link href="/proyectos" className="hover:text-white">Proyectos</Link>
              <Link href="/acerca-de-nosotros" className="hover:text-white">Nosotros</Link>
              <Link href="/contacto" className="hover:text-white">Contacto</Link>
              <Link href="/aviso-de-privacidad" className="hover:text-white">Privacidad</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteName}. Todos los derechos reservados.</p>
          <p>Durango, México</p>
        </div>
      </div>
    </footer>
  );
}
