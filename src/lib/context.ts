import { BaseContext } from "@apollo/server";
import { Session, getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "./auth";
import { User } from "@/server/db/schemas/User";

export interface ServerContext extends BaseContext {
  session: Session | null;
  user: typeof User;
  req: NextRequest;
}

export const context = async () => {
  const session = await getServerSession(authOptions);

  return {
    session: session,
    user: User,
  };
};
