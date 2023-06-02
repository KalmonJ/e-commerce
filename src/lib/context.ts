import { createDBConnection } from "@/server/db/connect";
import { BaseContext, ContextFunction } from "@apollo/server";
import { GraphQLError } from "graphql";
import mongoose from "mongoose";
import { Session, getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export interface ServerContext extends BaseContext {
  db: typeof mongoose | undefined;
  session: Session | null;
}

type Contextfn = ContextFunction<[NextRequest], ServerContext>;

export const context: Contextfn = async () => {
  const db = await createDBConnection();
  const session = await getServerSession();

  if (!db)
    throw new GraphQLError("Error when trying to connect to the database.");

  return {
    db: db,
    session: session,
  };
};
