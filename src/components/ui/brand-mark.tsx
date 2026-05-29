import Image from "next/image";
import { CloudShape } from "@/components/ui/cloud-shape";

/**
 * GG Marketing logo lockup: logo sitting in a cloud-shaped gradient badge.
 * `tone` switches wordmark color for light vs dark (footer) surfaces.
 */
export function BrandMark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid size-9 place-items-center">
        <CloudShape variant="puffy" fill="url(#bm-grad)" className="absolute inset-0 size-full drop-shadow-[0_6px_14px_rgba(47,107,255,0.4)]" />
        <svg width="0" height="0" aria-hidden>
          <defs>
            <linearGradient id="bm-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2f6bff" />
              <stop offset="60%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        <Image src="/logo.png" alt="GG Marketing" width={20} height={20} className="relative z-10 rounded" />
      </span>
      <span
        className={`font-display text-sm font-bold tracking-tight ${
          tone === "dark" ? "text-white" : "text-[color:var(--color-navy)]"
        }`}
      >
        GG <span className="text-gradient">Marketing</span>
      </span>
    </span>
  );
}
