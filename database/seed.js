const faker = require('faker');
const _ = require('lodash');
const db = require('./index.js');
const Event = require('./models/Event.js');


let members = [];

for (let i = 0; i < 500; i++) {
  const memberId = `m${i}`;
  const name = faker.name.findName();
  const avatar = 'http://placecorgi.com/100';
  const thumbnail = 'http://placecorgi.com/50';
  const favorite = faker.random.boolean();

  let newMember = {
    memberId,
    name,
    avatar,
    thumbnail,
    favorite
  }

  members.push(newMember)
}


let events = [];
const randomNum = faker.random.number({ min: 1, max: 100 });

for (let i = 0; i < 100; i++) {
  const eventId = i;
  const limit = faker.random.boolean();
  const setLimit = limit ? faker.random.number({ min: 20, max: 100 }) : null;
  const attendees = limit ? _.sampleSize(members, setLimit) : _.sampleSize(members, randomNum);
  const numEventOrg = faker.random.number({ min: 1, max: 2 });
  const eventOrganizer = numEventOrg > 1 ? [attendees[0], attendees[1]] : [attendees[0]];
  const waitlist = setLimit === null ? null : _.sampleSize(members, randomNum);

  let newEvents = {
    eventId,
    limit,
    setLimit,
    attendees,
    eventOrganizer,
    waitlist,
  };

  events.push(newEvents);
}

const insertSampleEvents = function () {
  Event.deleteMany((err) => {
    console.log('Removed Event')
  })
    .then(() =>
      Event.create(events)
    )
    .then(() => db.close())
    .then(() =>
      console.log('Database seeded!')
    )
};

insertSampleEvents();

module.exports = events;
