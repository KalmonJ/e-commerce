import { Resolvers } from "@/generated/graphql";

export const userResolver: Resolvers = {
  Query: {
    getUserById: async () => {
      return {
        email: "any_email",
        id: "anyid",
        phoneNumber: "(34)",
        name: "sada",
        username: "dsfsdf",
      };
    },
  },

  Mutation: {
    createUser: async (_, __, ctx) => {
      return {
        email: "any_email",
        id: "anyid",
        phoneNumber: "(34)",
        name: "sada",
        username: "dsfsdf",
      };
    },
  },
};
