import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

async function list() {
  if (!process.env.DATABASE_URL) return [];
  try {
    return await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    });
  } catch {
    return [];
  }
}

export default async function AdminProyectos() {
  const projects = await list();
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold">Proyectos</h1>
          <p className="mt-1 text-sm text-white/55">{projects.length} proyectos</p>
        </div>
        <Button asChild variant="accent">
          <Link href="/admin/proyectos/new"><Plus className="size-4" /> Nuevo</Link>
        </Button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-white/55">
            <tr>
              <th className="px-4 py-3">Título</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {projects.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-white/50">
                  Sin proyectos. {process.env.DATABASE_URL ? "Crea el primero." : "Configura DATABASE_URL para empezar."}
                </td>
              </tr>
            )}
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-medium">{p.title}</td>
                <td className="px-4 py-3 text-white/65">{p.category}</td>
                <td className="px-4 py-3">
                  <span className={p.published ? "text-emerald-400" : "text-white/45"}>
                    {p.published ? "Publicado" : "Borrador"}
                  </span>
                  {p.featured && <span className="ml-2 text-[color:var(--color-accent)]">★</span>}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/proyectos/${p.id}`}
                    className="inline-flex items-center gap-1 text-white/65 hover:text-white"
                  >
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
