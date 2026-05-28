"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-500",
          scrolled ? "mt-3" : "mt-0",
        )}
      >
        <nav
          className={cn(
            "flex h-14 w-full items-center justify-between rounded-full px-2 pl-4 transition-all duration-500",
            scrolled
              ? "border border-white/10 bg-[color:var(--color-bg)]/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border border-transparent",
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-[color:var(--color-accent)] to-[color:var(--color-accent-2)] shadow-lg">
              <Image src="/logo.png" alt="GG Marketing" width={28} height={28} className="rounded-md" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
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
                      "relative inline-block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                      active ? "text-white" : "text-white/65 hover:text-white",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Cotizar
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl px-4 md:hidden"
          >
            <div className="rounded-3xl border border-white/10 bg-[color:var(--color-bg)]/90 p-3 backdrop-blur-xl">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black"
              >
                Cotizar proyecto <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
