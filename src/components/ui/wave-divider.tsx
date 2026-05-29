/**
 * Static SVG wave divider between sections. Pure SVG (no JS, no animation) —
 * zero scroll cost. `fill` = the color of the section the wave flows INTO.
 */
export function WaveDivider({
  fill = "#ffffff",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[100px]"
      >
        <path
          fill={fill}
          d="M0,64 C240,120 480,16 720,40 C960,64 1200,120 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
