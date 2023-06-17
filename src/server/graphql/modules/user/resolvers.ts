import { CreateUser, Resolvers, User } from "@/generated/graphql";
import { GraphQLError } from "graphql";
import { HydratedDocument } from "mongoose";
import * as bcrypt from "bcrypt";

export const userResolver: Resolvers = {
  Query: {
    user: async (_, input, ctx) => {
      const user = await ctx.user.findOne<User>({ _id: input.id });
      if (!user) throw new GraphQLError("User not found!");
      return user;
    },
  },

  Mutation: {
    createUser: async (_, { user }, ctx) => {
      const modifiedUser: CreateUser = {
        ...user,
        password: await bcrypt.hash(user.password, 10),
      };
      const response: HydratedDocument<User> = new ctx.user(modifiedUser);
      const savedUser = (await response.save()) as User;
      return savedUser;
    },
  },
};
