/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `DeliveryPerson` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `DeliveryPerson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ProductDeliveredHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `ProductDeliveredHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `ProductDelivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `ProductReturnHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `ProductReturnHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DeliveryPerson" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vehicle" TEXT,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductDeliveredHistory" ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "unitPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductDelivery" ADD COLUMN     "totalPrice" INTEGER NOT NULL,
ADD COLUMN     "unitPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductReturnHistory" ADD COLUMN     "totalPrice" INTEGER NOT NULL,
ADD COLUMN     "unitPrice" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryPerson_phone_number_key" ON "DeliveryPerson"("phone_number");
