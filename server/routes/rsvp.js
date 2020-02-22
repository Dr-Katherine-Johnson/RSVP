const router = require('express').Router();
const Event = require('../../database/models/Event.js');
const db = require('../../database/index.js');
var _ = require('lodash');

// router.route('/:eventId').get((req, res) => {
//   Event.findOne({ eventId: req.params.eventId }, 'attendees waitlist')
//     .then(attendeesCount => res.json(attendeesCount))
//     .catch(err => res.status(404).json(`Error: ${err}`));
// });

router.route('/:eventId').get((req, res) => {
  db.query(
    `select * from events where id=${req.params.eventId}`,
    (err, results) => {
      if (err) {
        console.log('err!', err);
        res.status(404).json(`Error: ${err}`);
      } else {
        console.log('success!', results);
        res.json(results);
      }
    }
  );
});

// put that updates eventLimit and setLimit
router.route('/:eventId/:eventLimit/:setLimit').put((req, res) => {
  db.query(
    `update events set eventLimit=${req.params.eventLimit}, setLimit=${req.params.setLimit} where id=${req.params.eventId}`,
    (err, results) => {
      if (err) {
        console.log('err!', err);
        res.status(404).json(`Error: ${err}`);
      } else {
        console.log('success!', results);
        res.json(results);
      }
    }
  );
});

router.route('/hosts/:eventId').get((req, res) => {
  // Event.findOne({ eventId: req.params.eventId })
  //   .then(event => {
  //     var eventHosts = [];
  //     event.eventOrganizer.forEach(user => {
  //       const person = {
  //         name: user.name,
  //         thumbnail: user.thumbnail
  //       };
  //       eventHosts.push(person);
  //     });
  //     res.json(eventHosts);
  //   })
  //   .catch(err => res.status(404).json(`Error: ${err}`));
  db.query(
    `select * from members where organizing=${req.params.eventId}`,
    // `select * from members where name="Tressie Gleason II";`,
    (err, results) => {
      if (err) {
        console.log('err!', err);
        res.status(404).json(`Error: ${err}`);
      } else {
        console.log('results', results);
        var attendees = [];
        _.forEach(results, user => {
          const person = {
            name: user.name,
            avatar: user.avatar
          };
          attendees.push(person);
        });
        res.json(attendees);
      }
    }
  );
});

router.route('/attendees/:eventId').get((req, res) => {
  console.log('req.params.eventId', req.params.eventId);
  // Event.findOne({ eventId: req.params.eventId })
  //   .then(event => {
  //     var attendees = [];
  //     event.attendees.forEach(user => {
  //       const person = {
  //         name: user.name,
  //         avatar: user.avatar
  //       };
  //       attendees.push(person);
  //     });
  //     res.json(attendees);
  //   })
  //   .catch(err => res.status(404).json(`Error: ${err}`));
  db.query(
    `select * from members where attending=${req.params.eventId}`,
    // `select * from members where name="Tressie Gleason II";`,
    (err, results) => {
      if (err) {
        console.log('err!', err);
        res.status(404).json(`Error: ${err}`);
      } else {
        console.log('results', results);
        var attendees = [];
        _.forEach(results, user => {
          const person = {
            name: user.name,
            avatar: user.avatar
          };
          attendees.push(person);
        });
        res.json(attendees);
      }
    }
  );
});

module.exports = router;

// router.route('/').post((req, res) => {
//   Event.create(req.body, (err, doc) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       res.send(doc);
//     }
//   });
// });

// router.route('/:eventId').put((req, res) => {
//   Event.updateOne({ eventId: req.params.eventId }, req.body, (err, doc) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       res.send(doc);
//     }
//   });
// });

// router.route('/:eventId').delete((req, res) => {
//   Event.deleteOne({ eventId: req.params.eventId }, (err, doc) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       res.send('deleted!');
//     }
//   });
// });
