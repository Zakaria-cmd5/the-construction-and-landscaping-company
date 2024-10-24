import z from "zod";

export const SignupSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email format")
      .min(11, "Your email is too short")
      .max(255, "Your email is too long")
      .trim(),
    password: z
      .string()
      .min(8, "Your password is too short")
      .max(20, "Your password is too long")
      .trim(),
    reEnterPassword: z
      .string()
      .min(8, "Your password is too short")
      .max(20, "Your password is too long")
      .trim(),
    phoneNumber: z
      .string()
      .min(10, "Your phone number is too short")
      .max(15, "Your phone number is too long")
      .trim(),
    userName: z
      .string()
      .min(2, "Your name is too short")
      .max(20, "Your name is too long")
      .trim(),
    city: z
      .string()
      .min(2, "Your city is too short")
      .max(20, "Your city is too long")
      .trim(),
    country: z
      .string()
      .min(2, "Your country is too short")
      .max(20, "Your country is too long")
      .trim(),
  })
  .refine((data) => data.password === data.reEnterPassword, {
    message: "Passwords do not match",
    path: ["reEnterPassword"],
  });
