import { gql } from "graphql-tag";

export const productTypeDefs = gql`
  type Product {
    id: String!
    title: String!
    description: String
    type: String!
    stock: Int!
    ingredient: String
    barcode: String
    price: Int
    imageURL: String
    expiredAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ProductInput {
    title: String!
    type: String!
    stock: Int!
    ingredient: String
    barcode: String!
    price: Int!
    imageURL: String!
  }

  type Mutation {
    createProduct(input: ProductInput!): Response!
  }

  type Query {
    product: [Product!]!
  }
`;
