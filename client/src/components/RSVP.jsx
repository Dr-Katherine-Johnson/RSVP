import React from 'react';
import moment from 'moment';

import { Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import {
  Container,
  EventInfoContainer,
  TextButtonContainer,
  FavoriteButton,
  AttendButton,
  TimeDate,
  BoldText
} from '../styles/StyledComponents.jsx';

class RSVP extends React.Component {

  render() {
    const event = this.props.event;
    const date = moment(event.local_date_time).utc().format('ddd, MMM DD');
    const time = moment(event.local_date_time).utc().format('h:mm A');
    const eventTitle = this.props.event.title

    return (
      <Container>
        <EventInfoContainer>
          <Box>
            <TimeDate>{date} · {time}</TimeDate>
          </Box>
          <Box>
            <BoldText>{eventTitle}</BoldText>
          </Box>
        </EventInfoContainer>
        <TextButtonContainer>
          <Box>
            <BoldText>FREE</BoldText>
          </Box>
          <Box>
            <FavoriteButton
              icon={<StarBorderIcon />} checkedIcon={<StarIcon />} value="checkedH" />
            <AttendButton>Attend</AttendButton>
          </Box>
        </TextButtonContainer>
      </Container>
    )
  }
}

export default RSVP;