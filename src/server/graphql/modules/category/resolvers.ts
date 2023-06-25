import type { Category, Resolvers } from "@/generated/graphql";

export const categoryResolvers: Resolvers = {
  Query: {
    categories: async (_, __, ctx) => await ctx.category.find<Category>(),
  },
};
