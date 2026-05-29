"use client";

import { useEffect, useState } from "react";

/**
 * Rotating headline word. Always starts on words[0] (deterministic SSR/client,
 * no flash), waits a stable hold before the first rotation, then cycles. An
 * invisible sizer at the widest word reserves space so there is no layout shift.
 * No deps, no Framer.
 */
export function RotatingWords({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    if (
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // static first word, no rotation
    }
    // hold the initial word ~2.5s before the first swap, then cycle
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setI((v) => (v + 1) % words.length);
      interval = setInterval(() => setI((v) => (v + 1) % words.length), 2800);
    }, 2500);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [words.length]);

  const widest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className={`relative inline-block align-top ${className}`}>
      <span className="invisible block" aria-hidden>
        {widest}
      </span>
      {words.map((w, idx) => (
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
      ))}
    </span>
  );
}
