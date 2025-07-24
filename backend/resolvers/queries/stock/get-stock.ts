import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/types/generated";
export const stock: QueryResolvers["stock"] = async () => {
  const stocks = await prisma.productStock.findMany({
    include: {
      product: true,
    },
  });
  return stocks;
};
