import { context } from "@/lib/context";
import { createDBConnection } from "@/server/db/connection";
import { resolvers } from "@/server/graphql/resolvers";
import { typeDefs } from "@/server/graphql/typeDefs";
import { createYoga, createSchema } from "graphql-yoga";

console.log(resolvers, typeDefs);
console.log(__dirname, "dirname");

createDBConnection();

const { handleRequest } = createYoga({
  schema: createSchema({
    resolvers,
    typeDefs,
  }),
  cors: false,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request, Response },
  context: context,
});

export { handleRequest as GET, handleRequest as POST };
