/*
  Warnings:

  - Added the required column `productType` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductDelivery" ADD COLUMN     "productType" INTEGER NOT NULL;
