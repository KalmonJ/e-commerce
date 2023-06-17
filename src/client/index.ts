import { GraphQLRequest } from "./http";
import type { CreateUser } from "./validations/create-user";

const http = GraphQLRequest("/api/graphql");

type CreateUserResponse = {
  createUser: {
    _id: string;
  };
};

const user = {
  async create(input: CreateUser) {
    const user = await http.Mutation<CreateUserResponse>({
      query: `mutation create($user:CreateUser!) {
        createUser(user:$user) {
          _id
        }
      }`,
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
  };
};

export const audiophileAPI = app();
