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
  name: "GG Marketing",
  tagline: "Agencia de marketing digital y publicidad",
  description:
    "Impulsamos tu marca con estrategia, contenido, campañas en redes y sitios web que conectan con tus clientes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ggmarketing.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "526182298042",
  email: "contacto@ggmarketing.com",
  social: {
    instagram: "https://instagram.com/ggmkt.mx",
    facebook: "https://facebook.com/ggmarketing.mx",
    github: "https://github.com/ggmarketing",
  },
};
