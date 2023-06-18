import { createDBConnection } from "./db/connection";
import { createYoga, createSchema } from "graphql-yoga";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import { context } from "@/lib/context";

export const initializeServer = () => {
  let isServerStarted = false;

  const start = () => {
    if (isServerStarted) {
      throw new Error("Server already started.");
    }
    try {
      createDBConnection();

      const { handleRequest } = createYoga({
        schema: createSchema({
          resolvers: resolvers,
          typeDefs: typeDefs,
        }),
        graphqlEndpoint: "/api/graphql",
        fetchAPI: { Response },
        cors: false,
        context: context,
      });

      return handleRequest;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return {
    start,
  };
};
