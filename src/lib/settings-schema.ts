import { z } from "zod";

export const settingsSchema = z.object({
  siteName: z.string().min(1).max(120),
  tagline: z.string().max(200),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  whatsappNumber: z.string().min(8).max(20),
  instagramUrl: z.string().url().optional().or(z.literal("")),
  facebookUrl: z.string().url().optional().or(z.literal("")),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
  address: z.string().max(200).optional().or(z.literal("")),
});

export type SettingsInput = z.infer<typeof settingsSchema>;
