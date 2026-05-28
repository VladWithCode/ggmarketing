import {
  Code2,
  LayoutDashboard,
  Smartphone,
  Cog,
  BarChart3,
  Database,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "desarrollo-web",
    title: "Desarrollo web",
    description:
      "Sitios y plataformas web rápidas, accesibles y optimizadas para SEO.",
    Icon: Code2,
  },
  {
    slug: "sistemas-administrativos",
    title: "Sistemas administrativos",
    description:
      "Sistemas a medida para gestionar tu operación: clientes, inventarios, ventas, reportes.",
    Icon: LayoutDashboard,
  },
  {
    slug: "aplicaciones-moviles",
    title: "Aplicaciones móviles",
    description:
      "Apps iOS y Android con sincronización, notificaciones y experiencia nativa.",
    Icon: Smartphone,
  },
  {
    slug: "automatizacion",
    title: "Automatización de procesos",
    description:
      "Automatizamos tareas repetitivas y conectamos tus herramientas existentes.",
    Icon: Cog,
  },
  {
    slug: "dashboards",
    title: "Dashboards y reportes",
    description:
      "Tableros interactivos con métricas clave para tomar decisiones con datos.",
    Icon: BarChart3,
  },
  {
    slug: "integracion-bd",
    title: "Integración de bases de datos",
    description:
      "Conectamos sistemas, migramos datos y construimos APIs confiables.",
    Icon: Database,
  },
  {
    slug: "soporte",
    title: "Soporte y mantenimiento",
    description:
      "Acompañamos tu producto con actualizaciones, monitoreo y mejoras continuas.",
    Icon: LifeBuoy,
  },
];

export const packages = [
  {
    name: "Landing / sitio informativo",
    price: "Desde cotización personalizada",
    features: [
      "Diseño moderno mobile-first",
      "Hasta 5 secciones",
      "SEO básico",
      "Formulario de contacto",
      "Deploy en Vercel",
    ],
  },
  {
    name: "Sistema web personalizado",
    price: "Desde cotización personalizada",
    features: [
      "Módulos a medida",
      "Panel administrativo",
      "Base de datos PostgreSQL",
      "Autenticación de usuarios",
      "Integraciones de terceros",
    ],
    highlight: true,
  },
  {
    name: "Plataforma completa / empresarial",
    price: "Desde cotización personalizada",
    features: [
      "Arquitectura escalable",
      "Multi-rol y multi-cliente",
      "Reportes y dashboards",
      "Integraciones complejas",
      "Soporte continuo",
    ],
  },
];
