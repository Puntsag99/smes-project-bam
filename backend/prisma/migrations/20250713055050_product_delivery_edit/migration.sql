/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `ProductDelivery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductDelivery" DROP COLUMN "totalPrice",
ADD COLUMN     "deliveryDate" TIMESTAMP(3),
ADD COLUMN     "note" TEXT,
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'PENDING';
