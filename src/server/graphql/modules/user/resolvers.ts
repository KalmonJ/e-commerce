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
  },

  Mutation: {
    createUser: async (_, { user }, ctx) => {
      const response: HydratedDocument<User> = new ctx.user(user);
      const savedUser = (await response.save()) as User;
      return savedUser;
    },
  },
};
