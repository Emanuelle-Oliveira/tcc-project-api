/*
  Warnings:

  - The `firstTableCardinality` column on the `relationship` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `secondTableCardinality` column on the `relationship` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CardinalityEnum" AS ENUM ('C01', 'C11', 'C1n', 'C0n');

-- AlterTable
ALTER TABLE "relationship" DROP COLUMN "firstTableCardinality",
ADD COLUMN     "firstTableCardinality" "CardinalityEnum" NOT NULL DEFAULT 'C11',
DROP COLUMN "secondTableCardinality",
ADD COLUMN     "secondTableCardinality" "CardinalityEnum" NOT NULL DEFAULT 'C11';

-- DropEnum
DROP TYPE "Cardinality";
