import type { Product, Resolvers } from "@/generated/graphql";
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

    featuredProduct: async (_, __, ctx) => {
      const featuredProductId = "6434980de26102064afc5763";
      const product = await ctx.product.findOne<Product>({
        _id: featuredProductId,
      });
      if (!product) throw new GraphQLError("Featured product not found!");
      return product;
    },
  },
};
