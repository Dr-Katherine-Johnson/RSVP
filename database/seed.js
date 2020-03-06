const dataGen = require('./dataGen.js');
const db = require('./index.js');
const execSQL = require('exec-sql');
const path = require('path');
const fs = require('fs');
const connection = require('./index.js');

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
  console.log('post schema initiated');
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
  let count = 0;
  await preSchemaInitiate();

  while (count < 1000000) {
    await batch(count);
    count += 500000;
  }

  // close connection!!!
  return;
};

const batch = async counter => {
  await dataGen(counter);
  await new Promise((resolve, reject) => {
    db.query(
      `LOAD DATA LOCAL INFILE  '/home/ec2-user/RSVP/eventData.csv' INTO TABLE events FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (eventLimit, setLimit);`,
      (err, results) => {
        if (err) {
          console.log('err:', err);
        } else {
          fs.unlinkSync('./eventData.csv');
          resolve(console.log('no err, results from events query:', results));
        }
      }
    );
  });
  //
  await new Promise((resolve, reject) => {
    db.query(
      `LOAD DATA LOCAL INFILE  '/home/ec2-user/RSVP/memberData.csv' INTO TABLE members FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES (name, avatar, thumbnail, favorite, waiting, attending, organizing);`,
      (err, results) => {
        if (err) {
          console.log('err:', err);
        } else {
          fs.unlinkSync('./memberData.csv');
          resolve(console.log('no err, results from members query:', results));
        }
      }
    );
  });
};

// .then(result => {
//   postSchemaInitiate()
//     .then(connection.end())

seed().then(result => {
  connection.end();
});
