"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight rotating headline. Swaps a word every ~2.4s with a CSS fade/slide.
 * No deps, no Framer — single state + interval.
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
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className={`relative inline-block align-top ${className}`}>
      {/* invisible sizer keeps layout stable at the widest word */}
      <span className="invisible block" aria-hidden>
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      {words.map((w, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className="text-gradient absolute inset-0 transition-all duration-500"
          style={{
            opacity: idx === i ? 1 : 0,
            transform: idx === i ? "translateY(0)" : "translateY(0.4em)",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
