/*
  Warnings:

  - You are about to drop the column `nota` on the `Boletim` table. All the data in the column will be lost.
  - Added the required column `nota1` to the `Boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota2` to the `Boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota3` to the `Boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota4` to the `Boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota5` to the `Boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorId` to the `Boletim` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Boletim" DROP CONSTRAINT "Boletim_alunoId_fkey";

-- AlterTable
ALTER TABLE "Boletim" DROP COLUMN "nota",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nota1" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nota2" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nota3" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nota4" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nota5" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "professorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
