import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/types/generated";

export const Return: QueryResolvers["Return"] = async () => {
  const productsReturn = await prisma.productReturnHistory.findMany({
    orderBy: { created_at: "desc" },
    include: {
      product: true,
      shop: true,
      deliveryPerson: true,
    },
  });
  return productsReturn;
};
