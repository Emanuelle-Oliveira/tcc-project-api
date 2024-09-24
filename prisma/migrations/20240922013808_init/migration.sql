/*
  Warnings:

  - The `firstTableCardinality` column on the `relationship` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `secondTableCardinality` column on the `relationship` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Cardinality" AS ENUM ('c01', 'c11', 'c1n', 'c0n');

-- AlterTable
ALTER TABLE "relationship" DROP COLUMN "firstTableCardinality",
ADD COLUMN     "firstTableCardinality" "Cardinality" NOT NULL DEFAULT 'c11',
DROP COLUMN "secondTableCardinality",
ADD COLUMN     "secondTableCardinality" "Cardinality" NOT NULL DEFAULT 'c11';

-- DropEnum
DROP TYPE "CardinalityEnum";
