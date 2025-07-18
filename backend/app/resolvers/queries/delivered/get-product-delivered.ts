import prisma from "@/lib/prisma";
import { QueryResolvers } from "@/app/types/generated";
import { OrderStatus as GraphQLEnumOrderStatus } from "@/app/types/generated";

export const productDelivery: QueryResolvers["productDelivery"] = async () => {
  const deliveries = await prisma.productDelivery.findMany({
    include: {
      product: true,
      deliveryPerson: true,
    },
    orderBy: { created_at: "desc" },
  });

  return deliveries.map((item) => ({
    ...item,
    deliveryDate: item.deliveryDate ? item.deliveryDate.toISOString() : null,
    createdAt: item.created_at.toISOString(),

    status: item.status as unknown as GraphQLEnumOrderStatus,
  }));
};
