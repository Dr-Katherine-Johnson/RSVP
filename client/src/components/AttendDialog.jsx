import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
  AttendButton,
  DialogClose,
  DialogContent,
  AvatarContainer,
  HeaderContainer,
  DialogHeader,
  SubheaderContainer,
  DialogSubheader
} from '../styles/StyledComponents.jsx';

import DialogCalendarBtn from './DialogCalendarBtn.jsx';
import DialogEventInfo from './DialogEventInfo.jsx';
import ShareDialog from './ShareDialog.jsx';

const styles = makeStyles(theme => ({
  dialog: {
    width: 440,
    height: 555,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default function AttendDialog({ event, time, title, hosts, handleClickAttend, showAttendBtn }) {
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
      {!showAttendBtn ?
        <ShareDialog />
        : <AttendButton onClick={() => { handleClickOpen(); handleClickAttend() }}>
          Attend
      </AttendButton>}
      <Dialog onClose={handleClose} open={open} classes={{ paper: classes.dialog }}>
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
          <SubheaderContainer>
            <DialogSubheader>Fanny pack la croix mixtape, gastropub cardigan iceland polaroid hammock typewriter</DialogSubheader>
          </SubheaderContainer>
          <DialogCalendarBtn />
          <DialogEventInfo event={event} title={title} time={time} />
        </DialogContent>
      </Dialog>
    </div >
  );
}
