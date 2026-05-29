import { Inter, Montserrat } from "next/font/google";

// display: "optional" prevents the visible FOUT swap — the browser uses the
// real font only if it's ready within the short block window (fast/cached),
// otherwise it keeps the metric-adjusted fallback for that load and never
// swaps mid-paint. next/font self-hosts the files + generates a size-adjusted
// fallback (adjustFontFallback default), so there is no layout jump either.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
  preload: true,
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "optional",
  preload: true,
  weight: ["500", "600", "700", "800"],
});
