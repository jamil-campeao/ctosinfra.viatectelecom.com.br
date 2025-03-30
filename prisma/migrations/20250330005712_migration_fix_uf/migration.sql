/*
  Warnings:

  - Added the required column `CID_UF` to the `Cidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cidade" ADD COLUMN     "CID_UF" TEXT NOT NULL;
