const faker = require('faker');

const generateRandomData = (userContext, events, done) => {
  // generate data with Faker:
  const id = `${faker.random.number({ min: 9950000, max: 9999999 })}`;
  const id2 = `${faker.random.number({ min: 9950000, max: 9999999 })}`;
  const eventLimit = `${faker.random.number({ min: 0, max: 1 })}`;
  let setLimit;

  if (eventLimit > 0) {
    setLimit = `${faker.random.number({ min: 3, max: 5 })}`;
  } else {
    setLimit = 0;
  }

  // add variables to virtual user's context:
  userContext.vars.id = id;
  userContext.vars.id2 = id2;
  userContext.vars.eventLimit = eventLimit;
  userContext.vars.setLimit = setLimit;

  // continue with executing the scenario:
  return done();
};

module.exports = {
  generateRandomData
};
