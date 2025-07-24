import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/app/types/generated";
export const shop: QueryResolvers["shop"] = async () => {
  const shops = await prisma.shop.findMany();
  return shops;
};
