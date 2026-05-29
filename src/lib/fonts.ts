import { Inter, Montserrat } from "next/font/google";

// display: "swap" keeps the real fonts (no ugly persistent fallback). The
// AppLoader overlay covers the page until document.fonts.ready, so the swap
// happens behind the splash and is never visible.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  weight: ["500", "600", "700", "800"],
});
