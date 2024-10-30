"use server";

import { ChanegPasswordSchema } from "@/schemas/changePasswordSchema";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import prisma from "../../prisma/client";

async function hashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

interface ChangePasswordFormState {
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

export async function changePasswordAction(
  prevState: ChangePasswordFormState,
  formData: FormData
): Promise<ChangePasswordFormState> {
  const userName = formData.get("userName");
  const email = formData.get("email");
  const newPassword = formData.get("password");
  const reEnterPassword = formData.get("reEnterPassword");
  const phoneNumber = formData.get("phoneNumber");
  const city = formData.get("city");
  const country = formData.get("country");

  const validation = ChanegPasswordSchema.safeParse({
    userName,
    email,
    newPassword,
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

  if (newPassword !== reEnterPassword) {
    return {
      message: "Password and Re Enter Password Must be matched",
    };
  }

  const User = await prisma.user.findFirst({
    where: {
      userName: validation.data.userName,
    },
  });

  const isItTheSameUserCondition =
    User?.email !== email ||
    User.userName !== userName ||
    User.country !== country ||
    User.phoneNumber !== phoneNumber ||
    User.city !== city;

  if (isItTheSameUserCondition) {
    return {
      message: "Pleas Enter Your Correct Information To Change Your Password",
    };
  }

  const hashedPassword = await hashPassword(validation.data.newPassword);

  try {
    await prisma.user.update({
      where: {
        id: User.id,
      },
      data: {
        password: hashedPassword,
      },
    });
  } catch (error: unknown) {
    console.log(error);
    return { errors: { password: ["Somthing Went Wrong"] } };
  }

  redirect("/login");
}
