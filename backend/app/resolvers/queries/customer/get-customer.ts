import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/app/types/generated";

export const customer: QueryResolvers["customer"] = async () => {
  return await prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
  });
};
