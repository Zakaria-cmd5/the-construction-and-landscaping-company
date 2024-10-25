import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import prisma from "../../prisma/client";

export async function getCurrentUser() {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  const User = await prisma.user.findFirst({
    where: {
      id: session?.userId?.toString(),
    },
  });

  return {
    id: User?.id,
    name: User?.userName,
    country: User?.country,
    city: User?.city,
    phoneNumber: User?.phoneNumber,
    email: User?.email,
    image: User?.image,
  };
}
