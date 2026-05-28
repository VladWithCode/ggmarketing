"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "figure" | "li" | "ul" | "h1" | "h2" | "p";

/**
 * Lightweight scroll-reveal. IntersectionObserver + CSS classes — no Framer
 * Motion in the bundle. Respects prefers-reduced-motion via globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // Trigger when ~15% of the element rises into the lower viewport
      // (shrink only the bottom edge) so the reveal plays in view, not early.
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${shown ? "reveal-in" : ""} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}s` } : undefined,
    },
    children,
  );
}
