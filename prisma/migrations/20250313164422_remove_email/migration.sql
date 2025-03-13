/*
  Warnings:

  - You are about to drop the column `email` on the `Aluno` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Aluno_email_key";

-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "email";
