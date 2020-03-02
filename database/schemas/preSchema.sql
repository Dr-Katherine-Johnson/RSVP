-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS meetup;
CREATE DATABASE meetup;
USE meetup;

-- ---
-- Table 'members'
--
-- ---

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  `avatar` VARCHAR(100) DEFAULT NULL,
  `thumbnail` VARCHAR(100) DEFAULT NULL,
  `favorite` BOOLEAN DEFAULT NULL,
  `waiting` INTEGER DEFAULT NULL,
  `attending` INTEGER DEFAULT NULL,
  `organizing` INTEGER DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'events'
--
-- ---

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `eventLimit` BOOLEAN NULL DEFAULT NULL,
  `setLimit` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `members` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---


-- INSERT INTO `events` (`eventLimit`,`setLimit`) VALUES
-- ('1','10');
-- INSERT INTO `members` (`name`,`avatar`,`thumbnail`,`favorite`,`waiting`,`attending`,`organizing`) VALUES
-- ('Roman Emmons', 'pic.com','pic.com','1','1','1','1');

--  Execute this file from the command line by typing:
--   mysql -u root -p < database/schemas/preSchema.sql
--   to create the database and the tables.



-- update members set waiting=null where waiting=0;

-- ALTER TABLE `members` ADD FOREIGN KEY (waiting) REFERENCES `events` (`id`);
-- ALTER TABLE `members` ADD FOREIGN KEY (attending) REFERENCES `events` (`id`);
-- ALTER TABLE `members` ADD FOREIGN KEY (organizing) REFERENCES `events` (`id`);