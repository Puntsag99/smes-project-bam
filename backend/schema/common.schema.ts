import { gql } from "graphql-tag";

export const commonTypeDefs = gql`
  scalar DateTime

  enum Response {
    Success
    NOT_FOUND
  }
`;
