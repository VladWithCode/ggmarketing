import { prisma } from "@/lib/prisma";

async function list() {
  if (!process.env.DATABASE_URL) return [];
  try {
    return await prisma.contact.findMany({ orderBy: { createdAt: "desc" }, take: 100 });
  } catch {
    return [];
  }
}

export default async function AdminContactos() {
  const contacts = await list();
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold">Contactos</h1>
      <p className="mt-1 text-sm text-white/55">Mensajes recibidos por formulario.</p>

      <div className="mt-8 space-y-3">
        {contacts.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-white/55">
            Sin contactos todavía.
          </div>
        )}
        {contacts.map((c) => (
          <details
            key={c.id}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.05]"
          >
            <summary className="flex cursor-pointer flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-white/55">
                  {c.email} · {new Date(c.createdAt).toLocaleString("es-MX")}
                </div>
              </div>
              <span
                className={
                  c.status === "nuevo"
                    ? "rounded-full bg-[color:var(--color-accent)]/20 px-2.5 py-0.5 text-xs text-[color:var(--color-accent)]"
                    : "rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60"
                }
              >
                {c.status}
              </span>
            </summary>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              {c.phone && <p><strong className="text-white/55">Teléfono:</strong> {c.phone}</p>}
              {c.company && <p><strong className="text-white/55">Empresa:</strong> {c.company}</p>}
              {c.projectType && <p><strong className="text-white/55">Tipo:</strong> {c.projectType}</p>}
              {c.budget && <p><strong className="text-white/55">Presupuesto:</strong> {c.budget}</p>}
              <p className="whitespace-pre-wrap pt-2">{c.message}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
