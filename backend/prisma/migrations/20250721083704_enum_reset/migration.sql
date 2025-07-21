/*
  Warnings:

  - You are about to drop the column `status` on the `ProductDelivery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductDelivery" DROP COLUMN "status",
ADD COLUMN     "paid" "TransactionEnum" NOT NULL DEFAULT 'NOT_PAYMENT',
ALTER COLUMN "deliveryDate" SET DEFAULT CURRENT_TIMESTAMP;
