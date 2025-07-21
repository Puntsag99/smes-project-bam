import {
  MutationResolvers,
  CreateShopInput,
  Response,
} from "@/app/types/generated";
import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";

export const createShop: MutationResolvers["createShop"] = async (
  _: unknown,
  { input }: { input: CreateShopInput }
) => {
  try {
    await prisma.shop.create({ data: input });
    return Response.Success;
  } catch (error) {
    throw new GraphQLError("Cannot create shop");
  }
};
