-- CreateTable
CREATE TABLE "relatedkeys" (
    "id" SERIAL NOT NULL,
    "firstColumnId" INTEGER NOT NULL,
    "secondColumnId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "relatedkeys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "relatedkeys" ADD CONSTRAINT "FK_RelatedKey_FirstColumn" FOREIGN KEY ("firstColumnId") REFERENCES "xcolumn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relatedkeys" ADD CONSTRAINT "FK_RelatedKey_SecondColumn" FOREIGN KEY ("secondColumnId") REFERENCES "xcolumn"("id") ON DELETE CASCADE ON UPDATE CASCADE;
