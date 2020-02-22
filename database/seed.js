const dataGen = require('./dataGen.js');
const db = require('./index.js');
var execSQL = require('exec-sql');
var path = require('path');

const preSchemaInitiate = async () => {
  execSQL.connect({
    database: 'meetup',
    user: 'root',
    password: 'Fila'
  });

  await new Promise((resolve, reject) => {
    execSQL.executeFile(
      path.join(__dirname, '/schemas/preSchema.sql'),
      function(err) {
        if (err) {
          console.log('err in execSql preSchema: ', err);
        } else {
          execSQL.disconnect();
          resolve(console.log('preSchema done!'));
        }
      }
    );
  });
};

const postSchemaInitiate = async () => {
  execSQL.connect({
    database: 'meetup',
    user: 'root',
    password: 'Fila'
  });

  await new Promise((resolve, reject) => {
    execSQL.executeFile(
      path.join(__dirname, '/schemas/postSchema.sql'),
      function(err) {
        if (err) {
          console.log('err in execSql preSchema: ', err);
        } else {
          execSQL.disconnect();
          resolve(console.log('postSchema done!'));
        }
      }
    );
  });
};

const seed = async () => {
  await preSchemaInitiate();
  await dataGen();
  await new Promise((resolve, reject) => {
    db.query(
      `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/eventData.csv' INTO TABLE events FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (eventLimit, setLimit);`,
      (err, results) => {
        if (err) {
          console.log('err:', err);
        } else {
          resolve(console.log('no err, results from events query:', results));
        }
      }
    );
  });
  //
  await new Promise((resolve, reject) => {
    db.query(
      `LOAD DATA LOCAL INFILE  '/Users/roman/Desktop/rsvp/database/csvStorage/memberData.csv' INTO TABLE members FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (name, avatar, favorite, waiting, attending, organizing);`,
      (err, results) => {
        if (err) {
          console.log('err:', err);
        } else {
          resolve(console.log('no err, results from members query:', results));
        }
      }
    );
  }).then(result => {
    postSchemaInitiate();
  });
};

seed();
