require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const db = require('../database/index.js');
const rsvpRouter = require('./routes/rsvp');
const bodyParser = require('body-parser');
const redis = require('redis');
const redis_port = 6379;
const client = redis.createClient(redis_port);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const cache = (req, res, next) => {
  client.get(toString(req.params.eventId), (err, data) => {
    if (err) {
      console.log('err: ', err);
    }
    if (data !== null) {
      res.send(setResponse(req.params.eventId, data));
    } else {
      next();
    }
  });
};

app.use('/rsvp', cache, rsvpRouter);

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = { app, server };
module.exports = client;
