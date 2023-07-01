import { db } from "@/lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { compare } from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();
  const user = await db.user.findUnique({
    where: {
      email: body.email,
    },
    include: {
      session: true,
    },
  });

  if (!user)
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });

  const match = await compare(body.password, user.password);

  if (!match) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60,
  });

  const refreshToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 5,
  });

  if (!user.session) {
    await db.session.create({
      data: {
        accessToken,
        userId: user.id,
      },
    });
  }

  cookies().set("accessToken", accessToken, {
    expires: 60 * 60,
    maxAge: 60 * 60,
    path: "/",
  });

  cookies().set("refreshToken", refreshToken, {
    expires: 60 * 60 * 5,
    maxAge: 60 * 60 * 5,
    path: "/",
  });

  return new Response(JSON.stringify({ message: "success" }), {
    status: 200,
  });
}
