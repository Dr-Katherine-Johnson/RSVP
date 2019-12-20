import React from 'react';
import ReactDOM from 'react-dom';
import RSVP from './components/RSVP.jsx';

var event = {
  "title": "Grass-roots web-enabled info-mediaries",
  "local_date_time": "2019-10-07T08:05:25.286Z",
  "org_name": "Koch, Blick and Turcotte",
  "private": true
}

ReactDOM.render(<RSVP event={event} />, document.getElementById('rsvp'));