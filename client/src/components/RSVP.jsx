import React from 'react';

class RSVP extends React.Component {

  render() {
    return (
      <div className="rsvp-container">
        <div className="event-info-container">
          <div className="date-time">
            <span>Date</span> <span>Time</span>
          </div>
          <div className="event-title">
            <span>Event Title</span>
          </div>
        </div>
        <div className="text-btn-container">
          <div>
            <span>Free</span>
          </div>
          <div className="btn-container">
            <button type="button">Star</button>
            <button type="button">Attend</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RSVP;