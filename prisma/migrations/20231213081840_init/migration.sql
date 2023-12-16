-- CreateTable
CREATE TABLE `reports` (
    `createTimeAt` VARCHAR(55) NULL,
    `createdDateAt` VARCHAR(55) NULL,
    `dateAndTime` VARCHAR(55) NULL,
    `details` VARCHAR(255) NULL,
    `documentID` INTEGER NOT NULL AUTO_INCREMENT,
    `fileStatus` INTEGER NULL,
    `nameToReport` VARCHAR(255) NULL,
    `placeOfTheEvent` VARCHAR(255) NULL,
    `status` INTEGER NULL,
    `uid` INTEGER NULL,
    `violation` VARCHAR(255) NULL,

    INDEX `uid`(`uid`),
    PRIMARY KEY (`documentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `email` VARCHAR(255) NULL,
    `isRegistered` INTEGER NULL,
    `isSuperUser` INTEGER NULL,
    `password` VARCHAR(255) NULL,
    `status` INTEGER NULL,
    `uid` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users`(`uid`) ON DELETE NO ACTION ON UPDATE NO ACTION;
