import prisma from "@/lib/prisma";
import {
  MutationResolvers,
  CreateStockInput,
  Response,
} from "@/types/generated";
import { GraphQLError } from "graphql";

export const createStock: MutationResolvers["createStock"] = async (
  _: unknown,
  { input }: { input: CreateStockInput }
) => {
  try {
    const existing = await prisma.productStock.findFirst({
      where: { productId: input.product },
    });

    if (existing) {
      await prisma.productStock.update({
        where: { id: existing.id },
        data: { pieces: { increment: input.pieces } },
      });
    } else {
      await prisma.productStock.create({
        data: {
          productId: input.product,
          pieces: input.pieces,
          is_delivered: true,
        },
      });
    }

    return Response.Success;
  } catch (error) {
    console.error("Shop create error:", error); // Алдаа log гарга
    throw new GraphQLError("Cannot create shop: " + (error as Error).message);
  }
};
