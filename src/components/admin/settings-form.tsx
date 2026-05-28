"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Save } from "lucide-react";
import { settingsSchema, type SettingsInput } from "@/lib/settings-schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const fields: { name: keyof SettingsInput; label: string; placeholder?: string }[] = [
  { name: "siteName", label: "Nombre del sitio" },
  { name: "tagline", label: "Tagline" },
  { name: "email", label: "Email", placeholder: "contacto@sibradgo.com" },
  { name: "phone", label: "Teléfono" },
  { name: "whatsappNumber", label: "WhatsApp (solo dígitos)", placeholder: "528000000000" },
  { name: "instagramUrl", label: "Instagram URL" },
  { name: "facebookUrl", label: "Facebook URL" },
  { name: "linkedinUrl", label: "LinkedIn URL" },
  { name: "githubUrl", label: "GitHub URL" },
  { name: "address", label: "Dirección (opcional)" },
];

export function SettingsForm({ initial }: { initial: SettingsInput }) {
  const [saving, setSaving] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsInput>({ resolver: zodResolver(settingsSchema), defaultValues: initial });

  async function onSubmit(data: SettingsInput) {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      toast.success("Configuración guardada");
    } catch {
      toast.error("Error al guardar. ¿DATABASE_URL configurada?");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className="space-y-2">
            <Label htmlFor={f.name}>{f.label}</Label>
            <Input id={f.name} placeholder={f.placeholder} {...register(f.name)} />
            {errors[f.name] && (
              <p className="text-xs text-red-400">{errors[f.name]?.message as string}</p>
            )}
          </div>
        ))}
      </div>
      <Button type="submit" variant="accent" disabled={saving}>
        <Save className="size-4" /> {saving ? "Guardando…" : "Guardar configuración"}
      </Button>
    </form>
  );
}
