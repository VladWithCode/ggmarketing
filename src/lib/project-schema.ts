import { z } from "zod";

export const projectSchema = z.object({
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/, "solo minúsculas, números y guiones"),
  title: z.string().min(2).max(120),
  clientName: z.string().max(120).optional().or(z.literal("")),
  shortDescription: z.string().min(10).max(280),
  fullDescription: z.string().min(10).max(5000),
  category: z.string().min(2).max(80),
  technologies: z.array(z.string()).default([]),
  services: z.array(z.string()).default([]),
  heroImage: z.string().url().or(z.string().startsWith("/")),
  galleryImages: z.array(z.string()).default([]),
  liveUrl: z.string().url().optional().or(z.literal("")),
  repoUrl: z.string().url().optional().or(z.literal("")),
  results: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  order: z.coerce.number().int().default(0),
});

export type ProjectInput = z.infer<typeof projectSchema>;
