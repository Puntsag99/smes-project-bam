import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/app/types/generated";

export const deliveryPerson: QueryResolvers["deliveryPerson"] = async () => {
  return await prisma.deliveryPerson.findMany({
    orderBy: { createdAt: "desc" },
  });
};
