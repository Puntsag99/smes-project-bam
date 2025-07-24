import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import {
  MutationResolvers,
  Response,
  UpdateDeliveryPersonInput,
} from "@/types/generated";

export const updateDeliveryPerson: MutationResolvers["updateDeliveryPerson"] =
  async (_: unknown, { input }: { input: UpdateDeliveryPersonInput }) => {
    try {
      await prisma.deliveryPerson.update({
        where: { id: input.id },
        data: {
          name: input.name ?? undefined,
          phoneNumber: input.phoneNumber ?? undefined,
        },
      });

      return Response.Success;
    } catch (error) {
      console.error("Update failed:", error);
      throw new GraphQLError("Cannot update delivery person");
    }
  };
