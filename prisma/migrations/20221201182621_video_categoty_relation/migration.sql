/*
  Warnings:

  - You are about to drop the column `category` on the `Video` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "category",
ADD COLUMN     "categoryName" "CategoryName" NOT NULL DEFAULT 'Exercise';

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
