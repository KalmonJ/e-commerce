import path from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import "./modules";

export const typeDefs = loadSchemaSync(
  path.join(
    __dirname,
    process.env.NODE_ENV !== "development"
      ? "./modules/**/*.graphql"
      : "../../../../../src/server/graphql/modules/**/*.graphql"
  ),
  {
    loaders: [new GraphQLFileLoader()],
  }
);
