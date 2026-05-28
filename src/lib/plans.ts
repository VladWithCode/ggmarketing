// Commercial packages — GG Marketing tier logic re-themed to SIBRA software.
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
    slug: "basico",
    name: "Básico",
    tagline: "Para arrancar tu presencia digital",
    priceLabel: "Desde cotización personalizada",
    features: [
      "Sitio web o landing page",
      "Diseño moderno mobile-first",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "SEO básico",
      "Deploy en Vercel",
    ],
  },
  {
    slug: "profesional",
    name: "Profesional",
    tagline: "Sistemas a la medida de tu operación",
    priceLabel: "Cotización según alcance",
    features: [
      "Todo lo del plan Básico",
      "Sistema web personalizado",
      "Panel administrativo (CMS)",
      "Base de datos PostgreSQL",
      "Autenticación de usuarios",
      "Integraciones de terceros",
      "Dashboards y reportes",
    ],
    featured: true,
  },
  {
    slug: "empresarial",
    name: "Empresarial / A medida",
    tagline: "Plataformas completas y escalables",
    priceLabel: "Agenda una llamada para cotizar",
    features: [
      "Todo lo del plan Profesional",
      "Arquitectura escalable multi-rol",
      "Apps móviles iOS / Android",
      "Automatización de procesos",
      "Integración de bases de datos",
      "Soporte y mantenimiento continuo",
      "SLA y monitoreo",
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
  { feature: "Sitio web / landing", basico: true, profesional: true, empresarial: true },
  { feature: "Diseño responsive premium", basico: true, profesional: true, empresarial: true },
  { feature: "SEO", basico: "Básico", profesional: "Avanzado", empresarial: "Avanzado" },
  { feature: "Panel administrativo (CMS)", basico: false, profesional: true, empresarial: true },
  { feature: "Base de datos", basico: false, profesional: true, empresarial: true },
  { feature: "Autenticación de usuarios", basico: false, profesional: true, empresarial: true },
  { feature: "Dashboards y reportes", basico: false, profesional: true, empresarial: true },
  { feature: "Apps móviles", basico: false, profesional: false, empresarial: true },
  { feature: "Automatización de procesos", basico: false, profesional: "Opcional", empresarial: true },
  { feature: "Integración de bases de datos", basico: false, profesional: "Opcional", empresarial: true },
  { feature: "Soporte y mantenimiento", basico: "Opcional", profesional: true, empresarial: true },
  { feature: "SLA y monitoreo", basico: false, profesional: false, empresarial: true },
];
