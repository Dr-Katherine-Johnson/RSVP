import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Typography, Grid } from '@material-ui/core';

import {
  DialogClose,
  DialogContent,
  DialogHeader,
  EditButton,
  NotGoingButton,
  TealButton,
  EditTextContainer
} from '../styles/StyledComponents.jsx';

const styles = makeStyles(theme => ({
  dialog: {
    width: 440,
    height: 304,
    padding: 20
  },
  button: {
    padding: 0,
    minHeight: 0,
    minWidth: 0
  },
  subheader: {
    fontSize: 20,
    fontWeight: 600
  },
  text: {
    fontSize: 16
  }
}));

export default function EditDialog({ handleClickNotGoing }) {
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
      <EditButton onClick={handleClickOpen} className={classes.button}>
        Edit RSVP
      </EditButton>
      <Dialog onClose={handleClose} open={open} classes={{ paper: classes.dialog }}>
        <DialogClose onClose={handleClose} />
        <DialogContent >
          <DialogHeader>Update your RSVP</DialogHeader>
          <EditTextContainer>
            <Typography className={classes.subheader}>Attendees</Typography>
            <Typography className={classes.text}>Current response: You're going</Typography>
          </EditTextContainer>
          <Grid>
            <NotGoingButton onClick={() => { handleClose(); handleClickNotGoing() }} >
              Not going
            </NotGoingButton>
            <TealButton>
              Update
            </TealButton>
          </Grid>
        </DialogContent >
      </Dialog>
    </div>
  );
}
