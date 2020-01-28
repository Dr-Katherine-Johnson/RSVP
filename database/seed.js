const dataGen = require('./dataGen.js');
const db = require('./index.js');

const seed = async () => {
  //await dataGen();

  await db.query(
    `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/eventData.csv' INTO TABLE events FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n'(eventLimit, setLimit);`,
    (err, results) => {
      if (err) {
        console.log('err:', err);
      } else {
        console.log('no err, results:', results);
      }
    }
  );
  await db.query(
    //`INSERT INTO members (name, avatar, thumbnail) VALUES (name, avatar, thumbnail);`,
    `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/memberData.csv' INTO TABLE members FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n'(name, avatar, thumbnail, favorite, waiting, attending, organizing);`,
    (err, results) => {
      if (err) {
        console.log('err:', err);
      } else {
        console.log('no err, results:', results);
      }
    }
  );
};

seed();
