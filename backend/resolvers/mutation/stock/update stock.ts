import prisma from "@/lib/prisma";
import { MutationResolvers } from "@/types/generated";
import { GraphQLError } from "graphql";

export const updateStock: MutationResolvers["updateStock"] = async (
  _,
  { id, data }
) => {
  let productConnect = undefined;

  if (data.product) {
    const product = await prisma.product.findFirst({
      where: { title: data.product },
    });
    if (!product) throw new GraphQLError("Бараа олдсонгүй");
    productConnect = { connect: { id: product.id } };
  }

  const stock = await prisma.productStock.update({
    where: { id },
    data: {
      ...(productConnect && { product: productConnect }),
      ...(data.pieces != null && { pieces: { set: data.pieces } }),
      ...(data.is_delivered != null && {
        is_delivered: { set: data.is_delivered },
      }),
    },
    include: { product: true },
  });

  return {
    updated: true,
    stock,
  };
};
