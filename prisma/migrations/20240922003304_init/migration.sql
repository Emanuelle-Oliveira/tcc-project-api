-- RenameForeignKey
ALTER TABLE "relationship" RENAME CONSTRAINT "FK_Relationship_Table" TO "FK_Relationship_FirstTable";

-- AddForeignKey
ALTER TABLE "relationship" ADD CONSTRAINT "FK_Relationship_SecondTable" FOREIGN KEY ("secondTableId") REFERENCES "xtable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
