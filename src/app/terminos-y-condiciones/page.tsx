import type { Metadata } from "next";
import { LegalNotice } from "@/components/sections/legal-notice";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function Page() {
  return (
    <article className="container-page prose-invert mx-auto max-w-3xl pt-32 pb-24">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Términos y condiciones</h1>
      <p className="mt-2 text-sm text-white/45">Última actualización: {new Date().getFullYear()}</p>
      <div className="mt-8">
        <LegalNotice />
      </div>

      <h2>1. Aceptación</h2>
      <p>
        Al navegar y usar {siteConfig.name} aceptas estos términos. Si no estás de acuerdo,
        te pedimos no utilizar el sitio.
      </p>

      <h2>2. Servicios</h2>
      <p>
        {siteConfig.name} ofrece servicios de desarrollo de software, sitios web, sistemas,
        aplicaciones y automatización. La información de paquetes es referencial; el alcance y
        precio final se definen por cotización.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        El contenido, marca y diseño de este sitio son propiedad de {siteConfig.name}, salvo
        materiales de terceros debidamente identificados.
      </p>

      <h2>4. Cotizaciones</h2>
      <p>
        Las cotizaciones tienen vigencia limitada y pueden variar según los requerimientos
        finales del proyecto. Ningún contenido del sitio constituye una oferta vinculante.
      </p>

      <h2>5. Limitación de responsabilidad</h2>
      <p>
        El sitio se ofrece &quot;tal cual&quot;. No garantizamos disponibilidad ininterrumpida ni
        ausencia total de errores.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Dudas sobre estos términos: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </article>
  );
}
