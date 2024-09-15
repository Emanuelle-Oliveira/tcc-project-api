/*
  Warnings:

  - Made the column `userId` on table `project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "project" ALTER COLUMN "userId" SET NOT NULL;
