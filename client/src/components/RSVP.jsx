import React from 'react';
import moment from 'moment';
import {
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
import { Container } from '../styles/StyledComponents.jsx';

class RSVP extends React.Component {

  render() {
    const event = this.props.event;
    const date = moment(event.local_date_time).utc().format('ddd, MMM DD');
    const time = moment(event.local_date_time).utc().format('h:mm A');
    const eventTitle = this.props.event.title

    return (
      <Container>
        <Grid className="event-info-container">
          <Box>
            <Typography>{date} · {time}</Typography>
          </Box>
          <Box>
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
      </Container>
    )
  }
}

export default RSVP;