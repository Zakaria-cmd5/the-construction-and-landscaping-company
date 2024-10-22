import z from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(11, "your email are invalid or too small")
    .max(255, "your email are invalid or too long"),
  password: z
    .string()
    .min(8, "your password are invalid or too small")
    .max(20, "your password are invalid or too long"),
});
