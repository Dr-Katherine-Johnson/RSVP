const express = require('express');
const app = express();
const port = 3001;
const db = require('../database/index.js')

app.use(express.static('public'));


app.listen(port, () =>
  console.log(`Listening on port ${port}`)
)
