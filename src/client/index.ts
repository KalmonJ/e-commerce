import { GraphQLRequest } from "./http";
import type { Product, User } from "@/generated/graphql";
import type { CreateUser } from "./validations/create-user";

const environments = {
  development: `http://localhost:3000/api/graphql`,
  test: `${process.env.NEXT_PUBLIC_TEST_VERCEL_URL}/api/graphql`,
  production: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`,
};

const http = GraphQLRequest(environments[process.env.NODE_ENV]);

type CreateUserResponse = {
  createUser: Pick<User, "_id">;
};

type FeaturedProductResponse = {
  featuredProduct: Pick<Product, "_id" | "name" | "description">;
};

const product = {
  async featuredProduct() {
    const responseProduct = await http.Query<FeaturedProductResponse>({
      query: /* GraphQL */ `
        query product {
          featuredProduct {
            _id
            name
            description
          }
        }
      `,
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
