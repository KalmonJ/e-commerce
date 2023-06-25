import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./modules/user/resolvers";
import { productResolver } from "./modules/product/resolvers";
import { categoryResolvers } from "./modules/category/resolvers";

export const resolvers = mergeResolvers([
  userResolver,
  productResolver,
  categoryResolvers,
]);
