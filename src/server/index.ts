import { ApolloServer, BaseContext } from "@apollo/server";
import resolvers from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import { createDBConnect } from "./db/connect";

export const initializeServer = () => {
  let isServerStarted = false;

  const start = () => {
    createDBConnect();

    if (isServerStarted) {
      throw new Error("Server already started.");
    }

    try {
      const server = new ApolloServer<BaseContext>({
        resolvers: resolvers,
        typeDefs,
      });

      isServerStarted = true;
      return server;
    } catch (error) {
      console.error("Error to start server.");
    }
  };

  return {
    start,
  };
};
