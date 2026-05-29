"use client";

import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "figure" | "li" | "ul" | "h1" | "h2" | "p";

/**
 * Lightweight scroll-reveal. IntersectionObserver primary; scroll/resize
 * (rAF-throttled) fallback ONLY when IO is unavailable, so the two never fight.
 *
 * once=false (default): reversible. Re-hides on exit, re-animates on return.
 * Smoothness: the stagger delay is applied via --reveal-delay only on enter,
 * and showing is deferred with a double requestAnimationFrame so the browser
 * paints the hidden state before transitioning back in (no "pop").
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  once = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf1 = 0;
    let raf2 = 0;
    let current = false; // last applied visibility — guards redundant updates
    let io: IntersectionObserver | null = null;

    const clearRafs = () => {
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      raf1 = raf2 = 0;
    };

    const apply = (next: boolean) => {
      if (next === current) return; // no-op if unchanged
      current = next;
      clearRafs();
      if (next) {
        // double rAF: ensure the hidden state is committed/painted before we
        // add .reveal-in, so the transition actually runs on re-entry.
        raf1 = requestAnimationFrame(() => {
          raf2 = requestAnimationFrame(() => setShown(true));
        });
      } else {
        setShown(false); // hide immediately (delay=0 via CSS) -> repaint hidden
      }
      if (next && once) cleanup();
    };

    function cleanup() {
      io?.disconnect();
      io = null;
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      clearRafs();
    }

    if (typeof IntersectionObserver !== "undefined") {
      // IO is the single source of truth when available.
      io = new IntersectionObserver(
        ([entry]) => apply(entry.isIntersecting),
        { threshold: 0.25, rootMargin: "0px 0px -15% 0px" },
      );
      io.observe(el);
      return cleanup;
    }

    // Fallback only when IO is missing (rAF-throttled, hysteresis band).
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        apply(r.top < vh * 0.85 && r.bottom > vh * 0.1);
      });
    };
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    onScroll();
    return cleanup;
  }, [once]);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${shown ? "reveal-in" : ""} ${className}`.trim(),
      style: delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined,
    },
    children,
  );
}
