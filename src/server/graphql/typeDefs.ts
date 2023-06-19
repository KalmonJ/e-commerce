import path from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

export const typeDefs = loadSchemaSync(
  path.join(
    __dirname,
    "../../../../../src/server/graphql/modules/**/*.graphql"
  ),
  {
    loaders: [new GraphQLFileLoader()],
  }
);
