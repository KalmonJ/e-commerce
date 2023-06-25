import { type Session, getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { User } from "@/server/db/schemas/User";
import { Product } from "@/server/db/schemas/Product";
import { Category } from "@/server/db/schemas/Category";

export interface ServerContext {
  session: Session | null;
  user: typeof User;
  product: typeof Product;
  category: typeof Category;
}

export const context = async () => {
  const session = await getServerSession(authOptions);

  return {
    session: session,
    user: User,
    product: Product,
    category: Category,
  };
};
