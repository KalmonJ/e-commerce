import { BaseContext, ContextFunction } from "@apollo/server";
import { Session, getServerSession } from "next-auth";
import { createDBConnection } from "@/server/db/connect";
import { NextRequest } from "next/server";
import { authOptions } from "./auth";
import { GraphQLError } from "graphql";
import mongoose from "mongoose";

export interface ServerContext extends BaseContext {
  db: typeof mongoose | undefined;
  session: Session | null;
  req: NextRequest;
}

type Contextfn = ContextFunction<[NextRequest, undefined], ServerContext>;

export const context: Contextfn = async (req, res) => {
  const db = await createDBConnection();
  const session = await getServerSession(authOptions);

  if (!db)
    throw new GraphQLError("Error when trying to connect to the database.");

  return {
    db: db,
    session: session,
    req: req,
  };
};
