import Link from "next/link";
import { prisma } from "@/lib/prisma";

async function stats() {
  if (!process.env.DATABASE_URL) {
    return { projects: 0, contacts: 0, nuevos: 0 };
  }
  try {
    const [projects, contacts, nuevos] = await Promise.all([
      prisma.project.count(),
      prisma.contact.count(),
      prisma.contact.count({ where: { status: "nuevo" } }),
    ]);
    return { projects, contacts, nuevos };
  } catch {
    return { projects: 0, contacts: 0, nuevos: 0 };
  }
}

export default async function AdminDashboard() {
  const s = await stats();
  const cards = [
    { label: "Proyectos publicados", value: s.projects, href: "/admin/proyectos" },
    { label: "Contactos totales", value: s.contacts, href: "/admin/contactos" },
    { label: "Contactos nuevos", value: s.nuevos, href: "/admin/contactos" },
  ];
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold">Dashboard</h1>
      <p className="mt-1 text-sm text-white/55">Resumen rápido del sitio.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25"
          >
            <div className="text-xs uppercase tracking-wider text-white/45">{c.label}</div>
            <div className="mt-3 font-display text-4xl font-semibold">{c.value}</div>
          </Link>
        ))}
      </div>

      {!process.env.DATABASE_URL && (
        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-amber-100">
          <strong>DATABASE_URL no configurada.</strong> Mostrando ceros. Configura Neon en
          <code className="ml-1 rounded bg-black/30 px-1.5 py-0.5">.env.local</code> y corre
          <code className="ml-1 rounded bg-black/30 px-1.5 py-0.5">pnpm db:push</code>.
        </div>
      )}
    </div>
  );
}
