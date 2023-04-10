/*
  Warnings:

  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PackagingMaterial" AS ENUM ('ALUMINIUM', 'FOILBAGS', 'CARDBOARD', 'CARTON', 'HARDBOARD', 'GLASS', 'CERAMIC', 'METAL', 'TIN', 'STEEL', 'PAPER', 'PAPERBOARD', 'CARDSTOCK', 'PLASTIC', 'POLYMER', 'POLYETHYLENE', 'FILM', 'TEXTILE', 'FABRIC', 'LEATHER', 'WOOD', 'CORK', 'SUSTAINABLE');

-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_packageId_fkey";

-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "materials" "PackagingMaterial"[];

-- DropTable
DROP TABLE "Material";
