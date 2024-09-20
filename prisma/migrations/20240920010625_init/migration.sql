/*
  Warnings:

  - Added the required column `updatedAt` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `xtable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "xtable" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "xcolumn" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "isForeignKey" BOOLEAN NOT NULL DEFAULT false,
    "isPrimaryKey" BOOLEAN NOT NULL DEFAULT false,
    "dataType" "DataType" NOT NULL DEFAULT 'String',
    "xtableId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "xcolumn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "xcolumn" ADD CONSTRAINT "FK_Column_Table " FOREIGN KEY ("xtableId") REFERENCES "xtable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
