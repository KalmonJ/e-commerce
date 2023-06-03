import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./modules/user/resolvers";

export const resolvers = mergeResolvers([userResolver]);
