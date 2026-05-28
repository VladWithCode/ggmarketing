import type { Metadata } from "next";
import { LegalNotice } from "@/components/sections/legal-notice";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = { title: "Aviso de privacidad" };

export default function Page() {
  return (
    <article className="container-page prose-invert mx-auto max-w-3xl pt-32 pb-24">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Aviso de privacidad</h1>
      <p className="mt-2 text-sm text-white/45">Última actualización: {new Date().getFullYear()}</p>
      <div className="mt-8">
        <LegalNotice />
      </div>

      <h2>1. Responsable</h2>
      <p>
        {siteConfig.name}, con domicilio en Durango, México, es responsable del tratamiento
        de los datos personales que nos proporcionas a través de este sitio.
      </p>

      <h2>2. Datos que recabamos</h2>
      <p>
        Recabamos los datos que ingresas voluntariamente en nuestro formulario de contacto:
        nombre, correo electrónico, teléfono (opcional), empresa (opcional) y el mensaje o
        descripción de tu proyecto.
      </p>

      <h2>3. Finalidad</h2>
      <p>
        Usamos tus datos únicamente para responder tu solicitud, elaborar cotizaciones y dar
        seguimiento comercial. No vendemos ni compartimos tus datos con terceros con fines
        publicitarios.
      </p>

      <h2>4. Conservación</h2>
      <p>
        Conservamos tus datos el tiempo necesario para atender tu solicitud y cumplir
        obligaciones aplicables. Puedes pedir su eliminación en cualquier momento.
      </p>

      <h2>5. Derechos ARCO</h2>
      <p>
        Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos.
        Para ejercerlos escribe a{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>6. Cambios</h2>
      <p>
        Podemos actualizar este aviso. Publicaremos cualquier cambio en esta misma página.
      </p>
    </article>
  );
}
