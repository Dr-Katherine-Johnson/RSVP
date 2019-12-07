const mongoose = require('mongoose');
const db = require('../index.js');

const memberSchema = new mongoose.Schema({
  memberId: String,
  name: String,
  avatar: String,
  thumbnail: String,
  favorite: Boolean,
})

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
