import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Divider, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import Icon from '@material-ui/core/Icon';

import {
  ShareButton,
  DialogClose,
  DialogContent,
  DialogHeader,
  ShareDialogText
} from '../styles/StyledComponents.jsx';

const styles = makeStyles(theme => ({
  dialog: {
    width: 440,
    height: 380,
    padding: 20
  },
  socialContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0px'

  },
  icon: {
    color: '#a2a2a2',
    cursor: 'pointer',
    paddingRight: 5,
    width: 30,
    height: 30
  },
  header: {
    marginBottom: 10
  }
}));

const socials = [['Facebook', FacebookIcon], ['Twitter', TwitterIcon], ['LinkedIn', LinkedInIcon], ['Copy link', LinkIcon]];

export default function ShareDialog() {
  const classes = styles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ShareButton onClick={handleClickOpen}>
        Share
      </ShareButton>
      <Dialog onClose={handleClose} open={open} classes={{ paper: classes.dialog }}>
        <DialogClose onClose={handleClose} />
        <DialogContent >
          <DialogHeader className={classes.header}>Share this event</DialogHeader>
          {socials.map((item, i) => {
            return <div key={i}>
              {i === socials.length - 1 ?
                <>
                  <Grid className={classes.socialContainer}>
                    <Icon component={item[1]} className={classes.icon} /><ShareDialogText><div>{item[0]}</div></ShareDialogText>
                  </Grid>
                </>
                :
                <>
                  <Grid className={classes.socialContainer}>
                    <Icon component={item[1]} className={classes.icon} /><ShareDialogText><div>{item[0]}</div></ShareDialogText>
                  </Grid>
                  <Divider />
                </>
              }
            </div>
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
}
