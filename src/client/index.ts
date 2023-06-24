import { GraphQLRequest } from "./http";
import type { Product, User } from "@/generated/graphql";
import type { CreateUser } from "./validations/create-user";

const http = GraphQLRequest(
  `${
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000/api/graphql"
      : `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`
  }`
);

type CreateUserResponse = {
  createUser: Pick<User, "_id">;
};

type FeaturedProductResponse = {
  product: Pick<Product, "_id" | "name" | "description">;
};

const product = {
  async get(id: string) {
    const responseProduct = await http.Query<FeaturedProductResponse>({
      query: /* GraphQL */ `
        query product($id: ID!) {
          product(id: $id) {
            _id
            name
            description
          }
        }
      `,
      variables: {
        id,
      },
    });

    return responseProduct;
  },
};

const user = {
  async create(input: CreateUser) {
    const user = await http.Mutation<CreateUserResponse>({
      query: /* GraphQL */ `
        mutation create($user: CreateUser!) {
          createUser(user: $user) {
            _id
          }
        }
      `,
      variables: {
        user: input,
      },
    });

    return user;
  },
};

export const app = () => {
  return {
    user,
    product,
  };
};

export const audiophileAPI = app();
