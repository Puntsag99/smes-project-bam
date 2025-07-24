import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/types/generated";
export const shop: QueryResolvers["shop"] = async () => {
  const shops = await prisma.shop.findMany();
  return shops;
};
