import { Reveal } from "@/components/ui/reveal";

// TODO: reemplazar con logos reales de GG Marketing (con permiso).
const clients = [
  { name: "El Kilate", monogram: "EK", url: "https://elkilate.com.mx/" },
  { name: "Maxi-Pollo", monogram: "MP", url: "https://maxi-pollo.com/" },
  { name: "Caliente Durango", monogram: "CD", url: "#" },
  { name: "Proyecto Cliente", monogram: "PC", url: "#" },
  { name: "Negocio Local", monogram: "NL", url: "#" },
  { name: "Institución", monogram: "IN", url: "#" },
];

export function Clients() {
  return (
    <section className="relative bg-white py-16">
      <div className="container-page">
        <Reveal as="p" className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
          Negocios que confían en nosotros
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c, i) => {
            const isReal = c.url !== "#";
            const Tag = isReal ? "a" : "div";
            return (
              <Reveal key={c.name} delay={i * 0.05}>
                <Tag
                  {...(isReal ? { href: c.url, target: "_blank", rel: "noreferrer" } : {})}
                  className="card-hover group flex flex-col items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white px-4 py-6 text-center shadow-soft"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--color-accent)]/15 to-[color:var(--color-accent-2)]/15 font-display text-sm font-bold text-[color:var(--color-accent)] transition group-hover:scale-110">
                    {c.monogram}
                  </span>
                  <span className="text-xs font-medium text-[color:var(--color-muted)] transition group-hover:text-[color:var(--color-fg)]">
                    {c.name}
                  </span>
                </Tag>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-[color:var(--color-muted)]/70">
          Logos representativos · pendiente material de marca real
        </p>
      </div>
    </section>
  );
}
