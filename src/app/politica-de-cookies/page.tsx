import type { Metadata } from "next";
import { LegalNotice } from "@/components/sections/legal-notice";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = { title: "Política de cookies" };

export default function Page() {
  return (
    <article className="container-page prose-invert mx-auto max-w-3xl pt-32 pb-24">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Política de cookies</h1>
      <p className="mt-2 text-sm text-white/45">Última actualización: {new Date().getFullYear()}</p>
      <div className="mt-8">
        <LegalNotice />
      </div>

      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar
        información sobre tu visita.
      </p>

      <h2>2. Cookies que usamos</h2>
      <p>
        Este sitio usa cookies estrictamente necesarias para su funcionamiento. De forma
        opcional, podemos usar cookies de analítica para entender el uso del sitio y mejorarlo.
      </p>

      <h2>3. Control de cookies</h2>
      <p>
        Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Algunas
        funciones podrían no operar correctamente si las desactivas.
      </p>

      <h2>4. Terceros</h2>
      <p>
        Si integramos servicios de terceros (por ejemplo, analítica), estos pueden establecer
        sus propias cookies, sujetas a sus respectivas políticas.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Dudas: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </article>
  );
}
