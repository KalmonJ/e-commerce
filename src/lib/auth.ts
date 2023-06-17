import { User } from "@/server/db/schemas/User";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import type { CreateUser } from "@/generated/graphql";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const dbUser = await User.findOne<CreateUser & { _id: string }>({
          email: credentials?.email,
        });

        if (!dbUser) {
          throw new Error("Not found!");
        }

        const match = await compare(
          credentials?.password as string,
          dbUser.password
        );

        if (!match) return null;

        return {
          name: dbUser.name,
          id: dbUser._id,
          email: dbUser.email,
          image: dbUser.image,
        };
      },
    }),
  ],
};
