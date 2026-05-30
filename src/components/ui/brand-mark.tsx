import Image from "next/image";

/**
 * GG Marketing real logo lockup. Uses the actual brand image (no cloud badge).
 * `tone="dark"` adds a subtle drop so the logo reads on the navy footer.
 */
export function BrandMark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Image
      src="/gg-logo.png"
      alt="GG Marketing"
      width={269}
      height={131}
      priority
      className={`h-8 w-auto ${tone === "dark" ? "drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]" : ""}`}
    />
  );
}
