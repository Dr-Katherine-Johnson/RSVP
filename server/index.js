const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const db = require('../database/index.js')
const rsvpRouter = require('./routes/rsvp');

app.use(cors());
app.use(express.static('public'));

app.use('/rsvp', rsvpRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
)
