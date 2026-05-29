"use client";

import { useEffect, useState } from "react";

/**
 * Rotating headline word, flash-free.
 *
 * Cause of the prior flash: all words were rendered stacked (absolute) with a
 * CSS opacity transition, so on first paint the 3 inactive words animated
 * opacity 1->0 and were briefly visible (FOUC).
 *
 * Fix: gate the animated version behind `mounted`. SSR + the first client
 * render output ONLY a single static words[0] ("Marketing Digital") — no stack,
 * no transition, deterministic. The stacked/animated layer mounts after
 * hydration; its nodes are created already at their target opacity, so they
 * never transition from 1->0. An invisible sizer (widest word) reserves space
 * in both states => no layout shift.
 */
export function RotatingWords({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || words.length < 2) return;
    if (
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stay on words[0], no rotation
    }
    // hold the initial word ~2.8s before the first swap, then cycle
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setI((v) => (v + 1) % words.length);
      interval = setInterval(() => setI((v) => (v + 1) % words.length), 3000);
    }, 2800);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [mounted, words.length]);

  const widest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className={`relative inline-block align-top ${className}`}>
      {/* sizer reserves space for the longest word (both states) */}
      <span className="invisible block" aria-hidden>
        {widest}
      </span>

      {!mounted ? (
        // SSR + first paint: single static word, no transition, no stacking
        <span className="text-gradient absolute inset-0">{words[0]}</span>
      ) : (
        words.map((w, idx) => (
          <span
            key={w}
            aria-hidden={idx !== i}
            className="text-gradient absolute inset-0 transition-[opacity,transform] duration-500 ease-out"
            style={{
              opacity: idx === i ? 1 : 0,
              transform: idx === i ? "translateY(0)" : "translateY(0.35em)",
            }}
          >
            {w}
          </span>
        ))
      )}
    </span>
  );
}
