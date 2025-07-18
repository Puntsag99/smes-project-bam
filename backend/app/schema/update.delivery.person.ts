import { gql } from "graphql-tag";

export const updateDeliverPersonTypeDefs = gql`
  input UpdateDeliveryPersonInput {
    id: ID!
    name: String
    phoneNumber: String
  }

  type Mutation {
    updateDeliveryPerson(input: UpdateDeliveryPersonInput!): Response!
    deleteDeliveryPerson(id: ID!): Response!
  }
`;
