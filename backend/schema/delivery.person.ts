import { gql } from "graphql-tag";

export const deliveryPersonTypeDefs = gql`
  type DeliveryPerson {
    id: String
    name: String
    phoneNumber: String
    image: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input DeliveryPersonInput {
    image: String!
    name: String!
    phoneNumber: String!
  }

  type Mutation {
    createDeliveryPerson(input: DeliveryPersonInput!): Response!
  }

  type Query {
    deliveryPerson: [DeliveryPerson!]!
  }
`;
