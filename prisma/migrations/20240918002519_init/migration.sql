/*
  Warnings:

  - You are about to drop the `table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "table" DROP CONSTRAINT "FK_Table_Project ";

-- DropTable
DROP TABLE "table";

-- CreateTable
CREATE TABLE "xtable" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "xtable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "xtable" ADD CONSTRAINT "FK_Table_Project " FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
