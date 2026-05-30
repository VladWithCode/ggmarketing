import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const clients = [
  { name: "SIBRA", monogram: "SI", tag: "Inmobiliaria", url: "https://sibra.mx" },
  { name: "Nook Creativo", monogram: "NK", tag: "Agencia creativa", url: "https://nookcreativo.mx" },
  { name: "La Eléctrica", monogram: "LE", tag: "Negocio local", url: "https://elektrk.vercel.app/" },
];

export function Clients() {
  return (
    <section className="relative bg-white py-16">
      <div className="container-page">
        <Reveal as="p" className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
          Negocios que confían en nosotros
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="card-hover group flex h-full flex-col items-center gap-3 rounded-3xl border border-[color:var(--color-border)] bg-white px-5 py-7 text-center shadow-soft"
              >
                <span className="grid size-14 place-items-center rounded-2xl grad-brand font-display text-base font-extrabold text-white shadow-soft transition group-hover:-translate-y-0.5">
                  {c.monogram}
                </span>
                <span className="mt-1 font-display text-base font-bold text-[color:var(--color-fg)]">
                  {c.name}
                </span>
                <span className="inline-flex items-center rounded-full bg-[color:var(--color-accent)]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
                  Proyecto real · {c.tag}
                </span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[color:var(--color-muted)] transition group-hover:text-[color:var(--color-accent)]">
                  Ver sitio <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
