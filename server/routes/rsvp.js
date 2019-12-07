const router = require('express').Router();
let Event = require('../../database/models/Event.js');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId }, 'attendees waitlist')
    .then((attendeesCount) => res.json(attendeesCount))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/hosts/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId })
    .then((event) => {
      var eventHosts = []
      event.eventOrganizer.forEach(user => {
        const person = {
          name: user.name,
          thumbnail: user.thumbnail
        }
        eventHosts.push(person)
      })
      res.json({ eventHosts })
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/profiles/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId })
    .then((event) => {
      var attendees = []
      event.attendees.forEach(user => {
        const person = {
          memberId: user.memberId,
          name: user.name,
          thumbnail: user.thumbnail
        }
        attendees.push(person)
      })
      res.json({ attendees })
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/attendees/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId })
    .then((event) => {
      var attendees = []
      event.attendees.forEach(user => {
        const person = {
          name: user.name,
          avatar: user.avatar
        }
        attendees.push(person)
      })
      res.json({ attendees })
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
})


module.exports = router;