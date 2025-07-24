import { CustomerInput, MutationResolvers, Response } from "@/types/generated";
import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";

export const createCustomer: MutationResolvers["createCustomer"] = async (
  _: unknown,
  { input }: { input: CustomerInput }
) => {
  try {
    await prisma.customer.create({ data: input });

    return Response.Success;
  } catch (error) {
    throw new GraphQLError("Cannot create customer");
  }
};
