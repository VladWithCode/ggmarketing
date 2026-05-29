/**
 * Reusable cloud SVG — the brand's core visual motif. Several puff variants so
 * clouds don't all look identical. Pure SVG (fill only), GPU-cheap.
 */
type Variant = "puffy" | "wide" | "stack" | "small";

const paths: Record<Variant, string> = {
  // big rounded multi-bump cloud
  puffy:
    "M40 78 C18 78 8 60 24 50 C20 30 50 22 60 38 C70 18 104 22 108 44 C132 38 150 58 134 72 C140 86 120 92 110 84 C96 96 56 96 48 82 C44 84 42 82 40 78 Z",
  // long, flatter cloud
  wide:
    "M30 70 C12 70 6 54 22 48 C26 32 56 32 60 46 C70 30 110 30 116 48 C150 44 176 60 156 72 C160 82 140 86 130 80 C110 90 60 90 48 78 C42 80 36 78 30 70 Z",
  // stacked rounded cloud
  stack:
    "M50 80 C26 80 18 58 38 50 C34 28 70 24 78 42 C92 26 124 34 120 56 C140 56 146 76 126 80 C116 90 64 90 50 80 Z",
  // tiny decorative puff
  small:
    "M24 44 C12 44 8 32 20 28 C22 16 44 16 48 26 C58 16 80 22 76 34 C90 34 92 46 78 46 C66 52 36 52 24 44 Z",
};

const viewBoxes: Record<Variant, string> = {
  puffy: "0 0 160 110",
  wide: "0 0 190 100",
  stack: "0 0 160 110",
  small: "0 0 100 60",
};

export function CloudShape({
  variant = "puffy",
  className = "",
  style,
  fill = "#ffffff",
  opacity = 1,
}: {
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox={viewBoxes[variant]}
      className={className}
      style={style}
      fill={fill}
      opacity={opacity}
      aria-hidden
    >
      <path d={paths[variant]} />
    </svg>
  );
}

/** Tiny cloud used inline as a bullet / label motif. */
export function CloudBullet({ className = "" }: { className?: string }) {
  return (
    <CloudShape
      variant="small"
      fill="currentColor"
      className={`inline-block h-3.5 w-6 align-middle ${className}`}
    />
  );
}
