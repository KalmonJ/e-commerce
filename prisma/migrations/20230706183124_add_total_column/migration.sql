/*
  Warnings:

  - Added the required column `total` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "total" INTEGER NOT NULL DEFAULT 0;
