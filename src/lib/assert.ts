import { ApolloServer, BaseContext } from "@apollo/server";

export function assertServer(
  value: ApolloServer<BaseContext> | undefined
): asserts value is ApolloServer<BaseContext> {
  if (!value) throw new Error("Could not load server!");
}
