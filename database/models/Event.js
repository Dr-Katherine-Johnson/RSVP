const mongoose = require('mongoose');
const db = require('../index.js');
const Member = require('./Member.js').schema;

const eventSchema = new mongoose.Schema({
  eventId: Number,
  limit: Boolean,
  setLimit: { type: Number, default: null },
  attendees: [Member],
  eventOrganizer: [Member],
  waitlist: [Member]
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
