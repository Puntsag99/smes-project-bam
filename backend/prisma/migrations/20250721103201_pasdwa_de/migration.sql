/*
  Warnings:

  - You are about to drop the column `unitPrice` on the `ProductDelivery` table. All the data in the column will be lost.
  - Added the required column `unit_price` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductDelivery" DROP COLUMN "unitPrice",
ADD COLUMN     "unit_price" INTEGER NOT NULL,
ALTER COLUMN "signature" DROP NOT NULL;
