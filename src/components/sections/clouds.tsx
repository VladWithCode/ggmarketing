/**
 * Soft white drifting clouds for light backgrounds. Pure CSS/SVG, translate3d
 * only (stays on compositor — no blur re-raster, no scroll cost).
 */
function Cloud({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 90" className={className} style={style} aria-hidden>
      <g fill="#ffffff">
        <ellipse cx="60" cy="60" rx="55" ry="28" />
        <ellipse cx="105" cy="48" rx="42" ry="34" />
        <ellipse cx="145" cy="62" rx="45" ry="26" />
        <rect x="40" y="58" width="120" height="28" rx="14" />
      </g>
    </svg>
  );
}

export function Clouds({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <Cloud
        className="animate-cloud absolute left-[6%] top-[18%] w-40 opacity-80 drop-shadow-[0_18px_24px_rgba(47,107,255,0.12)] md:w-56"
        style={{ animationDuration: "30s" }}
      />
      <Cloud
        className="animate-cloud absolute right-[10%] top-[10%] w-28 opacity-70 md:w-44"
        style={{ animationDuration: "38s", animationDelay: "-6s" }}
      />
      <Cloud
        className="animate-cloud absolute left-[42%] top-[34%] w-24 opacity-60 md:w-36"
        style={{ animationDuration: "44s", animationDelay: "-12s" }}
      />
    </div>
  );
}
