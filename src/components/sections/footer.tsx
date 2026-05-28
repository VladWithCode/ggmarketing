import Link from "next/link";
import { Github, Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-[color:var(--color-bg-soft)]">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold">
              SIBRA <span className="text-[color:var(--color-accent)]">DGO</span>
            </h3>
            <p className="mt-3 max-w-md text-sm text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: siteConfig.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: siteConfig.social.github, Icon: Github, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Sitio
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
              <li><Link href="/acerca-de-nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/aviso-de-privacidad" className="hover:text-white">Aviso de privacidad</Link></li>
              <li><Link href="/terminos-y-condiciones" className="hover:text-white">Términos</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-white">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>Hecho con Next.js · Durango, México</p>
        </div>
      </div>
    </footer>
  );
}
