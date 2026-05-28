import Link from "next/link";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, FolderKanban, MessageSquare, Settings, Package } from "lucide-react";

// Admin requires Clerk env at runtime; skip static prerender.
export const dynamic = "force-dynamic";

const nav = [
  { href: "/admin", label: "Dashboard", Icon: LayoutDashboard },
  { href: "/admin/proyectos", label: "Proyectos", Icon: FolderKanban },
  { href: "/admin/planes", label: "Planes", Icon: Package },
  { href: "/admin/contactos", label: "Contactos", Icon: MessageSquare },
  { href: "/admin/configuracion", label: "Configuración", Icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
        <aside className="border-r border-white/10 bg-[color:var(--color-bg-soft)] p-5 md:sticky md:top-0 md:h-screen">
          <Link href="/admin" className="font-display text-lg font-semibold">
            SIBRA <span className="text-[color:var(--color-accent)]">Admin</span>
          </Link>
          <nav className="mt-8 space-y-1">
            {nav.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                <Icon className="size-4" />
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 border-t border-white/10 pt-5">
            <UserButton afterSignOutUrl="/" />
          </div>
        </aside>
        <div className="bg-[color:var(--color-bg)] p-6 md:p-10">{children}</div>
      </div>
    </ClerkProvider>
  );
}
