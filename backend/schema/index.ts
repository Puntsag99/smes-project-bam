import { commonTypeDefs } from "./common.schema";
import { productTypeDefs } from "./product.schema";
import { customerTypeDefs } from "./customer.schema";
import { deliveryPersonTypeDefs } from "./delivery.person";
import { productDeliveryTypeDefs } from "./product.delivery.schema";
import { updateDeliverPersonTypeDefs } from "./update.delivery.person";
import { ShopTypedefs } from "./shop.schema";
import { productReturnHistoryTypeDefs } from "./product.return.schema";
import { StockTypedefs } from "./product.stock";

export const typeDefs = [
  commonTypeDefs,
  productTypeDefs,
  customerTypeDefs,
  deliveryPersonTypeDefs,
  productDeliveryTypeDefs,
  ShopTypedefs,
  updateDeliverPersonTypeDefs,
  productReturnHistoryTypeDefs,
  StockTypedefs,
];
