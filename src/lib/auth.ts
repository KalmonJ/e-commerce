import { User } from "@/server/db/schemas/User";
import { GraphQLError } from "graphql";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import type { CreateUser } from "@/generated/graphql";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      console.warn(code);
    },
    debug(code, metadata) {
      console.debug(code, metadata);
    },
  },
  pages: {
    signIn: "/",
    error: undefined,
  },
  providers: [
    CredentialsProvider({
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
          throw new GraphQLError("Not found!");
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
