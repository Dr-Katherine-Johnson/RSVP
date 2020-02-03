const dataGen = require('./dataGen.js');
const db = require('./index.js');

const seed = async () => {
  //console.log(dataGen());
  await dataGen();

  // db.query(
  //   `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/eventData.csv' INTO TABLE events FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (eventLimit, setLimit);`,
  //   (err, results) => {
  //     if (err) {
  //       console.log('err:', err);
  //     } else {
  //       console.log('no err, results:', results);
  //       db.query(
  //         //`INSERT INTO members (name, avatar, thumbnail) VALUES (name, avatar, thumbnail);`,
  //         `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/memberData.csv' INTO TABLE members FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n'(name, avatar, thumbnail, favorite, waiting, attending, organizing);`,
  //         (err, results) => {
  //           if (err) {
  //             console.log('err:', err);
  //           } else {
  //             console.log('no err, results:', results);
  //           }
  //         }
  //       );
  //     }
  //   }
  // );
};

const seed1 = new Promise((resolve, reject) => {
  db.query(
    //`INSERT INTO members (name, avatar, thumbnail) VALUES (name, avatar, thumbnail);`,
    `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/eventData.csv' INTO TABLE events FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (eventLimit, setLimit);`,
    (err, results) => {
      if (err) {
        console.log('err:', err);
      } else {
        resolve(console.log('no err, results:', results));
      }
    }
  );
});

const seed2 = new Promise((resolve, reject) => {
  db.query(
    //`INSERT INTO members (name, avatar, thumbnail) VALUES (name, avatar, thumbnail);`,
    `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/memberData.csv' INTO TABLE members FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n'(name, avatar, thumbnail, favorite, waiting, attending, organizing);`,
    (err, results) => {
      if (err) {
        console.log('err:', err);
      } else {
        resolve(console.log('no err, results:', results));
      }
    }
  );
});

seed();
Promise.all([seed1, seed2]);
