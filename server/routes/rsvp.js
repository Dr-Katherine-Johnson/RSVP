const router = require('express').Router();
let Event = require('../../database/models/Event.js');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId })
    .then((event) => res.json(event))
    .catch(err => res.status(400).json(`Error: ${err}`));
})
module.exports = router;