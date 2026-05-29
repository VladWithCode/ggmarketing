/**
 * Premium decorative "clouds" — soft gradient blobs that drift slowly.
 * Pure CSS (no Framer Motion). GPU-friendly transform/opacity only.
 * Respects prefers-reduced-motion via globals.css.
 */
// 2 blobs (was 3) with smaller blur — drifting large blurred layers are a
// composite/paint cost; fewer + lighter = smoother scroll, same premium feel.
const blobs = [
  { x: "8%", y: "12%", size: 300, color: "var(--color-accent)", dur: 22, delay: 0 },
  { x: "70%", y: "30%", size: 320, color: "var(--color-accent-2)", dur: 26, delay: 2 },
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
            filter: "blur(34px)",
            animation: `cloud-drift ${b.dur}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
