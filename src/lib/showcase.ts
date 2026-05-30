// Static showcase data: real client projects + adaptable GG Marketing templates.
// Live URLs only (no repos shown to clients). No secrets, no DB — safe to edit.

export type Showcase = {
  name: string;
  url: string;
  category: string;
  description: string;
};

export const realProjects: Showcase[] = [
  {
    name: "La Eléctrica",
    url: "https://elektrk.vercel.app/",
    category: "Sitio web · Negocio local",
    description:
      "Sitio web para negocio eléctrico con presencia digital clara, servicios visibles y contacto directo.",
  },
  {
    name: "Sibra Inmobiliaria",
    url: "https://sibra.mx",
    category: "Sitio web inmobiliario",
    description:
      "Plataforma web inmobiliaria para mostrar propiedades, servicios y presencia profesional en línea.",
  },
  {
    name: "Nook Creativo",
    url: "https://nookcreativo.mx",
    category: "Agencia · Branding",
    description:
      "Sitio creativo para agencia de publicidad con identidad visual, servicios y presentación de marca.",
  },
  {
    name: "Tanmía Pasteles",
    url: "https://tanmia-smoky.vercel.app/",
    category: "App web · Catálogo y pedidos",
    description:
      "Aplicación web para negocio de pasteles con experiencia visual atractiva y enfoque comercial.",
  },
  {
    name: "TaskTracker",
    url: "https://tasktracker.lat",
    category: "App web · Productividad",
    description:
      "Aplicación de productividad para organizar tareas, rutinas y seguimiento diario.",
  },
];

export const templates: Showcase[] = [
  {
    name: "Clínica & Consultorio",
    url: "https://ggmkt-clinica-consultorio.vercel.app",
    category: "Salud · Consultorio",
    description: "Demo para clínicas, consultorios y profesionales de la salud.",
  },
  {
    name: "Belleza & Spa",
    url: "https://ggmkt-belleza-spa.vercel.app",
    category: "Belleza · Spa",
    description: "Diseño para spas, centros de belleza, estética y servicios wellness.",
  },
  {
    name: "Servicio Urgente",
    url: "https://ggmkt-servicio-urgente.vercel.app",
    category: "Servicios locales",
    description: "Template para servicios urgentes, reparaciones, técnicos y atención rápida.",
  },
  {
    name: "Ferremax",
    url: "https://ggmkt-ferremax.vercel.app",
    category: "Ferretería · Comercio",
    description: "Demo para ferreterías, tiendas de materiales y negocios de productos físicos.",
  },
  {
    name: "Uñas Studio",
    url: "https://ggmkt-unas-studio.vercel.app",
    category: "Uñas · Belleza",
    description: "Template visual para estudios de uñas, manicuristas y negocios de belleza.",
  },
  {
    name: "Estética & Barbería",
    url: "https://ggmkt-estetica-barberia.vercel.app",
    category: "Estética · Barbería",
    description: "Diseño para negocios de estética, barbería, imagen personal y grooming.",
  },
  {
    name: "Barbería",
    url: "https://ggmkt-barberia.vercel.app",
    category: "Barbería",
    description: "Landing demo para barberías con servicios, estilo visual y contacto directo.",
  },
  {
    name: "AppBuses · Rutas",
    url: "https://ggmkt-appbuses.vercel.app",
    category: "Transporte · App web",
    description: "Demo de app de rutas y transporte, adaptable para movilidad o servicios locales.",
  },
];

/** Pretty domain for display in a fake browser bar. */
export function prettyDomain(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}
