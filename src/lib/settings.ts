import { prisma } from "@/lib/prisma";
import { siteConfig } from "@/lib/utils";

export type SiteSettings = {
  siteName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  githubUrl: string;
  address: string;
};

function defaults(): SiteSettings {
  return {
    siteName: siteConfig.name,
    tagline: siteConfig.tagline,
    email: siteConfig.email,
    phone: "",
    whatsappNumber: siteConfig.whatsapp,
    instagramUrl: siteConfig.social.instagram,
    facebookUrl: siteConfig.social.facebook,
    githubUrl: siteConfig.social.github,
    address: "Durango, México",
  };
}

function hasDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return false;
  if (/(^|@)host(:|\/)/.test(url) || /user:password/.test(url)) return false;
  return true;
}

export async function getSettings(): Promise<SiteSettings> {
  const d = defaults();
  if (!hasDb()) return d;
  try {
    const s = await prisma.settings.findUnique({ where: { id: "singleton" } });
    if (!s) return d;
    return {
      siteName: s.siteName || d.siteName,
      tagline: s.tagline || d.tagline,
      email: s.email || d.email,
      phone: s.phone || d.phone,
      whatsappNumber: s.whatsappNumber || d.whatsappNumber,
      instagramUrl: s.instagramUrl || d.instagramUrl,
      facebookUrl: s.facebookUrl || d.facebookUrl,
      githubUrl: s.githubUrl || d.githubUrl,
      address: s.address || d.address,
    };
  } catch {
    return d;
  }
}
