import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { compareRows } from "@/lib/plans";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-4 text-[color:var(--color-accent)]" />;
  if (value === false) return <X className="mx-auto size-4 text-white/25" />;
  return <span className="text-xs text-white/70">{value}</span>;
}

export function Comparison() {
  return (
    <section className="relative py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
            Compara los paquetes
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-white/60">
                <tr>
                  <th className="px-5 py-4 font-medium">Característica</th>
                  <th className="px-5 py-4 text-center font-medium">Básico</th>
                  <th className="px-5 py-4 text-center font-medium text-[color:var(--color-accent)]">
                    Profesional
                  </th>
                  <th className="px-5 py-4 text-center font-medium">Empresarial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {compareRows.map((r) => (
                  <tr key={r.feature} className="hover:bg-white/[0.02]">
                    <th className="px-5 py-3.5 text-left font-normal text-white/80">{r.feature}</th>
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
