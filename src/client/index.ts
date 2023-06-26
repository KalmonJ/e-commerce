import { GraphQLRequest } from "./http";
import type { Category, Product, User } from "@/generated/graphql";
import type { CreateUser } from "./validations/create-user";

export const environments = {
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

type FeaturedProductsResponse = {
  featuredSectionProducts: Pick<Product, "_id" | "name" | "description">[];
};

type CategoriesResponse = {
  categories: Category[];
};

// TODO: add try catch statement

const category = {
  async all() {
    const categories = await http.Query<CategoriesResponse>({
      query: /* GraphQL */ `
        query category {
          categories {
            _id
            name
            image
          }
        }
      `,
    });

    return categories;
  },
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

  async featuredProducts() {
    const responseProduct = await http.Query<FeaturedProductsResponse>({
      query: /* GraphQL */ `
        query FeaturedProducts {
          featuredSectionProducts {
            name
            _id
            description
          }
        }
      `,
    });

    return responseProduct;
  },

  category,
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
