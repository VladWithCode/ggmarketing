"use client";

import { motion } from "framer-motion";

/**
 * Premium animated "clouds" — modern reinterpretation of GG Marketing's
 * decorative circles. Soft gradient blobs that drift slowly. GPU-friendly
 * (transform/opacity only), respects prefers-reduced-motion via CSS.
 */
export function Clouds({ className = "" }: { className?: string }) {
  const blobs = [
    { x: "8%", y: "12%", size: 340, color: "var(--color-accent)", dur: 18, delay: 0 },
    { x: "70%", y: "8%", size: 280, color: "var(--color-accent-2)", dur: 22, delay: 1.5 },
    { x: "45%", y: "55%", size: 420, color: "var(--color-accent-3)", dur: 26, delay: 0.8 },
    { x: "85%", y: "60%", size: 240, color: "var(--color-accent)", dur: 20, delay: 2.2 },
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, color-mix(in oklab, ${b.color} 55%, transparent), transparent 70%)`,
            filter: "blur(60px)",
          }}
          initial={{ opacity: 0.35, scale: 0.95 }}
          animate={{
            opacity: [0.3, 0.55, 0.3],
            scale: [0.95, 1.08, 0.95],
            x: [0, 24, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
