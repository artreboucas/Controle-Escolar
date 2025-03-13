/*
  Warnings:

  - You are about to drop the column `nota4` on the `Boletim` table. All the data in the column will be lost.
  - You are about to drop the column `nota5` on the `Boletim` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Boletim" DROP COLUMN "nota4",
DROP COLUMN "nota5";
