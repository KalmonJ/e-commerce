import { Resolvers } from "@/generated/graphql";

export const userResolver: Resolvers = {
  Query: {
    getUser: async () => {
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
    createUser: async () => {
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
