import { db } from "@/lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { compare } from "bcrypt";
import { authValidator } from "@/lib/validators/auth";
import z from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = authValidator.parse(body);

    const user = await db.user.findUnique({
      where: {
        email: email,
      },
      include: {
        session: true,
      },
    });

    if (!user)
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });

    const match = await compare(password, user.password);

    if (!match) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
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
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    }

    return new Response("Unknown error try again later", {
      status: 500,
    });
  }
}
