-- AlterTable
ALTER TABLE `Laboratory` MODIFY `description` TEXT NULL,
    MODIFY `imageUrl` TEXT NULL;

-- AlterTable
ALTER TABLE `Material` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Reservation` ADD COLUMN `subject` VARCHAR(255) NULL;
