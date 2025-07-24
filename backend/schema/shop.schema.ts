import { gql } from "graphql-tag";

export const ShopTypedefs = gql`
  # Типүүд
  type Shop {
    id: ID!
    name: String!
    address: String!
    is_active: Boolean!
    email: String!
    phone_number: String!
  }

  # Query root
  type Query {
    shop: [Shop!]!
  }

  # Input төрөл (Mutation-д ашиглах)
  input CreateShopInput {
    name: String!
    address: String!
    is_active: Boolean!
    email: String!
    phone_number: String!
  }

  input UpdateShopInput {
    name: String
    address: String
    is_active: Boolean
    email: String
    phone_number: String
  }

  # Mutation root
  type Mutation {
    createShop(input: CreateShopInput!): Response!
    updateShop(id: ID!, data: UpdateShopInput!): Shop!
    deleteShop(id: ID!): Boolean!
  }
`;
