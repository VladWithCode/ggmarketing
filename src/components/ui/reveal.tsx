"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "figure" | "li" | "ul" | "h1" | "h2" | "p";

/**
 * Lightweight scroll-reveal. IntersectionObserver primary, with an
 * rAF-throttled scroll/resize getBoundingClientRect fallback for webviews
 * where IO callbacks are unreliable. No Framer Motion.
 *
 * once=false (default): reversible — element re-hides when it leaves the
 * viewport and re-animates on return ("page breathes"). once=true: classic
 * one-shot reveal (disconnects after first show).
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

    let raf = 0;
    let io: IntersectionObserver | null = null;

    const setVisible = (visible: boolean) => {
      setShown(visible);
      if (visible && once) cleanup();
    };

    // Element counts as "in view" when it sits inside a comfortable band,
    // not just peeking 1px. Used by both IO fallback and scroll fallback.
    const computeVisible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.88 && r.bottom > vh * 0.12;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setVisible(computeVisible());
      });
    };

    function cleanup() {
      io?.disconnect();
      io = null;
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    }

    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.25, rootMargin: "0px 0px -12% 0px" },
      );
      io.observe(el);
    }

    // Fallback (also sets initial state for elements in view on load).
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    setVisible(computeVisible());

    return cleanup;
  }, [once]);

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
