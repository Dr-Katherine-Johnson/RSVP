import React from 'react';
import moment from 'moment';
import {
  Box,
  Typography,
} from '@material-ui/core';
import {
  Container,
  EventInfo,
  TextButton
} from '../styles/StyledComponents.jsx';

class RSVP extends React.Component {

  render() {
    const event = this.props.event;
    const date = moment(event.local_date_time).utc().format('ddd, MMM DD');
    const time = moment(event.local_date_time).utc().format('h:mm A');
    const eventTitle = this.props.event.title

    return (
      <Container>
        <EventInfo>
          <Box>
            <Typography>{date} · {time}</Typography>
          </Box>
          <Box>
            <Typography>{eventTitle}</Typography>
          </Box>
        </EventInfo>
        <TextButton>
          <Box>
            <Typography>Free</Typography>
          </Box>
          <Box className="btn-container">
            <button type="button">Star</button>
            <button type="button">Attend</button>
          </Box>
        </TextButton>
      </Container>
    )
  }
}

export default RSVP;