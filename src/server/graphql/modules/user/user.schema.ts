export const userSchema = /* GraphQL */ `
  type User {
    _id: String!
    username: String!
    name: String!
    email: String!
    phoneNumber: String!
    image: String
    createdAt: String!
    updatedAt: String!
  }

  type UserWithPassword {
    _id: String!
    username: String!
    name: String!
    email: String!
    phoneNumber: String!
    image: String
    createdAt: String!
    updatedAt: String!
    password: String!
  }

  type Query {
    user(id: ID!): User!
  }

  input CreateUser {
    username: String!
    name: String!
    email: String!
    password: String!
    image: String
  }

  type Mutation {
    createUser(user: CreateUser!): User!
  }
`;
