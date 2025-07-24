import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import {
  MutationResolvers,
  ProductDeliveryInput,
  Response,
} from "@/types/generated";

export const createProductDelivery: MutationResolvers["createProductDelivery"] =
  async (_: unknown, { input }: { input: ProductDeliveryInput }) => {
    try {
      // Transaction ашиглаж байна
      await prisma.$transaction(async (tx) => {
        // 1. Delivery бүртгэх
        await tx.productDelivery.create({
          data: {
            productId: input.productId,
            shopId: input.shopId,
            deliveryPersonId: input.deliveryPersonId,
            quantity: input.quantity,
            unit_price: input.unitPrice ?? 0,
            total_price:
              input.totalPrice ?? (input.unitPrice ?? 0) * input.quantity,
            transaction_type: input.transactionType,
            signature: input.signature,
            productType: input.productType!,
          },
        });

        // 2. Stock-оос quantity хасах
        await tx.productStock.updateMany({
          where: { productId: input.productId },
          data: {
            pieces: { decrement: input.quantity }, // Prisma-ийн shortcut
          },
        });
      });

      return Response.Success;
    } catch (error) {
      console.error("CREATE ERROR:", error);
      throw new GraphQLError("ProductDelivery үүсгэхэд алдаа гарлаа");
    }
  };
