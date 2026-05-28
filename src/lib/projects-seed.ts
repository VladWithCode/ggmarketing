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
    slug: "campana-redes-restaurante",
    title: "Campaña de redes para restaurante",
    clientName: "Negocio demo",
    shortDescription:
      "Gestión de redes y campañas Meta Ads para llenar mesas y crecer la comunidad.",
    fullDescription:
      "Diseñamos calendario de contenido, producimos fotos y reels de platillos, gestionamos las redes y lanzamos campañas de publicidad segmentadas en Facebook e Instagram. El objetivo: más reservas y una comunidad activa alrededor de la marca.",
    category: "Marketing en redes",
    technologies: ["Meta Ads", "Instagram", "Facebook", "Diseño de contenido", "Reels"],
    services: ["Gestión de redes sociales", "Publicidad Meta Ads", "Diseño de contenido"],
    heroImage: "/placeholder-1.svg",
    galleryImages: ["/placeholder-1.svg", "/placeholder-2.svg"],
    results: [
      { label: "Alcance mensual", value: "+180%" },
      { label: "Costo por mensaje", value: "−40%" },
      { label: "Seguidores nuevos", value: "3.2k" },
    ],
    featured: true,
  },
  {
    slug: "branding-identidad-marca",
    title: "Branding e identidad visual",
    shortDescription:
      "Identidad de marca completa: logo, paleta, tipografía y plantillas para redes.",
    fullDescription:
      "Construimos la identidad visual de la marca desde cero: logotipo, paleta de color, tipografía, plantillas para redes y una guía de marca clara. Resultado: una presencia coherente y profesional en todos los canales.",
    category: "Branding",
    technologies: ["Branding", "Identidad visual", "Diseño gráfico", "Guía de marca"],
    services: ["Branding e identidad visual", "Diseño de contenido"],
    heroImage: "/placeholder-2.svg",
    galleryImages: ["/placeholder-2.svg", "/placeholder-1.svg"],
    results: [
      { label: "Piezas entregadas", value: "40+" },
      { label: "Coherencia de marca", value: "100%" },
      { label: "Tiempo de entrega", value: "3 semanas" },
    ],
    featured: true,
  },
  {
    slug: "landing-page-campana",
    title: "Landing page para campaña digital",
    shortDescription:
      "Sitio rápido y optimizado para SEO que convierte visitas de campañas en clientes.",
    fullDescription:
      "Diseñamos y desarrollamos una landing page veloz, mobile-first y optimizada para SEO, conectada a las campañas de publicidad. Enfoque total en conversión: formularios claros y llamados a la acción directos.",
    category: "Página web",
    technologies: ["Next.js", "Tailwind", "SEO", "Vercel"],
    services: ["Páginas web / landing pages", "Estrategia digital"],
    heroImage: "/placeholder-3.svg",
    galleryImages: ["/placeholder-3.svg", "/placeholder-1.svg"],
    results: [
      { label: "Lighthouse Performance", value: "95+" },
      { label: "Tiempo de carga", value: "< 1.5 s" },
      { label: "Tasa de conversión", value: "+25%" },
    ],
    featured: false,
  },
];
