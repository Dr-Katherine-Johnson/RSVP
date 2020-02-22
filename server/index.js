require('newrelic');

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const db = require('../database/index.js');
const rsvpRouter = require('./routes/rsvp');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/rsvp', rsvpRouter);

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = { app, server };
