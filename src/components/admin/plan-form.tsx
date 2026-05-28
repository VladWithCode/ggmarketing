"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Save, Trash2 } from "lucide-react";
import { planSchema, type PlanInput } from "@/lib/plan-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function PlanForm({ id, initial }: { id?: string; initial?: Partial<PlanInput> }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PlanInput>({
    resolver: zodResolver(planSchema),
    defaultValues: {
      slug: initial?.slug ?? "",
      name: initial?.name ?? "",
      tagline: initial?.tagline ?? "",
      priceLabel: initial?.priceLabel ?? "Desde cotización personalizada",
      features: initial?.features ?? [],
      featured: initial?.featured ?? false,
      published: initial?.published ?? true,
      order: initial?.order ?? 0,
    },
  });

  async function onSubmit(data: PlanInput) {
    setSaving(true);
    try {
      const method = id ? "PUT" : "POST";
      const url = id ? `/api/admin/plans/${id}` : "/api/admin/plans";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      toast.success("Plan guardado");
      router.push("/admin/planes");
      router.refresh();
    } catch {
      toast.error("Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  async function onDelete() {
    if (!id || !confirm("¿Eliminar este plan?")) return;
    const res = await fetch(`/api/admin/plans/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Eliminado");
      router.push("/admin/planes");
      router.refresh();
    } else toast.error("Error al eliminar");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Nombre *</Label>
          <Input {...register("name")} />
          {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Slug *</Label>
          <Input {...register("slug")} placeholder="basico" />
          {errors.slug && <p className="text-xs text-red-400">{errors.slug.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Descripción / tagline *</Label>
        <Input {...register("tagline")} />
        {errors.tagline && <p className="text-xs text-red-400">{errors.tagline.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Precio (texto) *</Label>
        <Input {...register("priceLabel")} placeholder="Desde cotización personalizada" />
        <p className="text-xs text-white/40">Sin Stripe. Texto libre, no precio de cobro.</p>
      </div>

      <div className="space-y-2">
        <Label>Features (una por línea)</Label>
        <Controller
          control={control}
          name="features"
          render={({ field }) => (
            <Textarea
              rows={6}
              value={field.value.join("\n")}
              onChange={(e) => field.onChange(e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))}
              placeholder={"Sitio web\nDiseño responsive\nSEO básico"}
            />
          )}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <input type="checkbox" {...register("featured")} className="size-4" />
          <span className="text-sm">Destacado</span>
        </label>
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <input type="checkbox" {...register("published")} className="size-4" />
          <span className="text-sm">Publicado</span>
        </label>
        <div className="space-y-2">
          <Label>Orden</Label>
          <Input type="number" {...register("order")} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button type="submit" variant="accent" disabled={saving}>
          <Save className="size-4" /> {saving ? "Guardando…" : "Guardar"}
        </Button>
        {id && (
          <Button type="button" variant="destructive" onClick={onDelete}>
            <Trash2 className="size-4" /> Eliminar
          </Button>
        )}
      </div>
    </form>
  );
}
