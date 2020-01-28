-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS meetup;
CREATE DATABASE meetup;
USE meetup;

-- Table 'events'
--
-- ---

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `eventLimit` BOOLEAN NOT NULL,
  `setLimit` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'members'
--
-- ---

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(100) NOT NULL,
  `thumbnail` VARCHAR(100) NOT NULL,
  `favorite` BOOLEAN DEFAULT NULL,
  `waiting` INTEGER DEFAULT NULL,
  `attending` INTEGER DEFAULT NULL,
  `organizing` INTEGER DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `members` ADD FOREIGN KEY (waiting) REFERENCES `events` (`id`);
ALTER TABLE `members` ADD FOREIGN KEY (attending) REFERENCES `events` (`id`);
ALTER TABLE `members` ADD FOREIGN KEY (organizing) REFERENCES `events` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `members` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `events` (`eventLimit`,`setLimit`) VALUES
-- (1, 25);
-- INSERT INTO `members` (`name`,`avatar`,`thumbnail`,`favorite`,`waiting`,`attending`,`organizing`) VALUES
-- ('Roman Emmons','this.com','that.com', null, 1, null, 1);


--  Execute this file from the command line by typing:
--   mysql -u root -p < database/schema.sql
--   to create the database and the tables.