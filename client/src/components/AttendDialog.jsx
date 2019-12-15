import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {
  AttendButton,
  DialogClose,
  DialogContent
} from '../styles/StyledComponents.jsx';


export default function AttendDialog() {
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
      <Dialog onClose={handleClose} open={open}>
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
