-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "project_email_key" ON "project"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "FK_Project_User " FOREIGN KEY ("userId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
