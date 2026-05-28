"use client";

import { motion } from "framer-motion";

// TODO: reemplazar con clientes/logos reales de GG Marketing (con permiso).
// Monograma elegante como placeholder — sin logos externos random.
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
    <section className="relative py-20">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-medium uppercase tracking-[0.25em] text-white/45"
        >
          Negocios que confían en nosotros
        </motion.p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c, i) => {
            const isReal = c.url !== "#";
            const Tag = isReal ? "a" : "div";
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Tag
                  {...(isReal ? { href: c.url, target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center transition hover:border-white/25 hover:bg-white/[0.04]"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--color-accent)]/25 to-[color:var(--color-accent-2)]/25 font-display text-sm font-bold text-white/80 transition group-hover:text-white">
                    {c.monogram}
                  </span>
                  <span className="text-xs font-medium text-white/45 transition group-hover:text-white/80">
                    {c.name}
                  </span>
                </Tag>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-white/25">
          {/* TODO: reemplazar monogramas por logos reales con permiso del cliente. */}
          Logos representativos · pendiente material de marca real
        </p>
      </div>
    </section>
  );
}
