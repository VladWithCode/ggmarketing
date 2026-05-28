import type { Metadata } from "next";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function Page() {
  return (
    <article className="container-page prose prose-invert max-w-3xl py-20">
      <h1>Términos y condiciones</h1>
      <p>
        Uso del sitio sibradgo.com. Al navegar este sitio aceptas los términos descritos
        en esta sección.
      </p>
      <p>TODO: Reemplazar con texto legal definitivo revisado por asesor.</p>
    </article>
  );
}
