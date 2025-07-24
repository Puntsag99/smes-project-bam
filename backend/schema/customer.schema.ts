import { gql } from "graphql-tag";

export const customerTypeDefs = gql`
  type Customer {
    id: String!
    createdAt: DateTime
    updatedAt: DateTime
    companyName: String!
    companyNumber: String!
    companyLocation: String!
  }

  input CustomerInput {
    companyName: String!
    companyLocation: String!
    companyNumber: String!
  }

  type Mutation {
    createCustomer(input: CustomerInput!): Response!
  }

  type Query {
    customer: [Customer!]!
  }
`;
