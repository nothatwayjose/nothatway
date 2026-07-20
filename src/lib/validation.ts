import { z } from "zod";

// Shared schema — used by the client for hints AND by the server as the source of truth.
export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name.").max(120),
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  reason: z.string().min(1, "Please select a reason."),
  message: z.string().trim().min(10, "Please add a little more detail (10+ characters).").max(4000),
  // Honeypot: real users never fill this. If present, we reject silently.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
