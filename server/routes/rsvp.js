const router = require('express').Router();
const Event = require('../../database/models/Event.js');
const db = require('../../database/index.js');
var _ = require('lodash');
const redis = require('redis');
const redis_port = 6379;
const client = redis.createClient(redis_port);

const setResponse = (key, val) => {
  return val;
};

//
router.route('/:eventId').get((req, res) => {
  db.query(
    `select * from events where id=${req.params.eventId}`,
    (err, results) => {
      if (err) {
        console.log('err!', err);
        res.status(404).json(`Error: ${err}`);
      } else {
        console.log('success!', results);
        client.set(req.params.eventId, results, (err, reply) => {
          if (err) {
            console.error('err', err);
          }
          console.log('reply', reply);
          res.json(setResponse(req.params.eventId, results));
        });
      }
    }
  );
});

router.route('/hosts/:eventId').get((req, res) => {
  console.log('req.params', req.params.eventId, 'client', client);
  db.query(
    `select * from members where organizing=${req.params.eventId}`,
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
            avatar: user.avatar,
            thumbnail: user.thumbnail
          };
          attendees.push(person);
        });
        client.set(
          req.params.eventId,
          JSON.stringify(attendees),
          (err, reply) => {
            if (err) {
              console.error('err', err);
            }
            console.log('reply', reply);
            res.json(setResponse(req.params.eventId, attendees));
          }
        );
      }
    }
  );
});

router.route('/attendees/:eventId').get((req, res) => {
  console.log('req.params.eventId', req.params.eventId);
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
        client.set(
          req.params.eventId,
          JSON.stringify(attendees),
          (err, reply) => {
            if (err) {
              console.error('err', err);
            }
            console.log('reply', reply);
            res.json(setResponse(req.params.eventId, attendees));
          }
        );
      }
    }
  );

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
