// var mongoose = require('mongoose');
// //const mongoUri = 'mongodb://database/rsvp';
// const mongoUri = 'mongodb://localhost:27017/rsvp';

// mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once(';open', function() {
//   console.log('Connected to DB!');
// });

// module.exports = db;

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fila',
  database: 'meetup'
});

connection.connect();

module.exports = connection;
