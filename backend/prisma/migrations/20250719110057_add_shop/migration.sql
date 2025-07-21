-- AlterTable
ALTER TABLE "ProductDelivery" ADD COLUMN     "shopId" TEXT;

-- AddForeignKey
ALTER TABLE "ProductDelivery" ADD CONSTRAINT "ProductDelivery_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
