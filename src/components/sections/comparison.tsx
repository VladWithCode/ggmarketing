import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { compareRows } from "@/lib/plans";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-4 text-[color:var(--color-accent-2)]" />;
  if (value === false) return <X className="mx-auto size-4 text-[color:var(--color-price)]/70" />;
  return <span className="text-xs text-[color:var(--color-muted)]">{value}</span>;
}

export function Comparison() {
  return (
    <section className="relative bg-white py-20">
      <div className="container-page">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
            Compara los <span className="text-gradient">planes</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-[color:var(--color-border)] shadow-soft">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-[color:var(--color-bg)] text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                <tr>
                  <th className="px-5 py-4 font-semibold">Característica</th>
                  <th className="px-5 py-4 text-center font-semibold">Emprendedor</th>
                  <th className="px-5 py-4 text-center font-semibold text-[color:var(--color-accent)]">Empresario</th>
                  <th className="px-5 py-4 text-center font-semibold">Magnate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--color-border)] bg-white">
                {compareRows.map((r) => (
                  <tr key={r.feature} className="hover:bg-[color:var(--color-bg)]/60">
                    <th className="px-5 py-3.5 text-left font-normal text-[color:var(--color-fg)]/80">{r.feature}</th>
                    <td className="px-5 py-3.5 text-center"><Cell value={r.basico} /></td>
                    <td className="px-5 py-3.5 text-center"><Cell value={r.profesional} /></td>
                    <td className="px-5 py-3.5 text-center"><Cell value={r.empresarial} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
