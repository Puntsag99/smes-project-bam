import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { MutationResolvers, Response } from "@/types/generated";

export const deleteDeliveryPerson: MutationResolvers["deleteDeliveryPerson"] =
  async (_: unknown, { id }: { id: string }) => {
    try {
      await prisma.deliveryPerson.delete({
        where: { id },
      });
      return Response.Success;
    } catch (error) {
      throw new GraphQLError("Cannot delete delivery person");
    }
  };
