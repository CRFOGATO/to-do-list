-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "done" BOOLEAN DEFAULT false,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
