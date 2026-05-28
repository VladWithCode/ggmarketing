import type { Metadata } from "next";

export const metadata: Metadata = { title: "Aviso de privacidad" };

export default function Page() {
  return (
    <article className="container-page prose prose-invert max-w-3xl py-20">
      <h1>Aviso de privacidad</h1>
      <p>
        En SIBRA DGO valoramos tu privacidad. Esta página describe cómo recolectamos y
        usamos tu información personal cuando contactas a nuestro equipo.
      </p>
      <p>TODO: Reemplazar con texto legal definitivo revisado por asesor.</p>
    </article>
  );
}
