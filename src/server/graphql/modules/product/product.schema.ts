export const productSchema = /* GraphQL */ `
  type Product {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    features: String!
    images: Images
    inTheBox: [InTheBox!]!
  }

  type InTheBox {
    quantity: Int!
    name: String!
  }

  type Images {
    thumbnail: String!
    presentation: [String!]!
  }

  type Query {
    product(id: ID!): Product
  }
`;
