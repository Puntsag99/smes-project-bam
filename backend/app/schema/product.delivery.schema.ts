import { gql } from "graphql-tag";

export const productDeliveryTypeDefs = gql`
  enum TransactionEnum {
    CASH
    BANK_TRANSFER
    CREDIT
    NOT_PAYMENT
  }

  type ProductDelivery {
    id: String!
    productId: String!
    product: Product!

    shopId: String!
    shop: Shop

    deliveryPersonId: String!
    deliveryPerson: DeliveryPerson!

    quantity: Int!
    unitPrice: Int
    totalPrice: Int
    transactionType: TransactionEnum!
    createdAt: DateTime
    signature: String
  }

  input ProductDeliveryInput {
    productId: String!
    shopId: String!
    deliveryPersonId: String!
    quantity: Int!
    transactionType: TransactionEnum!
    signature: String
    unitPrice: Int
    totalPrice: Int
  }

  type Mutation {
    createProductDelivery(input: ProductDeliveryInput!): Response!
  }

  type Query {
    productDelivery: [ProductDelivery!]!
  }
`;
