import { ProductInput, MutationResolvers, Response } from "@/types/generated";
import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";

export const createProduct: MutationResolvers["createProduct"] = async (
  _: unknown,
  { input }: { input: ProductInput }
) => {
  try {
    await prisma.product.create({ data: input });

    return Response.Success;
  } catch (error) {
    throw new GraphQLError("Cannot create product");
  }
};
