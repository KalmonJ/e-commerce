import { Session, getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "./auth";
import { User } from "@/server/db/schemas/User";
import { Product } from "@/server/db/schemas/Product";

export interface ServerContext {
  session: Session | null;
  user: typeof User;
  product: typeof Product;
  req: NextRequest;
}

export const context = async () => {
  const session = await getServerSession(authOptions);

  return {
    session: session,
    user: User,
    product: Product,
  };
};
