import React from 'react';
import moment from 'moment';
import axios from 'axios';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import {
  Container,
  EventInfoContainer,
  TextButtonContainer,
  FavoriteButton,
  TimeDate,
  BoldText
} from '../styles/StyledComponents.jsx';

import AttendDialog from './AttendDialog.jsx'

class RSVP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventHosts: []
    }
  }

  componentDidMount() {
    axios.get('/rsvp/hosts/0')
      .then((eventHosts) => {
        this.setState({
          eventHosts: eventHosts.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const event = this.props.event;
    const eventHosts = this.state.eventHosts
    const date = moment(event.local_date_time).utc().format('ddd, MMM DD');
    const time = moment(event.local_date_time).utc().format('h:mm A');
    const eventTitle = this.props.event.title

    return (
      <Container>
        <EventInfoContainer>
          <TimeDate>{date} · {time}</TimeDate>
          <BoldText>{eventTitle}</BoldText>
        </EventInfoContainer>
        <TextButtonContainer>
          <BoldText>FREE</BoldText>
          <FavoriteButton
            icon={<StarBorderIcon />} checkedIcon={<StarIcon />} value="checkedH" />
          <AttendDialog date={date} time={time} title={eventTitle} hosts={eventHosts} />
        </TextButtonContainer>
      </Container>
    )
  }
}

export default RSVP;