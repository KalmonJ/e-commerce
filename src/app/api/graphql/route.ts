import { context } from "@/lib/context";
import { createDBConnection } from "@/server/db/connection";
import { resolvers } from "@/server/graphql/resolvers";
import { typeDefs } from "@/server/graphql/typeDefs";
import { createYoga, createSchema } from "graphql-yoga";

createDBConnection();

const { handleRequest } = createYoga({
  schema: createSchema({
    resolvers: resolvers,
    typeDefs: typeDefs,
  }),

  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request, Response },
  cors: false,
  context: context,
});

export { handleRequest as GET, handleRequest as POST };
