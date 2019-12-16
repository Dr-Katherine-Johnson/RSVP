import React from 'react';
import moment from 'moment';
import { makeStyles, Grid, CardContent, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { EventContainer, EventCard } from '../styles/StyledComponents.jsx'


const styles = makeStyles(theme => ({
  response: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  responseIcon: {
    color: '#00d480',
  },
  responseText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    color: '#00d480',
    fontWeight: 600,
    paddingLeft: 5
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    fontWeight: 600
  },
  dateTime: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
  },
  social: {
    display: 'flex',
    padding: '20px 0px',
    color: '#a2a2a2',
    cursor: 'pointer'
  },
  socialIcon: {
    paddingRight: 10
  }
}));

const DialogEventInfo = ({ event, title, time }) => {
  const classes = styles()
  const date = moment(event.local_date_time).utc().format('ddd, MMM DD YYYY');
  return (
    <EventContainer>
      <EventCard>
        <CardContent>
          <Grid className={classes.response}>
            <CheckCircleIcon className={classes.responseIcon} /> <Typography className={classes.responseText}>Your response: Going</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.dateTime}>{date}, {time}</Typography>
          </Grid>
          <Grid className={classes.social}>
            <FacebookIcon className={classes.socialIcon} />
            <TwitterIcon className={classes.socialIcon} />
            <LinkedInIcon />
          </Grid>
        </CardContent>
      </EventCard>
    </EventContainer>
  );
}

export default DialogEventInfo;