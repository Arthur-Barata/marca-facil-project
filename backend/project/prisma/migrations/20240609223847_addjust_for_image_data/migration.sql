/*
  Warnings:

  - You are about to alter the column `imageData` on the `Laboratory` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `LongText`.

*/
-- AlterTable
ALTER TABLE `Laboratory` MODIFY `imageData` LONGTEXT NULL;
