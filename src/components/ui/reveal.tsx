"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "figure" | "li" | "ul" | "h1" | "h2" | "p";

/**
 * Lightweight scroll-reveal. Primary mechanism is IntersectionObserver, with a
 * scroll/resize getBoundingClientRect fallback so it still fires in browsers or
 * embedded webviews where IO callbacks are unreliable. No Framer Motion.
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

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      io?.disconnect();
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
    };

    // Reveal once the element's top edge has risen past 88% of the viewport
    // (i.e. it is genuinely on screen, not just peeking by 1px).
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.88 && r.bottom > 0) reveal();
    };

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) reveal();
        },
        { threshold: 0.25, rootMargin: "0px 0px -15% 0px" },
      );
      io.observe(el);
    }

    // Fallback + initial state (element already in view on load).
    window.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    check();

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
    };
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
