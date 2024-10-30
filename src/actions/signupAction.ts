"use server";

import { SignupSchema } from "@/schemas/signupFormSchema";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import prisma from "../../prisma/client";

async function hashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

interface CreateUserFormState {
  errors?: {
    email?: string[];
    password?: string[];
    reEnterPassword?: string[];
    phoneNumber?: string[];
    userName?: string[];
    city?: string[];
    country?: string[];
  };
  message?: string | null;
}

export async function signupAction(
  prevState: CreateUserFormState,
  formData: FormData
): Promise<CreateUserFormState> {
  const userName = formData.get("userName");
  const email = formData.get("email");
  const password = formData.get("password");
  const reEnterPassword = formData.get("reEnterPassword");
  const phoneNumber = formData.get("phoneNumber");
  const city = formData.get("city");
  const country = formData.get("country");

  const validation = SignupSchema.safeParse({
    userName,
    email,
    password,
    reEnterPassword,
    phoneNumber,
    city,
    country,
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: "Signup Error",
    };
  }

  if (password !== reEnterPassword) {
    return {
      message: "Password and Re Enter Password Must be matched",
    };
  }

  const User = await prisma.user.findFirst({
    where: {
      userName: validation.data.userName,
    },
  });

  if (User?.userName === userName) {
    return {
      message: "User name already taken",
    };
  }

  if (User?.email === email) {
    return {
      message: "Email already exists",
    };
  }

  const existedPhoneNumber = await prisma.user.findFirst({
    where: {
      phoneNumber: validation.data.phoneNumber,
    },
  });

  if (existedPhoneNumber) {
    return {
      message: "Phone number already exists",
    };
  }

  const hashedPassword = await hashPassword(validation.data.password);

  try {
    await prisma.user.create({
      data: {
        userName: validation.data.userName,
        city: validation.data.city,
        country: validation.data.country,
        email: validation.data.email,
        password: hashedPassword,
        phoneNumber: validation.data.phoneNumber,
      },
    });
  } catch (error: unknown) {
    console.log(error);
    return { errors: { email: ["This email is already in use."] } };
  }

  redirect("/login");
}
