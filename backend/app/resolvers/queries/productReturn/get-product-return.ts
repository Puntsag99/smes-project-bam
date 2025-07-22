import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/app/types/generated";

export const Return: QueryResolvers["Return"] = async () => {
  const productsReturn = await prisma.productReturnHistory.findMany({
    orderBy: { created_at: "desc" },
  });
  return productsReturn;
};
