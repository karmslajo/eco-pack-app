/*
  Warnings:

  - A unique constraint covering the columns `[packageId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Made the column `packageId` on table `Image` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "PackagingMaterial" ADD VALUE 'ALL';

-- AlterEnum
ALTER TYPE "category" ADD VALUE 'ALL';

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_packageId_fkey";

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "packageId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_packageId_key" ON "Image"("packageId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
