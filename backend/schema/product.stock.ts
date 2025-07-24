import { gql } from "graphql-tag";

export const StockTypedefs = gql`
  type Stock {
    id: ID!
    productId: String!
    product: Product!
    is_delivered: Boolean!
    pieces: Int!
    created_at: DateTime!
  }

  input CreateStockInput {
    product: String!
    pieces: Int!
    is_delivered: Boolean
  }

  input UpdateStockInput {
    product: String
    pieces: Int
    is_delivered: Boolean
  }

  type StockUpdateResponse {
    updated: Boolean!
    stock: Stock!
  }

  extend type Query {
    stock: [Stock!]!
  }

  extend type Mutation {
    createStock(input: CreateStockInput!): Response!
    updateStock(id: ID!, data: UpdateStockInput!): StockUpdateResponse!
    deleteStock(id: ID!): Boolean!
  }
`;
