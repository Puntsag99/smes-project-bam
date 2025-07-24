import { QueryResolvers, TransactionEnum } from "@/types/generated";
import prisma from "@/lib/prisma";

export const productDelivery: QueryResolvers["productDelivery"] = async () => {
  const deliveries = await prisma.productDelivery.findMany({
    include: {
      product: true,
      shop: true,
      deliveryPerson: true,
    },
  });

  return deliveries.map((delivery) => ({
    id: delivery.id,
    productId: delivery.productId,
    shopId: delivery.shopId,
    deliveryPersonId: delivery.deliveryPersonId,
    createdAt: delivery.created_at,
    unitPrice: delivery.unit_price,
    totalPrice: delivery.total_price,
    transactionType: delivery.transaction_type as TransactionEnum,
    quantity: delivery.quantity,
    signature: delivery.signature,

    product: delivery.product,
    shop: delivery.shop,
    deliveryPerson: delivery.deliveryPerson,
  }));
};
