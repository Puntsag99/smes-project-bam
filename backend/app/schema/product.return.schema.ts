import { gql } from "graphql-tag";

export const productReturnHistoryTypeDefs = gql`
  type ProductReturn {
    id: String!
    product: Product
    productId: String!
    deliveryPersonId: String
    deliveryPerson: DeliveryPerson
    shopId: String!
    shop: Shop
    pieces: Int!
    signature: String!
    created_at: DateTime!
  }

  input ProductReturnInput {
    deliveryPersonId: String!
    productId: String!
    shopId: String!
    pieces: Int!
    signature: String!
  }

  type Mutation {
    createProductReturn(input: ProductReturnInput!): Response!
  }

  type Query {
    Return: [ProductReturn!]!
  }
`;
