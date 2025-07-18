import { gql } from "graphql-tag";

export const productDeliveryTypeDefs = gql`
  enum OrderStatus {
    PENDING
    APPROVED
    DELIVERED
    RETURNED
    CANCELLED
  }

  type ProductDelivery {
    id: String!
    productId: String!
    product: Product!

    productType: String
    deliveryPersonId: String!
    deliveryPerson: DeliveryPerson!

    pieces: Int!
    unitPrice: Int!

    deliveryDate: String
    note: String
    status: OrderStatus!
    createdAt: DateTime
  }

  input ProductDeliveryInput {
    productId: String!
    productType: String!
    deliveryPersonId: String!
    pieces: Int!
    unitPrice: Int!
    deliveryDate: String
    note: String
  }

  type Mutation {
    createProductDelivery(input: ProductDeliveryInput!): Response!
  }

  type Query {
    productDelivery: [ProductDelivery!]!
  }
`;
