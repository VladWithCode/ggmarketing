import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const siteConfig = {
  name: "SIBRA DGO",
  tagline: "Equipo de software en Durango",
  description:
    "Creamos soluciones digitales a medida para negocios, instituciones y proyectos reales.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sibradgo.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "528000000000",
  email: "contacto@sibradgo.com",
  social: {
    instagram: "https://instagram.com/sibradgo",
    facebook: "https://facebook.com/sibradgo",
    linkedin: "https://linkedin.com/company/sibradgo",
    github: "https://github.com/sibradgo",
  },
};
