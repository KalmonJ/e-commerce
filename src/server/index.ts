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

      console.log(process.env.NEXT_PUBLIC_MONGODB_URI, "envvv");

      const { handleRequest } = createYoga({
        schema: createSchema({
          resolvers: resolvers,
          typeDefs: typeDefs,
        }),
        graphqlEndpoint: "/api/graphql",
        fetchAPI: { Request, Response },
        cors: {
          origin: ["http://localhost:3000"],
        },
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
