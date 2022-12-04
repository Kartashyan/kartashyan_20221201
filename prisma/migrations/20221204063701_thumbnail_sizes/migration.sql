/*
  Warnings:

  - Added the required column `lgTmbnail` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mdTmbnail` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smTmbnail` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "lgTmbnail" TEXT NOT NULL,
ADD COLUMN     "mdTmbnail" TEXT NOT NULL,
ADD COLUMN     "smTmbnail" TEXT NOT NULL;
