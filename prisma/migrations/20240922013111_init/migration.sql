/*
  Warnings:

  - The values [c01,c11,c1n,c0n] on the enum `Cardinality` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Cardinality_new" AS ENUM ('C01', 'C11', 'C1n', 'C0n');
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" DROP DEFAULT;
ALTER TABLE "relationship" ALTER COLUMN "secondTableCardinality" DROP DEFAULT;
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" TYPE "Cardinality_new" USING ("firstTableCardinality"::text::"Cardinality_new");
ALTER TABLE "relationship" ALTER COLUMN "secondTableCardinality" TYPE "Cardinality_new" USING ("secondTableCardinality"::text::"Cardinality_new");
ALTER TYPE "Cardinality" RENAME TO "Cardinality_old";
ALTER TYPE "Cardinality_new" RENAME TO "Cardinality";
DROP TYPE "Cardinality_old";
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" SET DEFAULT 'C11';
ALTER TABLE "relationship" ALTER COLUMN "secondTableCardinality" SET DEFAULT 'C11';
COMMIT;

-- AlterTable
ALTER TABLE "relationship" ALTER COLUMN "firstTableCardinality" SET DEFAULT 'C11',
ALTER COLUMN "secondTableCardinality" SET DEFAULT 'C11';
