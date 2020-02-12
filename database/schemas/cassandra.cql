
DROP KEYSPACE IF EXISTS meetup;

CREATE KEYSPACE meetup
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

use meetup;

CREATE TABLE event (
  event_id uuid,
  eventLimit Boolean,
  setLimit int,
  PRIMARY KEY (event_id)
);

CREATE TABLE members (
  member_id uuid,
  name text,
  avatar text,
  thumbnail text,
  favorite Boolean,
  waiting int,
  attending int,
  organizing int,
  PRIMARY KEY (member_id)
);