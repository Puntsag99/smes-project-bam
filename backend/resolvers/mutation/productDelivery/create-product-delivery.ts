import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import {
  MutationResolvers,
  ProductDeliveryInput,
  Response,
} from "@/app/types/generated";

export const createProductDelivery: MutationResolvers["createProductDelivery"] =
  async (_: unknown, { input }: { input: ProductDeliveryInput }) => {
    try {
      const total_price =
        input.totalPrice ?? (input.unitPrice ?? 0) * input.quantity;

      await prisma.productDelivery.create({
        data: {
          productId: input.productId,
          shopId: input.shopId,
          deliveryPersonId: input.deliveryPersonId,
          quantity: input.quantity,
          unit_price: input.unitPrice!,
          total_price,
          transaction_type: input.transactionType,
          signature: input.signature,
          productType: input.productType!,
        },
      });

      return Response.Success;
    } catch (error) {
      console.error("CREATE ERROR:", error);

      throw new GraphQLError("ProductDelivery үүсгэхэд алдаа гарлаа");
    }
  };
