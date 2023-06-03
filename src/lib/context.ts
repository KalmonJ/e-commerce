import { BaseContext, ContextFunction } from "@apollo/server";
import { Session, getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "./auth";

export interface ServerContext extends BaseContext {
  session: Session | null;
  req: NextRequest;
}

type Contextfn = ContextFunction<[NextRequest, undefined], ServerContext>;

export const context: Contextfn = async (req) => {
  const session = await getServerSession(authOptions);

  return {
    session: session,
    req,
  };
};
