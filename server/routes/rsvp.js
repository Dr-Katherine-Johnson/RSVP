const router = require('express').Router();
let Event = require('../../database/models/Event.js');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

module.exports = router;