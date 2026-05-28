/**
 * Premium decorative "clouds" — soft gradient blobs that drift slowly.
 * Pure CSS (no Framer Motion). GPU-friendly transform/opacity only.
 * Respects prefers-reduced-motion via globals.css.
 */
const blobs = [
  { x: "8%", y: "12%", size: 320, color: "var(--color-accent)", dur: 20, delay: 0 },
  { x: "72%", y: "8%", size: 260, color: "var(--color-accent-2)", dur: 24, delay: 2 },
  { x: "45%", y: "55%", size: 380, color: "var(--color-accent-3)", dur: 28, delay: 1 },
];

export function Clouds({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, color-mix(in oklab, ${b.color} 55%, transparent), transparent 70%)`,
            filter: "blur(48px)",
            animation: `cloud-drift ${b.dur}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
