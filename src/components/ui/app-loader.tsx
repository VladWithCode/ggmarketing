"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/brand-mark";
import { CloudShape } from "@/components/ui/cloud-shape";

/**
 * First-paint splash. Rendered server-side as visible (ready=false), so it
 * covers the page from the very first paint — the webfont swap (display:swap)
 * happens behind it and is never seen. Hides on document.fonts.ready or after a
 * hard 1800ms cap, whichever comes first, then fades out and unmounts.
 *
 * Persists across client navigations (lives in root layout) so it only shows on
 * a full load / refresh, never on internal route changes.
 */
export function AppLoader() {
  const [done, setDone] = useState(false); // fonts ready or timed out
  const [gone, setGone] = useState(false); // removed from DOM after fade

  useEffect(() => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      setDone(true);
      window.setTimeout(() => setGone(true), 450); // after fade-out
    };

    const cap = window.setTimeout(finish, 1800); // hard cap, never stuck
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    if (fonts?.ready) {
      fonts.ready.then(() => window.setTimeout(finish, 120)).catch(finish);
    } else {
      finish();
    }
    return () => window.clearTimeout(cap);
  }, []);

  if (gone) return null;

  return (
    <div
      id="app-loader"
      aria-hidden
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-gradient-to-b from-[#cfe1ff] via-[#e8f0ff] to-[#eef4ff] transition-opacity duration-[450ms] ease-out"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto" }}
    >
      {/* soft drifting clouds */}
      <CloudShape variant="wide" fill="#ffffff" opacity={0.7} className="animate-cloud absolute left-[8%] top-[22%] w-48" />
      <CloudShape variant="puffy" fill="#ffffff" opacity={0.6} className="animate-cloud-rev absolute right-[10%] top-[16%] w-40" />
      <CloudShape variant="small" fill="#ffffff" opacity={0.8} className="animate-cloud-bob absolute left-[24%] bottom-[26%] w-24" />

      <div className="relative flex flex-col items-center gap-5">
        <div className="animate-cloud-bob scale-125">
          <BrandMark />
        </div>
        <p className="text-sm font-medium text-[color:var(--color-muted)]">
          Preparando tu estrategia digital…
        </p>
        <div className="flex gap-1.5">
          <span className="size-2 animate-pulse-soft rounded-full bg-[color:var(--color-accent)]" style={{ animationDelay: "0ms" }} />
          <span className="size-2 animate-pulse-soft rounded-full bg-[color:var(--color-accent-2)]" style={{ animationDelay: "200ms" }} />
          <span className="size-2 animate-pulse-soft rounded-full bg-[color:var(--color-accent-3)]" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </div>
  );
}
