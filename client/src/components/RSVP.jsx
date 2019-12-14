import React from 'react';
import moment from 'moment';
import {
  Grid,
  Box,
  Typography,
} from '@material-ui/core';

class RSVP extends React.Component {

  render() {
    const event = this.props.event;
    const date = moment(event.local_date_time).utc().format('dddd, MMM DD');
    const time = moment(event.local_date_time).utc().format('h:mm A');
    const eventTitle = this.props.event.title

    return (
      <Grid className="rsvp-container">
        <Grid className="event-info-container">
          <Box className="date-time">
            <Typography>{date}</Typography><Typography>{time}</Typography>
          </Box>
          <Box className="event-title">
            <Typography>{eventTitle}</Typography>
          </Box>
        </Grid>
        <Grid className="text-btn-container">
          <Box>
            <Typography>Free</Typography>
          </Box>
          <Box className="btn-container">
            <button type="button">Star</button>
            <button type="button">Attend</button>
          </Box>
        </Grid>
      </Grid>
    )
  }
}

export default RSVP;