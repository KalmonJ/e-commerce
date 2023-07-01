import { db } from "@/lib/db";
import { CreateUser, userValidator } from "@/lib/validators/user";
import { hash } from "bcrypt";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";
import z from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = userValidator.parse(body);

    const payload: CreateUser = {
      ...input,
      password: await hash(input.password, 10),
    };

    await db.user.create({
      data: { ...payload, image: faker.internet.avatar() },
    });

    return NextResponse.json({ message: "user created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    }

    return new Response("Unable to create user, please try again later", {
      status: 500,
    });
  }
}
