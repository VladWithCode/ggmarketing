import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

async function list() {
  if (!process.env.DATABASE_URL) return [];
  try {
    return await prisma.plan.findMany({ orderBy: { order: "asc" } });
  } catch {
    return [];
  }
}

export default async function AdminPlanes() {
  const plans = await list();
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold">Planes</h1>
          <p className="mt-1 text-sm text-white/55">{plans.length} planes · sin Stripe (CTA a contacto/WhatsApp)</p>
        </div>
        <Button asChild variant="accent">
          <Link href="/admin/planes/new"><Plus className="size-4" /> Nuevo</Link>
        </Button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-white/55">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Precio (texto)</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {plans.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-white/50">
                  {process.env.DATABASE_URL ? "Sin planes. Crea el primero o corre el seed." : "Configura DATABASE_URL para editar planes."}
                </td>
              </tr>
            )}
            {plans.map((p) => (
              <tr key={p.id} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3 text-white/65">{p.priceLabel}</td>
                <td className="px-4 py-3">
                  <span className={p.published ? "text-emerald-400" : "text-white/45"}>
                    {p.published ? "Publicado" : "Borrador"}
                  </span>
                  {p.featured && <span className="ml-2 text-[color:var(--color-accent)]">★</span>}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/planes/${p.id}`} className="inline-flex items-center gap-1 text-white/65 hover:text-white">
                    <Pencil className="size-3.5" /> Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
