import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import {
  MutationResolvers,
  Response,
  DeliveryPersonInput,
} from "@/types/generated";

export const createDeliveryPerson: MutationResolvers["createDeliveryPerson"] =
  async (_: unknown, { input }: { input: DeliveryPersonInput }) => {
    try {
      await prisma.deliveryPerson.create({ data: input });
      return Response.Success;
    } catch (error) {
      throw new GraphQLError("Cannot create DeliveryPerson");
    }
  };
