import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { EventContainer, EventCard, TextButtonContainer } from '../styles/StyledComponents.jsx'


const DialogEventInfo = () => {

  return (
    <EventContainer>
      <EventCard>
        <CardContent>
          <TextButtonContainer>
            <CheckCircleIcon /> Word of the Day
        </TextButtonContainer>
          <Typography>
            Cloud bread lo-fi migas, succulents tilde try-hard photo booth cornhole
        </Typography>
          <Typography >
            sriracha
        </Typography>
          <Typography>
            Thundercats austin drinking vinegar bicycle
          </Typography>
        </CardContent>
      </EventCard>
    </EventContainer>
  );
}

export default DialogEventInfo;