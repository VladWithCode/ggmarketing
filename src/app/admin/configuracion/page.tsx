import { getSettings } from "@/lib/settings";
import { SettingsForm } from "@/components/admin/settings-form";

export default async function ConfigPage() {
  const s = await getSettings();
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-semibold">Configuración</h1>
      <p className="mt-1 text-sm text-white/55">
        Datos del sitio. Se usan en footer, contacto y botón de WhatsApp.
      </p>
      {!process.env.DATABASE_URL && (
        <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-100">
          DATABASE_URL no configurada. Los cambios no se guardarán hasta conectar Neon.
        </div>
      )}
      <div className="mt-8">
        <SettingsForm
          initial={{
            siteName: s.siteName,
            tagline: s.tagline,
            email: s.email,
            phone: s.phone,
            whatsappNumber: s.whatsappNumber,
            instagramUrl: s.instagramUrl,
            facebookUrl: s.facebookUrl,
            linkedinUrl: s.linkedinUrl,
            githubUrl: s.githubUrl,
            address: s.address,
          }}
        />
      </div>
    </div>
  );
}
