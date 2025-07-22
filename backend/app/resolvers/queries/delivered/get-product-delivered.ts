import { ProductDelivery } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";

export const productDelivery = async () => {
  const deliveries = await prisma.productDelivery.findMany({
    include: {
      product: true,
      shop: true,
      deliveryPerson: true,
    },
  });

  return deliveries.map((d: ProductDelivery) => ({
    id: d.id,
    productId: d.productId,

    shopId: d.shopId,

    deliveryPersonId: d.deliveryPersonId,

    quantity: d.quantity,
    unitPrice: d.unit_price,
    totalPrice: d.total_price, // Prisma field
    transactionType: d.transaction_type, // enum-ийг тохируулах
    createdAt: d.created_at,
    signature: d.signature,
  }));
};
