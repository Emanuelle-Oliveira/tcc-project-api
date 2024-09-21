/*
  Warnings:

  - You are about to drop the `Query` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Query" DROP CONSTRAINT "FK_Query_Table";

-- DropTable
DROP TABLE "Query";

-- CreateTable
CREATE TABLE "query" (
    "id" SERIAL NOT NULL,
    "query" TEXT NOT NULL,
    "dbType" "DbType" NOT NULL DEFAULT 'SqlServer',
    "mainTableId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "query_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "query" ADD CONSTRAINT "FK_Query_Table" FOREIGN KEY ("mainTableId") REFERENCES "xtable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
