import { Product, Resolvers } from "@/generated/graphql";
import { GraphQLError } from "graphql";

export const productResolver: Resolvers = {
  Query: {
    product: async (_, input, ctx) => {
      const product = await ctx.product.findOne<Product>({
        _id: input.id,
      });

      if (!product) throw new GraphQLError("Product not found!");

      return product;
    },
  },
};
