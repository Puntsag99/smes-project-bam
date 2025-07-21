import { commonTypeDefs } from "./common.schema";
import { productTypeDefs } from "./product.schema";
import { customerTypeDefs } from "./customer.schema";
import { deliveryPersonTypeDefs } from "./delivery.person";
import { productDeliveryTypeDefs } from "./product.delivery.schema";
import { updateDeliverPersonTypeDefs } from "./update.delivery.person";
import { ShopTypedefs } from "./shop.schema";

export const typeDefs = [
  customerTypeDefs,
  commonTypeDefs,
  productTypeDefs,
  deliveryPersonTypeDefs,
  updateDeliverPersonTypeDefs,
  productDeliveryTypeDefs,
  ShopTypedefs,
];
