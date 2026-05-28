import { z } from "zod";

export const planSchema = z.object({
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/, "solo minúsculas, números y guiones"),
  name: z.string().min(2).max(80),
  tagline: z.string().min(2).max(200),
  priceLabel: z.string().min(2).max(120),
  features: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  order: z.coerce.number().int().default(0),
});

export type PlanInput = z.infer<typeof planSchema>;
