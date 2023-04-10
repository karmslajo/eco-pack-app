/*
  Warnings:

  - Added the required column `category` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "category" AS ENUM ('BABYFOOD', 'BAKERY', 'BEVERAGES', 'BREADSPASTRIES', 'CONDIMENT', 'DAIRY', 'DESSERT', 'DRYGOODS', 'FRUITS', 'MEAT', 'PASTA', 'SNACKS', 'SEAFOOD', 'STREETFOODS', 'VEGETABLES');

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "category" "category" NOT NULL;

-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "category" "category"[];
