-- CreateTable
CREATE TABLE "relationship" (
    "id" SERIAL NOT NULL,
    "firstTableCardinality" "Cardinality" NOT NULL DEFAULT 'c11',
    "secondTableCardinality" "Cardinality" NOT NULL DEFAULT 'c11',
    "firstTableId" INTEGER NOT NULL,
    "secondTableId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "relationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Query" (
    "id" SERIAL NOT NULL,
    "query" TEXT NOT NULL,
    "dbType" "DbType" NOT NULL DEFAULT 'SqlServer',
    "mainTableId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

-- RenameForeignKey
ALTER TABLE "project" RENAME CONSTRAINT "FK_Project_User " TO "FK_Project_User";

-- RenameForeignKey
ALTER TABLE "xcolumn" RENAME CONSTRAINT "FK_Column_Table " TO "FK_Column_Table";

-- RenameForeignKey
ALTER TABLE "xtable" RENAME CONSTRAINT "FK_Table_Project " TO "FK_Table_Project";

-- AddForeignKey
ALTER TABLE "relationship" ADD CONSTRAINT "FK_Relationship_Table" FOREIGN KEY ("firstTableId") REFERENCES "xtable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Query" ADD CONSTRAINT "FK_Query_Table" FOREIGN KEY ("mainTableId") REFERENCES "xtable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
