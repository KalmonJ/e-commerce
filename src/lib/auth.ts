import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { db } from "./db";
import { User } from "@/types/user";

let cachedUser: User | null = null;

export const getServerSession = async () => {
  const refreshToken = cookies().get("accessToken");

  if (!refreshToken) {
    return null;
  }

  try {
    const payload = jwt.verify(refreshToken.value, process.env.JWT_SECRET);

    if (isPayload(payload)) {
      if (cachedUser) {
        console.log("get user from cache");
        return cachedUser;
      }

      const dbUser = await db.user.findUnique({
        where: {
          id: payload.userId,
        },
        select: {
          email: true,
          id: true,
          image: true,
          username: true,
          name: true,
          session: true,
        },
      });

      cachedUser = dbUser;

      return cachedUser;
    }
  } catch (error) {
    return null;
  }
};

function isPayload(
  payload: string | jwt.JwtPayload | null
): payload is { userId: number } {
  return (payload as { userId: number }).userId !== undefined;
}
