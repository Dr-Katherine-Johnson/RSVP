


USE meetup;



update members set waiting=null where waiting=0;
update members set attending=null where attending=0;
update members set organizing=null where organizing=0;

ALTER TABLE `members` ADD FOREIGN KEY (waiting) REFERENCES `events` (`id`);
ALTER TABLE `members` ADD FOREIGN KEY (attending) REFERENCES `events` (`id`);
ALTER TABLE `members` ADD FOREIGN KEY (organizing) REFERENCES `events` (`id`);

GRANT ALL PRIVILEGES ON . TO 'root'@'52.53.155.97' IDENTIFIED BY 'redhat' WITH GRANT OPTION