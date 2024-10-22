import z from "zod";

export const SignupFormSchema = z.object({
    email: z
      .string()
      .min(11, "your email are invalid or too small")
      .max(255, "your email are invalid or too long"),
    password: z
      .string()
      .min(8, "your password are invalid or too small")
      .max(20, "your password are invalid or too long"),
    reEnterPassword: z
      .string()
      .min(8, "your password are invalid or too small")
      .max(20, "your password are invalid or too long"),
    phoneNumber: z
      .string()
      .min(10, "your phone number are invalid or too small")
      .max(255, "your phone number are invalid or too long"),
    userName: z
      .string()
      .min(2, "your name are invalid or too small")
      .max(20, "your name are invalid or too long"),
    city: z
      .string()
      .min(2, "your city are invalid or too small")
      .max(20, "your city are invalid or too small"),
    country: z
      .string()
      .min(2, "your country are invalid or too small")
      .max(20, "your country are invalid or too long"),
  });