import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nombre demasiado corto").max(80),
  email: z.string().email("Email inválido"),
  phone: z.string().max(30).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  projectType: z.string().max(80).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(10, "Cuéntanos un poco más").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
