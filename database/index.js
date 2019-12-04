var mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/attendees';

mongoose.connect(mongoUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to DB!')
});

module.exports = db;
