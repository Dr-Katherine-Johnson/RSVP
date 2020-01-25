const router = require('express').Router();
let Event = require('../../database/models/Event.js');

router.route('/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId }, 'attendees waitlist')
    .then(attendeesCount => res.json(attendeesCount))
    .catch(err => res.status(404).json(`Error: ${err}`));
});
//-------------------------------------------------------------------------

router.route('/').post((req, res) => {
  Event.create(req.body, (err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.route('/:eventId').put((req, res) => {
  Event.updateOne({ eventId: req.params.eventId }, req.body, (err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.route('/:eventId').delete((req, res) => {
  Event.deleteOne({ eventId: req.params.eventId }, (err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send('deleted!');
    }
  });
});
//--------------------------------------------------------------------

router.route('/hosts/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId })
    .then(event => {
      var eventHosts = [];
      event.eventOrganizer.forEach(user => {
        const person = {
          name: user.name,
          thumbnail: user.thumbnail
        };
        eventHosts.push(person);
      });
      res.json(eventHosts);
    })
    .catch(err => res.status(404).json(`Error: ${err}`));
});

router.route('/attendees/:eventId').get((req, res) => {
  Event.findOne({ eventId: req.params.eventId })
    .then(event => {
      var attendees = [];
      event.attendees.forEach(user => {
        const person = {
          name: user.name,
          avatar: user.avatar
        };
        attendees.push(person);
      });
      res.json(attendees);
    })
    .catch(err => res.status(404).json(`Error: ${err}`));
});

module.exports = router;
