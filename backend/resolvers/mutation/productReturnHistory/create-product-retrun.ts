import {
  ProductReturnInput,
  MutationResolvers,
  Response,
} from "@/app/types/generated";
import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";

export const createProductReturn: MutationResolvers["createProductReturn"] =
  async (_: unknown, { input }: { input: ProductReturnInput }) => {
    try {
      await prisma.productReturnHistory.create({
        data: {
          product: {
            connect: { id: input.productId },
          },
          shop: {
            connect: { id: input.shopId },
          },
          deliveryPerson: {
            connect: { id: input.deliveryPersonId },
          },
          pieces: input.pieces,
          signature: input.signature,
        },
      });

      return Response.Success;
    } catch (error) {
      console.error("ProductReturn Error:", error);
      throw new GraphQLError("Cannot create productReturn");
    }
  };
