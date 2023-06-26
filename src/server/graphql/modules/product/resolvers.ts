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

    featuredSectionProducts: async (_, __, ctx) => {
      const zx9Speaker = "64349684e26102064afc575c";
      const zx7Speaker = "6434a0194b17ad2127f2358a";
      const yx1Earphones = "6434a11d4b17ad2127f23591";

      const productsSection = await ctx.product.find<Product>({
        _id: {
          $in: [zx9Speaker, zx7Speaker, yx1Earphones],
        },
      });

      return productsSection;
    },
  },
};
