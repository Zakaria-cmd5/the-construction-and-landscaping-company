"use server";

import { createSession } from "@/lib/session";
import { LoginFormSchema } from "@/schemas/loginFormSchema";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import prisma from "../../prisma/client";

interface LoginUserFormState {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}

export async function loginAction(
  prevState: LoginUserFormState,
  formData: FormData
): Promise<LoginUserFormState> {
  const email = formData.get("email");
  const password = formData.get("password");

  const validation = LoginFormSchema.safeParse({ email, password });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: "Login Error",
    };
  }

  const User = await prisma.user.findFirst({
    where: {
      email: validation.data.email,
    },
  });

  if (User?.email !== email) {
    return {
      errors: {
        email: ["Invaild email or password"],
      },
    };
  }

  const isPasswordValid = await bcrypt.compare(
    validation.data.password,
    User.password
  );

  if (!isPasswordValid) {
    return {
      errors: { email: ["Invalid email or password"] },
    };
  }

  const userId = User.id;
  await createSession(userId);

  redirect("/");
}
