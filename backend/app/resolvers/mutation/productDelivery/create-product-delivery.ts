import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import {
  MutationResolvers,
  Response,
  ProductDeliveryInput,
} from "@/app/types/generated";

export const createProductDelivery: MutationResolvers["createProductDelivery"] =
  async (_: unknown, { input }: { input: ProductDeliveryInput }) => {
    try {
      await prisma.productDelivery.create({ data: input });

      return Response.Success;
    } catch (error) {
      console.error("CREATE ERROR:", error);

      throw new GraphQLError("Cannot create ProductDelivery");
    }
  };
