import { QueryResolvers, TransactionEnum } from "@/app/types/generated";
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
    createdAt: delivery.created_at, // ✅ rename хийв
    unitPrice: delivery.unit_price, // ✅ rename хийв
    totalPrice: delivery.total_price, // ✅ rename хийв
    transactionType: delivery.transaction_type as TransactionEnum,
    quantity: delivery.quantity,
    signature: delivery.signature,

    // Хамааралтай обьектууд
    product: delivery.product,
    shop: delivery.shop,
    deliveryPerson: delivery.deliveryPerson,
  }));
};
