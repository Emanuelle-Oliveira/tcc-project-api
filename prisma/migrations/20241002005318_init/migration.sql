/*
  Warnings:

  - Added the required column `relationshipId` to the `relatedkeys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "relatedkeys" ADD COLUMN     "relationshipId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "relatedkeys" ADD CONSTRAINT "FK_RelatedKeys_Relationship" FOREIGN KEY ("relationshipId") REFERENCES "relationship"("id") ON DELETE CASCADE ON UPDATE CASCADE;
