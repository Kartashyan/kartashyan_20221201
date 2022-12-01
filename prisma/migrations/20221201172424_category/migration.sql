-- CreateEnum
CREATE TYPE "CategoryName" AS ENUM ('Exercise', 'Education', 'Recipe');

-- CreateTable
CREATE TABLE "Category" (
    "name" "CategoryName" NOT NULL DEFAULT 'Exercise',

    CONSTRAINT "Category_pkey" PRIMARY KEY ("name")
);
