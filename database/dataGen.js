const faker = require('faker');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const dataGen = async () => {
  let counter = 0;
  let imageArr = [];
  let eventArr = [];
  let membersArr = [];

  const eventCsvWriter = createCsvWriter({
    path: 'database/csvStorage/eventData.csv',
    header: [
      { id: 'eventLimit', title: 'eventLimit' },
      { id: 'setLimit', title: 'setLimit' }
    ]
  });

  const memberCsvWriter = createCsvWriter({
    path: 'database/csvStorage/memberData.csv',
    header: [
      { id: 'name', title: 'name' },
      { id: 'avatar', title: 'avatar' },
      { id: 'thumbnail', title: 'thumbnail' },
      { id: 'favorite', title: 'favorite' },
      { id: 'waiting', title: 'waiting' },
      { id: 'attending', title: 'attending' },
      { id: 'organizing', title: 'organizing' }
    ]
  });

  // populates image array
  for (let h = 0; h < 1000; h++) {
    let image = faker.image.avatar();
    imageArr.push(image);
  }

  // one loop creates 1 event & n members (attendees + waitlist)
  for (let i = 1; i <= 1000000; i++) {
    const bitBool = faker.random.number({ min: 0, max: 1 }); // sets boolean for eventLimit
    const setLimit =
      bitBool === 1 ? faker.random.number({ min: 5, max: 20 }) : 0;

    const numberOfAttendees =
      setLimit !== 0 ? faker.random.number({ min: 5, max: 20 }) : setLimit;

    //event
    const event = {
      eventLimit: bitBool === 1 ? true : false,
      setLimit: setLimit
    };
    counter++;
    console.log(i);
    eventArr.push(event);

    //attendees
    for (let j = 0; j < numberOfAttendees; j++) {
      const name = faker.name.findName();
      const avatar = imageArr[Math.floor(Math.random() * Math.floor(1000))];
      const attendingFav = faker.random.number({ min: 0, max: 1 });

      const findOrganizers = () => {
        if (j === 0 || j === 1) {
          return i;
        } else {
          return 0;
        }
      };

      const organizing = findOrganizers(); //is attendee also an organizer?

      const attendee = {
        name: name,
        avatar: avatar,
        thumbnail: avatar,
        favorite: attendingFav === 1 ? true : false,
        waiting: null,
        attending: i, //i === id/foreign key
        organizing: organizing
      };

      membersArr.push(attendee);
    }

    //waitList
    if (setLimit !== 0) {
      const waitlistLength = faker.random.number({ min: 5, max: 20 });
      for (let k = 0; k < waitlistLength; k++) {
        const name = faker.name.findName();
        const avatar = faker.image.avatar();
        const waitingFav = faker.random.number({ min: 0, max: 1 });

        const waiting = {
          name: name,
          avatar: avatar,
          thumbnail: avatar,
          favorite: waitingFav === 1 ? true : false,
          waiting: i, //i === id/foreign key
          attending: null,
          organizing: null
        };

        membersArr.push(waiting);
      }
    }

    if (counter === 100) {
      await eventCsvWriter.writeRecords(eventArr).catch(err => {
        console.log('err from eventCsv: ', err);
      }); // returns a promise
      await memberCsvWriter.writeRecords(membersArr).catch(err => {
        console.log('err from memberCsv: ', err);
      }); // returns a promise
      membersArr = [];
      eventArr = [];
      counter = 0;
    }
  }
  console.log('dataGen done!');
};

module.exports = dataGen;