import { gql } from "graphql-tag";

export const productReturnHistoryTypeDefs = gql`
  type ProductReturn {
    id: String!
    productId: String!
    deliveryPersonId: String
    shopId: String!
    pieces: Int!
    unitPrice: Int!
    totalPrice: Int!
    signature: String!
    created_at: DateTime!
  }

  input ProductReturnInput {
    deliveryPersonId: String!
    productId: String!
    shopId: String!
    unitPrice: Int!
    pieces: Int!
    totalPrice: Int!
    signature: String!
  }

  type Mutation {
    createProductReturn(input: ProductReturnInput!): Response!
  }

  type Query {
    Return: [ProductReturn!]!
  }
`;
