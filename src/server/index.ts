import { ApolloServer } from "@apollo/server";
import resolvers from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import { ServerContext } from "@/lib/context";
import { createDBConnection } from "./db/connect";

export const initializeServer = () => {
  let isServerStarted = false;

  const start = () => {
    if (isServerStarted) {
      throw new Error("Server already started.");
    }
    try {
      createDBConnection();
      const server = new ApolloServer<ServerContext>({
        resolvers: resolvers,
        typeDefs,
        introspection: process.env.NODE_ENV !== "production",
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
