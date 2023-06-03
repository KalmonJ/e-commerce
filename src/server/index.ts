import { ApolloServer } from "@apollo/server";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import { ServerContext } from "@/lib/context";
import { createDBConnection } from "./db/connect";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const initializeServer = () => {
  let isServerStarted = false;

  const start = () => {
    if (isServerStarted) {
      throw new Error("Server already started.");
    }
    try {
      createDBConnection();
      const server = new ApolloServer<ServerContext>({
        resolvers,
        typeDefs,
        introspection: process.env.NODE_ENV !== "production",
        schema: addMocksToSchema({
          schema: makeExecutableSchema({ typeDefs, resolvers }),
        }) as any,
      });
      isServerStarted = true;
      return server;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    start,
  };
};
