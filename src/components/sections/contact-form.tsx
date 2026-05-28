"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Error al enviar");
      toast.success("Mensaje enviado. Te respondemos pronto.");
      reset();
    } catch {
      toast.error("No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre *</Label>
          <Input id="name" placeholder="Tu nombre" {...register("name")} />
          {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="tu@correo.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" placeholder="618 000 0000" {...register("phone")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Input id="company" placeholder="Opcional" {...register("company")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectType">¿Qué te interesa?</Label>
          <select
            id="projectType"
            defaultValue=""
            {...register("projectType")}
            className="flex h-10 w-full rounded-md border border-white/15 bg-white/[0.03] px-3 text-sm text-white outline-none transition focus:border-[color:var(--color-accent)]/60 focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
          >
            <option value="" disabled className="bg-[color:var(--color-bg-soft)]">Selecciona una opción</option>
            {[
              "Marketing digital",
              "Publicidad en redes sociales",
              "Gestión de redes",
              "Branding",
              "Página web / landing page",
              "Campaña Meta Ads",
              "Estrategia digital",
              "Otro",
            ].map((o) => (
              <option key={o} value={o} className="bg-[color:var(--color-bg-soft)]">{o}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Presupuesto aprox.</Label>
          <Input id="budget" placeholder="Opcional" {...register("budget")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Cuéntanos sobre tu marca *</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Cuéntanos sobre tu negocio, tus objetivos en redes y qué te gustaría lograr."
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-xs text-white/45">
          Tus datos se usan solo para responderte. Ver{" "}
          <a href="/aviso-de-privacidad" className="link-underline">
            aviso de privacidad
          </a>
          .
        </p>
        <Button type="submit" variant="accent" size="lg" disabled={submitting} className="group">
          {submitting ? "Enviando…" : "Impulsar mi marca"}
          <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </form>
  );
}
