"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Save, Trash2, Upload } from "lucide-react";
import { projectSchema, type ProjectInput } from "@/lib/project-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useUploadThing } from "@/lib/uploadthing";

type Props = {
  id?: string;
  initial?: Partial<ProjectInput>;
};

function CsvField({
  value,
  onChange,
  placeholder,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  return (
    <Input
      value={value.join(", ")}
      onChange={(e) => onChange(e.target.value.split(",").map((s) => s.trim()).filter(Boolean))}
      placeholder={placeholder}
    />
  );
}

export function ProjectForm({ id, initial }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { startUpload } = useUploadThing("projectImage");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProjectInput>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      slug: initial?.slug ?? "",
      title: initial?.title ?? "",
      clientName: initial?.clientName ?? "",
      shortDescription: initial?.shortDescription ?? "",
      fullDescription: initial?.fullDescription ?? "",
      category: initial?.category ?? "",
      technologies: initial?.technologies ?? [],
      services: initial?.services ?? [],
      heroImage: initial?.heroImage ?? "",
      galleryImages: initial?.galleryImages ?? [],
      liveUrl: initial?.liveUrl ?? "",
      repoUrl: initial?.repoUrl ?? "",
      featured: initial?.featured ?? false,
      published: initial?.published ?? true,
      order: initial?.order ?? 0,
    },
  });

  const heroImage = watch("heroImage");
  const gallery = watch("galleryImages");

  async function handleUpload(files: FileList | null, target: "hero" | "gallery") {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      const res = await startUpload(Array.from(files));
      if (!res) throw new Error("upload failed");
      const urls = res.map((r) => r.ufsUrl ?? r.url);
      if (target === "hero") setValue("heroImage", urls[0]);
      else setValue("galleryImages", [...gallery, ...urls]);
      toast.success("Imagen subida");
    } catch {
      toast.error("Error al subir. Verifica UPLOADTHING_TOKEN.");
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(data: ProjectInput) {
    setSaving(true);
    try {
      const method = id ? "PUT" : "POST";
      const url = id ? `/api/admin/projects/${id}` : "/api/admin/projects";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      toast.success("Guardado");
      router.push("/admin/proyectos");
      router.refresh();
    } catch {
      toast.error("Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  async function onDelete() {
    if (!id || !confirm("¿Eliminar este proyecto?")) return;
    const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Eliminado");
      router.push("/admin/proyectos");
      router.refresh();
    } else toast.error("Error al eliminar");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Título *</Label>
          <Input {...register("title")} />
          {errors.title && <p className="text-xs text-red-400">{errors.title.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Slug *</Label>
          <Input {...register("slug")} placeholder="mi-proyecto" />
          {errors.slug && <p className="text-xs text-red-400">{errors.slug.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Cliente</Label>
          <Input {...register("clientName")} />
        </div>
        <div className="space-y-2">
          <Label>Categoría *</Label>
          <Input {...register("category")} placeholder="Sistema web" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Descripción corta *</Label>
        <Textarea rows={2} {...register("shortDescription")} />
        {errors.shortDescription && <p className="text-xs text-red-400">{errors.shortDescription.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Descripción completa *</Label>
        <Textarea rows={6} {...register("fullDescription")} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Tecnologías (separadas por coma)</Label>
          <Controller
            control={control}
            name="technologies"
            render={({ field }) => (
              <CsvField value={field.value} onChange={field.onChange} placeholder="Next.js, PostgreSQL" />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label>Servicios (separados por coma)</Label>
          <Controller
            control={control}
            name="services"
            render={({ field }) => (
              <CsvField value={field.value} onChange={field.onChange} placeholder="Desarrollo web" />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label>URL en vivo</Label>
          <Input {...register("liveUrl")} placeholder="https://…" />
        </div>
        <div className="space-y-2">
          <Label>Repositorio</Label>
          <Input {...register("repoUrl")} placeholder="https://github.com/…" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Imagen hero *</Label>
        <div className="flex flex-wrap items-center gap-3">
          {heroImage && (
            <Image
              src={heroImage}
              alt=""
              width={160}
              height={96}
              unoptimized
              className="h-24 w-40 rounded-lg border border-white/10 object-cover"
            />
          )}
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/5">
            <Upload className="size-4" />
            {uploading ? "Subiendo…" : "Subir imagen"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleUpload(e.target.files, "hero")}
            />
          </label>
          <Input className="flex-1" placeholder="o pega URL" {...register("heroImage")} />
        </div>
        {errors.heroImage && <p className="text-xs text-red-400">{errors.heroImage.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Galería</Label>
        <div className="flex flex-wrap gap-2">
          {gallery.map((src, i) => (
            <div key={`${src}-${i}`} className="relative">
              <Image
                src={src}
                alt=""
                width={112}
                height={80}
                unoptimized
                className="h-20 w-28 rounded-lg border border-white/10 object-cover"
              />
              <button
                type="button"
                aria-label="Quitar"
                className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-black/80 text-xs"
                onClick={() => setValue("galleryImages", gallery.filter((_, j) => j !== i))}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <label className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/5">
          <Upload className="size-4" />
          Agregar imágenes
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleUpload(e.target.files, "gallery")}
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <input type="checkbox" {...register("featured")} className="size-4" />
          <span className="text-sm">Destacado en home</span>
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

      <div className="flex flex-wrap items-center gap-3 pt-4">
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
