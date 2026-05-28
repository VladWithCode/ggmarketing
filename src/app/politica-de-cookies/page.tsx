import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de cookies" };

export default function Page() {
  return (
    <article className="container-page prose prose-invert max-w-3xl py-20">
      <h1>Política de cookies</h1>
      <p>
        Este sitio usa cookies estrictamente necesarias para su funcionamiento y, de
        manera opcional, cookies de analítica.
      </p>
      <p>TODO: Reemplazar con texto legal definitivo revisado por asesor.</p>
    </article>
  );
}
