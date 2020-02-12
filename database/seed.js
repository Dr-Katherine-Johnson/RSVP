const dataGen = require('./dataGen.js');
const db = require('./index.js');
const shell = require('shelljs');
var path = require('path');

const schemaInitiate = async () => {
  await new Promise((resolve, reject) => {
    db.execute(
      `DROP KEYSPACE IF EXISTS meetup

CREATE KEYSPACE meetup
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3}

use meetup

CREATE TABLE event (
  event_id uuid,
  eventLimit Boolean,
  setLimit int,
  PRIMARY KEY (event_id)
)

CREATE TABLE members (
  member_id uuid,
  name text,
  avatar text,
  thumbnail text,
  favorite Boolean,
  waiting int,
  attending int,
  organizing int,
  PRIMARY KEY (member_id)
);`,
      function(err) {
        if (err) {
          console.log('err in exec schema: ', err);
        } else {
          resolve(console.log('schema done!'));
        }
      }
    );
  });
};

const seed = async () => {
  await schemaInitiate();
  //await dataGen();
  // await new Promise((resolve, reject) => {
  //   db.query(
  //     `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/eventData.csv' INTO TABLE events FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (eventLimit, setLimit);`,
  //     (err, results) => {
  //       if (err) {
  //         console.log('err:', err);
  //       } else {
  //         resolve(console.log('no err, results from events query:', results));
  //       }
  //     }
  //   );
  // });

  // await new Promise((resolve, reject) => {
  //   db.query(
  //     `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/memberData.csv' INTO TABLE members FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (name, avatar, thumbnail, favorite, waiting, attending, organizing);`,
  //     (err, results) => {
  //       if (err) {
  //         console.log('err:', err);
  //       } else {
  //         resolve(console.log('no err, results from members query:', results));
  //       }
  //     }
  //   );
  // }).then(result => {
  //   postSchemaInitiate();
  // });
};
seed();
