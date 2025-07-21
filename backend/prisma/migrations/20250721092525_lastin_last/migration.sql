/*
  Warnings:

  - You are about to drop the column `deliveryDate` on the `ProductDelivery` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `ProductDelivery` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `ProductDelivery` table. All the data in the column will be lost.
  - You are about to drop the column `pieces` on the `ProductDelivery` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `ProductDelivery` table. All the data in the column will be lost.
  - You are about to drop the `ProductDeliveredHistory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantity` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signature` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_type` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.
  - Made the column `shopId` on table `ProductDelivery` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ProductDeliveredHistory" DROP CONSTRAINT "ProductDeliveredHistory_deliveryPersonId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDeliveredHistory" DROP CONSTRAINT "ProductDeliveredHistory_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDeliveredHistory" DROP CONSTRAINT "ProductDeliveredHistory_shopId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDelivery" DROP CONSTRAINT "ProductDelivery_shopId_fkey";

-- AlterTable
ALTER TABLE "ProductDelivery" DROP COLUMN "deliveryDate",
DROP COLUMN "note",
DROP COLUMN "paid",
DROP COLUMN "pieces",
DROP COLUMN "productType",
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "signature" TEXT NOT NULL,
ADD COLUMN     "total_price" INTEGER NOT NULL,
ADD COLUMN     "transaction_type" "TransactionEnum" NOT NULL,
ALTER COLUMN "shopId" SET NOT NULL;

-- DropTable
DROP TABLE "ProductDeliveredHistory";

-- AddForeignKey
ALTER TABLE "ProductDelivery" ADD CONSTRAINT "ProductDelivery_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
