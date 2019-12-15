import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Avatar, Typography, Grid } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
  AttendButton,
  DialogClose,
  DialogContent,
  AvatarContainer,
  HeaderContainer,
  DialogHeader
} from '../styles/StyledComponents.jsx';

const styles = makeStyles(theme => ({
  dialog: {
    width: 440,
    height: 555,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));


export default function AttendDialog({ date, time, title, hosts }) {
  console.log(hosts)
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
          <AvatarContainer>
            {hosts.length > 1 ? (
              <AvatarGroup>
                <Avatar src={hosts[0].thumbnail} className={classes.large} />
                <Avatar src={hosts[1].thumbnail} className={classes.large} />
              </AvatarGroup>
            ) : (
                hosts.map(host => {
                  return <Avatar src={host.thumbnail} className={classes.large} />
                })
              )
            }
          </AvatarContainer>
          <HeaderContainer>
            {hosts.length > 1 ? (
              <DialogHeader>These are your hosts for the event</DialogHeader>
            ) : (
                hosts.map(host => {
                  const firstName = host.name.split(' ')[0]
                  return <DialogHeader>This is {firstName}, your host for the event</DialogHeader>
                })
              )
            }
          </HeaderContainer>
        </DialogContent>
      </Dialog>
    </div >
  );
}
