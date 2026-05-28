// Commercial packages — GG Marketing digital-marketing tiers.
// Prices intentionally NOT fixed (see priceLabel). Stripe checkout activates
// later once real prices + STRIPE keys are configured.

export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  priceLabel: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    slug: "presencia-digital",
    name: "Presencia Digital",
    tagline: "Para arrancar tu marca en redes",
    priceLabel: "Desde cotización personalizada",
    features: [
      "Gestión de 1 red social",
      "Calendario de contenido mensual",
      "Diseño de 8 publicaciones",
      "Optimización de perfil",
      "Reporte mensual básico",
      "Asesoría inicial de marca",
    ],
  },
  {
    slug: "campanas-y-redes",
    name: "Campañas y Redes",
    tagline: "Contenido + publicidad que vende",
    priceLabel: "Cotización según alcance",
    features: [
      "Todo lo del plan Presencia Digital",
      "Gestión de 2 redes sociales",
      "Diseño de publicaciones y reels",
      "Campañas Meta Ads (Facebook/Instagram)",
      "Optimización de anuncios",
      "Historias y community management",
      "Reporte mensual de métricas",
    ],
    featured: true,
  },
  {
    slug: "estrategia-integral",
    name: "Estrategia Integral / A medida",
    tagline: "Marca, campañas y presencia web",
    priceLabel: "Agenda una llamada para cotizar",
    features: [
      "Todo lo del plan Campañas y Redes",
      "Estrategia digital completa",
      "Branding e identidad visual",
      "Página web o landing page",
      "Producción de video y contenido premium",
      "Campañas multicanal",
      "Reportes avanzados y asesoría estratégica",
    ],
  },
];

function hasDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return false;
  if (/(^|@)host(:|\/)/.test(url) || /user:password/.test(url)) return false;
  return true;
}

// Public plans: DB if available + published, else static seed above.
export async function getPlans(): Promise<Plan[]> {
  if (!hasDb()) return plans;
  try {
    const { prisma } = await import("@/lib/prisma");
    const rows = await prisma.plan.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    if (rows.length === 0) return plans;
    return rows.map((r) => ({
      slug: r.slug,
      name: r.name,
      tagline: r.tagline,
      priceLabel: r.priceLabel,
      features: r.features,
      featured: r.featured,
    }));
  } catch {
    return plans;
  }
}

// Comparison matrix. value: true=check, false=cross, string=text.
export type CompareRow = {
  feature: string;
  basico: boolean | string;
  profesional: boolean | string;
  empresarial: boolean | string;
};

export const compareRows: CompareRow[] = [
  { feature: "Gestión de redes sociales", basico: "1 red", profesional: "2 redes", empresarial: "Multicanal" },
  { feature: "Calendario de contenido", basico: true, profesional: true, empresarial: true },
  { feature: "Diseño de publicaciones", basico: "8/mes", profesional: "Ilimitado*", empresarial: "Ilimitado*" },
  { feature: "Reels y video", basico: false, profesional: true, empresarial: true },
  { feature: "Campañas Meta Ads", basico: false, profesional: true, empresarial: true },
  { feature: "Optimización de anuncios", basico: false, profesional: true, empresarial: true },
  { feature: "Community management", basico: false, profesional: true, empresarial: true },
  { feature: "Branding e identidad visual", basico: false, profesional: "Opcional", empresarial: true },
  { feature: "Página web / landing", basico: false, profesional: "Opcional", empresarial: true },
  { feature: "Estrategia digital", basico: "Básica", profesional: "Avanzada", empresarial: "Integral" },
  { feature: "Reportes de métricas", basico: "Básico", profesional: true, empresarial: "Avanzado" },
  { feature: "Asesoría estratégica", basico: false, profesional: false, empresarial: true },
];
