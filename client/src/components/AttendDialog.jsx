import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Typography } from '@material-ui/core';
import {
  AttendButton,
  DialogClose,
  DialogContent
} from '../styles/StyledComponents.jsx';

const styles = makeStyles({
  dialog: {
    width: 440,
    height: 555,
  },
});


export default function AttendDialog({ date, time, title, hosts }) {
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
      <AttendButton onClick={handleClickOpen}>
        Attend
      </AttendButton>
      <Dialog onClose={handleClose} open={open} classes={{
        paper: classes.dialog,
      }}>
        <DialogClose onClose={handleClose} />
        <DialogContent >
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
