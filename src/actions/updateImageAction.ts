"use server";

import { getCurrentUser } from "@/queries/getCurrentUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "../../prisma/client";

export async function updateImageAction(
  formData: FormData,
  profileImage: string
) {
  const user = await getCurrentUser();

  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        image: profileImage,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/profile");
  redirect("/");
}
