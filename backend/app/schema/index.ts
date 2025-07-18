import { commonTypeDefs } from "./common.schema";
import { productTypeDefs } from "./product.schema";
import { customerTypeDefs } from "./customer.schema";
import { deliveryPersonTypeDefs } from "./delivery.person";
import { productDeliveryTypeDefs } from "./product.delivery.schema";
import { updateDeliverPersonTypeDefs } from "./update.delivery.person";

export const typeDefs = [
  customerTypeDefs,
  commonTypeDefs,
  productTypeDefs,
  deliveryPersonTypeDefs,
  updateDeliverPersonTypeDefs,
  productDeliveryTypeDefs,
];
