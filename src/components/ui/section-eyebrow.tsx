import { CloudShape } from "@/components/ui/cloud-shape";

/**
 * GG Marketing signature section label: index number + cloud motif + gradient
 * rule. Reused across sections so the brand has a consistent, ownable accent
 * instead of generic centered eyebrows.
 */
export function SectionEyebrow({
  index,
  children,
  tone = "light",
  className = "",
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const text = tone === "dark" ? "text-white/70" : "text-[color:var(--color-accent)]";
  const cloud = tone === "dark" ? "#ffffff" : "var(--color-accent)";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {index && (
        <span className={`font-display text-xs font-bold tabular-nums ${text}`}>{index}</span>
      )}
      <CloudShape variant="small" fill={cloud} className="h-3.5 w-7" />
      <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${text}`}>{children}</span>
      <span
        aria-hidden
        className="h-px w-10 rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-transparent"
      />
    </span>
  );
}
