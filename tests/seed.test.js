const _ = require('lodash');
const events = require('../database/seed.js');

describe('Event', () => {
  test('Should have generated 100 events', () => {
    expect(events).toHaveLength(100);
  });
  test('Event ID data should be a number', () => {
    _.forEach(events, (event) => {
      expect(event).toEqual(expect.objectContaining({
        eventId: expect.any(Number),
      }))
    })
  })
});

describe('Event Schema', () => {
  test('Should return an event object with the following keys: eventId, limit, setLimit, attendees, eventOrganizer, waitlist', () => {
    _.forEach(events, (event) => {
      expect(Object.keys(event)).toContain('eventId', 'limit', 'setLimit', 'attendees', 'eventOrganizer', 'waitlist')
    })
  });
});

