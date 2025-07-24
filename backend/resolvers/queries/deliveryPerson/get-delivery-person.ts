import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/types/generated";

export const deliveryPerson: QueryResolvers["deliveryPerson"] = async () => {
  return await prisma.deliveryPerson.findMany({
    orderBy: { createdAt: "desc" },
  });
};
