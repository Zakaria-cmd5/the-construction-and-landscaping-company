import { getUserSession } from "@/utils/getUserSession";
import prisma from "../../prisma/client";

export async function getCurrentUser() {
  const sessionId = await getUserSession();

  const User = await prisma.user.findFirst({
    where: {
      id: sessionId,
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
