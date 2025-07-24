import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/app/types/generated";

export const product: QueryResolvers["product"] = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  // console.log("products from DB:", products);
  return products;
};
