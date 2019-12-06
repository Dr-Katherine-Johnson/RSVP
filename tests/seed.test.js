const events = require('../database/seed.js');

test('Should have generated 100 events', () => {
  expect(events).toHaveLength(100);
});