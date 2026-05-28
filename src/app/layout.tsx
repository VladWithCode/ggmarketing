import type { Metadata, Viewport } from "next";
import { inter, montserrat } from "@/lib/fonts";
import { siteConfig } from "@/lib/utils";
import { Toaster } from "sonner";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFab } from "@/components/sections/whatsapp-fab";
import { OrgJsonLd } from "@/components/seo/org-jsonld";
import { getSettings } from "@/lib/settings";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen antialiased">
        <OrgJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer settings={settings} />
        <WhatsAppFab whatsapp={settings.whatsappNumber} />
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}
