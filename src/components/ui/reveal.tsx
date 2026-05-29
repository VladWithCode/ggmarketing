"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "figure" | "li" | "ul" | "h1" | "h2" | "p";

/**
 * Reversible scroll-reveal driven by INLINE styles inside the
 * IntersectionObserver callback — no React state. React state batching could
 * collapse a fast hide+show into a single commit (no DOM change => no
 * transition => "pop"). Driving opacity/transform/transition-delay directly on
 * the node guarantees a deterministic hide->show order and a real transition
 * every time the element re-enters the viewport.
 *
 * once=true (default): clean one-shot entrance — animates in once and stays.
 * This is the calm, professional behaviour. once=false makes it reversible
 * (re-hides on exit, re-animates on return) for cases that want it.
 * Stagger delay applies ONLY on enter; hiding is immediate.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const enterDelay = delay ? `${delay}s` : "0s";
    let visible = false;
    let io: IntersectionObserver | null = null;

    const show = () => {
      el.style.transitionDelay = enterDelay; // stagger only on enter
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };
    const hide = () => {
      el.style.transitionDelay = "0s"; // hide immediately, no stagger
      el.style.opacity = "0";
      el.style.transform = ""; // fall back to .reveal class translateY
    };

    const set = (next: boolean) => {
      if (next === visible) return; // guard redundant toggles
      visible = next;
      if (next) {
        show();
        if (once) cleanup();
      } else {
        hide();
      }
    };

    // initial hidden state (matches .reveal class; explicit for clarity)
    hide();

    function cleanup() {
      io?.disconnect();
      io = null;
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    }

    if (typeof IntersectionObserver !== "undefined") {
      // threshold 0 + bottom rootMargin: enters when top passes 85% of the
      // viewport, exits only once fully gone — tall sections never flicker.
      io = new IntersectionObserver(([entry]) => set(entry.isIntersecting), {
        threshold: 0,
        rootMargin: "0px 0px -15% 0px",
      });
      io.observe(el);
      return cleanup;
    }

    // Fallback only when IO unavailable (rAF-throttled).
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const r = el!.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        set(r.top < vh * 0.85 && r.bottom > vh * 0.1);
      });
    }
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    onScroll();
    return cleanup;
  }, [delay, once]);

  return createElement(as, { ref, className: `reveal ${className}`.trim() }, children);
}
