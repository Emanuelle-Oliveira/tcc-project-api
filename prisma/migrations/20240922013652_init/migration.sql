/*
  Warnings:

  - The values [C01,C11,C1n,C0n] on the enum `CardinalityEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CardinalityEnum_new" AS ENUM ('SqlServer', 'OracleDb');
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" DROP DEFAULT;
ALTER TABLE "relationship" ALTER COLUMN "secondTableCardinality" DROP DEFAULT;
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" TYPE "CardinalityEnum_new" USING ("firstTableCardinality"::text::"CardinalityEnum_new");
ALTER TABLE "relationship" ALTER COLUMN "secondTableCardinality" TYPE "CardinalityEnum_new" USING ("secondTableCardinality"::text::"CardinalityEnum_new");
ALTER TYPE "CardinalityEnum" RENAME TO "CardinalityEnum_old";
ALTER TYPE "CardinalityEnum_new" RENAME TO "CardinalityEnum";
DROP TYPE "CardinalityEnum_old";
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" SET DEFAULT 'SqlServer';
ALTER TABLE "relationship" ALTER COLUMN "secondTableCardinality" SET DEFAULT 'SqlServer';
COMMIT;

-- AlterTable
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" SET DEFAULT 'SqlServer',
ALTER COLUMN "secondTableCardinality" SET DEFAULT 'SqlServer';
