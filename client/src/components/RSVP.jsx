import React from 'react';
import moment from 'moment';
import axios from 'axios';
import queryString from 'query-string';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import {
  Container,
  EventInfoContainer,
  TextButtonContainer,
  FavoriteButton,
  TimeDate,
  BoldText,
  EditContainer
} from '../styles/StyledComponents.jsx';

import AttendDialog from './AttendDialog.jsx';
import EditDialog from './EditDialog.jsx';

class RSVP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventHosts: [],
      showAttendBtn: true
    }
    this.handleClickAttend = this.handleClickAttend.bind(this);
    this.handleClickNotGoing = this.handleClickNotGoing.bind(this)
  }

  componentDidMount() {
    // window.location.search is ?event_id=0
    const value = queryString.parse(window.location.search)
    const id = value.event_id

    axios.get(`/rsvp/hosts/${id}`)
      .then((eventHosts) => {
        this.setState({
          eventHosts: eventHosts.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleClickAttend() {
    this.setState({
      showAttendBtn: false
    })
  }

  handleClickNotGoing() {
    this.setState({
      showAttendBtn: true
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
          {/* if Attend button IS NOT visible show message You're Going and the Edit RSVP button */}
          {!this.state.showAttendBtn ?
            (<EditContainer>
              <BoldText>You're going!</BoldText>
              <EditDialog handleClickNotGoing={this.handleClickNotGoing} />
            </EditContainer>
            ) : (
              // if Attend buttons IS visible show text FREE
              <>
                <BoldText>FREE</BoldText>
                <FavoriteButton
                  icon={<StarBorderIcon />} checkedIcon={<StarIcon />} value="checkedH" />
              </>
            )
          }
          <AttendDialog event={event} time={time} title={eventTitle} hosts={eventHosts} handleClickAttend={this.handleClickAttend} showAttendBtn={this.state.showAttendBtn} />
        </TextButtonContainer>
      </Container>
    )
  }
}

export default RSVP;