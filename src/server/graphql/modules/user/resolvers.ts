import { Resolvers, CreateUser, User } from "@/generated/graphql";
import { GraphQLError } from "graphql";
import { HydratedDocument } from "mongoose";

const users: CreateUser[] = [];

export const userResolver: Resolvers = {
  Query: {
    getUserById: async () => {
      return {
        email: "any_email",
        id_: "sdfsdfsdf",
        _id: "anyid",
        phoneNumber: "(34)",
        name: "sada",
        username: "dsfsdf",
        createdAt: "fsdfsdf",
        updatedAt: "sdfsdf",
      };
    },

    getUserByEmail: async (_, { email }, ctx) => {
      const user = await ctx.user.findOne<User>({ email });
      if (!user)
        throw new GraphQLError("User not found", {
          extensions: {
            code: "NOT_FOUND_ERROR",
          },
        });
      return user;
    },
  },

  Mutation: {
    createUser: async (_, { user }, ctx) => {
      const response: HydratedDocument<User> = new ctx.user(user);
      const savedUser = (await response.save()) as User;
      return savedUser;
    },
  },
};
