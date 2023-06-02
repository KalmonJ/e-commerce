import { ApolloServer, BaseContext } from "@apollo/server";
import { ServerContext } from "./context";

export function assertServer(
  value: ApolloServer<ServerContext> | undefined
): asserts value is ApolloServer<ServerContext> {
  if (!value) throw new Error("Could not load server!");
}
