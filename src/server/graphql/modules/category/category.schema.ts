export const categorySchema = /* GraphQL */ `
  enum Categories {
    HEADPHONES
    EARPHONES
    SPEAKERS
  }

  type Category {
    _id: ID!
    name: Categories!
    image: String!
  }

  type Query {
    categories: [Category!]!
  }
`;
