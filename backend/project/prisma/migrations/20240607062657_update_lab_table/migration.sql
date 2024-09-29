-- AlterTable
ALTER TABLE `Laboratory` ADD COLUMN `imageData` BLOB NULL,
    MODIFY `isAvailable` BOOLEAN NOT NULL DEFAULT true;
