"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/acerca-de-nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-500", scrolled ? "mt-3" : "mt-0")}>
        <nav
          className={cn(
            "flex h-14 w-full items-center justify-between rounded-full px-2 pl-4 transition-all duration-500",
            scrolled
              ? "border border-[color:var(--color-border)] bg-white/85 shadow-soft backdrop-blur-md"
              : "border border-transparent",
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center overflow-hidden rounded-lg grad-brand shadow-soft">
              <Image src="/logo.png" alt="GG Marketing" width={28} height={28} className="rounded-md" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight text-[color:var(--color-navy)]">
              GG <span className="text-[color:var(--color-accent)]">Marketing</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "relative inline-block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      active
                        ? "grad-brand text-white shadow-soft"
                        : "text-[color:var(--color-navy)]/70 hover:text-[color:var(--color-accent)]",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-1.5 rounded-full grad-brand px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
            >
              Cotizar
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-full border border-[color:var(--color-border)] bg-white text-[color:var(--color-navy)] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-6xl px-4 md:hidden motion-safe:animate-[reveal-rise_0.2s_ease-out]">
          <div className="rounded-3xl border border-[color:var(--color-border)] bg-white/95 p-3 shadow-soft backdrop-blur-md">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--color-navy)]/80 hover:bg-[color:var(--color-accent)]/8"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-2xl grad-brand px-4 py-3 text-sm font-semibold text-white"
            >
              Cotizar proyecto <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
