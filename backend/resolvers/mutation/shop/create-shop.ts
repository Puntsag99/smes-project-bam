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
    // Хэрвээ Prisma schema нь camelCase бол энд map хий
    await prisma.shop.create({
      data: {
        name: input.name,
        address: input.address,
        email: input.email,
        is_active: input.is_active,
        phone_number: input.phone_number, // ← Prisma model дотор энэ нэр байгааг шалга
      },
    });

    return Response.Success;
  } catch (error) {
    console.error("Shop create error:", error); // Алдаа log гарга
    throw new GraphQLError("Cannot create shop: " + (error as Error).message);
  }
};
