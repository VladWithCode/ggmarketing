// Placeholder projects shown when DB is empty/unconfigured. TODO: replace via /admin.
export type SeedProject = {
  slug: string;
  title: string;
  clientName?: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  services: string[];
  heroImage: string;
  galleryImages: string[];
  liveUrl?: string;
  repoUrl?: string;
  results?: { label: string; value: string }[];
  featured: boolean;
};

export const seedProjects: SeedProject[] = [
  {
    slug: "plataforma-gestion-clientes",
    title: "Plataforma de gestión de clientes",
    clientName: "Empresa demo",
    shortDescription:
      "Sistema web a medida para administrar clientes, cotizaciones y seguimiento de ventas.",
    fullDescription:
      "Desarrollamos una plataforma completa con módulos de clientes, cotizaciones, recordatorios automáticos y reportes en tiempo real. Reemplazó un flujo de hojas de cálculo y correos manuales.",
    category: "Sistema web",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    services: ["Sistema administrativo", "Dashboards", "Integración de bases de datos"],
    heroImage: "/placeholder-1.svg",
    galleryImages: ["/placeholder-1.svg", "/placeholder-2.svg"],
    results: [
      { label: "Tiempo ahorrado", value: "12 h/semana" },
      { label: "Errores manuales", value: "−85%" },
    ],
    featured: true,
  },
  {
    slug: "app-movil-operaciones",
    title: "App móvil para operaciones de campo",
    shortDescription:
      "App para registro de actividades, evidencia fotográfica y sincronización offline.",
    fullDescription:
      "Aplicación móvil que permite al equipo de campo registrar actividades sin conexión y sincronizar al volver a tener red. Incluye panel administrativo.",
    category: "Aplicación móvil",
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    services: ["Aplicaciones móviles", "Automatización de procesos"],
    heroImage: "/placeholder-2.svg",
    galleryImages: ["/placeholder-2.svg"],
    featured: true,
  },
  {
    slug: "sitio-institucional",
    title: "Sitio institucional moderno",
    shortDescription:
      "Sitio web rápido, accesible y optimizado para SEO con CMS integrado.",
    fullDescription:
      "Rediseño completo con enfoque en performance, accesibilidad y posicionamiento. Panel administrativo para que el cliente publique contenido sin tocar código.",
    category: "Desarrollo web",
    technologies: ["Next.js", "Tailwind", "Vercel"],
    services: ["Desarrollo web", "Soporte y mantenimiento"],
    heroImage: "/placeholder-3.svg",
    galleryImages: ["/placeholder-3.svg"],
    featured: false,
  },
];
