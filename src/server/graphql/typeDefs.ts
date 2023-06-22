// import path from "path";
// import { loadSchemaSync } from "@graphql-tools/load";
// import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
// import { mergeTypeDefs } from "@graphql-tools/merge";

import { mergeTypeDefs } from "@graphql-tools/merge";
import { productSchema } from "./modules/product/product.schema";
import { userSchema } from "./modules/user/user.schema";

// console.log(
//   path.join(
//     __dirname,
//     process.env.NODE_ENV !== "development"
//       ? "../../../../../src/server/graphql/modules/**/*.graphql"
//       : "../../../../../src/server/graphql/modules/**/*.graphql"
//   )
// );

// const typeDefs = loadSchemaSync(
//   path.join(
//     __dirname,
//     process.env.NODE_ENV !== "development"
//       ? "../../../../../src/server/graphql/modules/**/*.graphql"
//       : "../../../../../src/server/graphql/modules/**/*.graphql"
//   ),
//   {
//     loaders: [new GraphQLFileLoader()],
//   }
// );

// export default mergeTypeDefs(typeDefs);

const types = [userSchema, productSchema];
export const typeDefs = mergeTypeDefs(types);
