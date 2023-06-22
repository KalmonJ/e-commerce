import path from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefs = loadSchemaSync(
  path.join(
    __dirname,
    process.env.NODE_ENV !== "development"
      ? "../../../../src/server/graphql/modules/**/*.graphql"
      : "../../../../../src/server/graphql/modules/**/*.graphql"
  ),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

export default mergeTypeDefs(typeDefs);
