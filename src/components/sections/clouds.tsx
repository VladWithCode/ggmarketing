import { CloudShape } from "@/components/ui/cloud-shape";

type Variant = "puffy" | "wide" | "stack" | "small";

type CloudCfg = {
  variant: Variant;
  pos: string; // tailwind position classes
  w: string; // width classes
  opacity: number;
  anim: string; // animation utility
  dur: string;
  delay: string;
  fill?: string;
};

// 3 depth layers. Back = big/faint/slow, mid = medium, fore = small/brighter/bob.
const back: CloudCfg[] = [
  { variant: "wide", pos: "left-[-6%] top-[8%]", w: "w-[42%]", opacity: 0.5, anim: "animate-cloud", dur: "42s", delay: "0s", fill: "#dbe7ff" },
  { variant: "puffy", pos: "right-[-4%] top-[4%]", w: "w-[34%]", opacity: 0.45, anim: "animate-cloud-rev", dur: "50s", delay: "-8s", fill: "#dbe7ff" },
  { variant: "stack", pos: "left-[30%] top-[2%]", w: "w-[28%]", opacity: 0.4, anim: "animate-cloud", dur: "56s", delay: "-20s", fill: "#e6efff" },
];

const mid: CloudCfg[] = [
  { variant: "puffy", pos: "left-[4%] top-[34%]", w: "w-[24%]", opacity: 0.85, anim: "animate-cloud", dur: "34s", delay: "-4s" },
  { variant: "wide", pos: "right-[6%] top-[28%]", w: "w-[26%]", opacity: 0.8, anim: "animate-cloud-rev", dur: "38s", delay: "-12s" },
  { variant: "stack", pos: "left-[44%] top-[44%]", w: "w-[18%]", opacity: 0.7, anim: "animate-cloud", dur: "46s", delay: "-2s" },
];

const fore: CloudCfg[] = [
  { variant: "small", pos: "left-[16%] bottom-[20%]", w: "w-[12%]", opacity: 0.95, anim: "animate-cloud-bob", dur: "7s", delay: "0s" },
  { variant: "small", pos: "right-[20%] bottom-[26%]", w: "w-[10%]", opacity: 0.9, anim: "animate-cloud-bob", dur: "9s", delay: "-3s" },
  { variant: "puffy", pos: "right-[34%] top-[16%]", w: "w-[9%]", opacity: 0.85, anim: "animate-cloud-bob", dur: "8s", delay: "-1.5s" },
  { variant: "small", pos: "left-[38%] top-[22%]", w: "w-[7%]", opacity: 0.8, anim: "animate-cloud-bob", dur: "10s", delay: "-5s" },
];

function Layer({ list }: { list: CloudCfg[] }) {
  return (
    <>
      {list.map((c, i) => (
        <CloudShape
          key={i}
          variant={c.variant}
          fill={c.fill ?? "#ffffff"}
          opacity={c.opacity}
          className={`${c.anim} absolute ${c.pos} ${c.w} drop-shadow-[0_16px_22px_rgba(47,107,255,0.10)]`}
          style={{ animationDuration: c.dur, animationDelay: c.delay }}
        />
      ))}
    </>
  );
}

/**
 * Layered cloudscape — brand motif. `density` controls how many layers render.
 * full = back+mid+fore (hero), soft = back+mid (interior section headers).
 */
export function Clouds({
  className = "",
  density = "full",
}: {
  className?: string;
  density?: "full" | "soft";
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <Layer list={back} />
      <Layer list={mid} />
      {density === "full" && <Layer list={fore} />}
    </div>
  );
}
