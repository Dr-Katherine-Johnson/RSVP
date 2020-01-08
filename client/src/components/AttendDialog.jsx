import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {
  AttendButton,
  DialogClose,
  AvatarHeaderContainer,
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
    height: 600,
  },
  avatar: {
    justifyContent: 'center',
    padding: '45px 0px 20px 0px'
  }
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
      {/* if Attend button IS NOT visible show Share button */}
      {!showAttendBtn ?
        <ShareDialog />
        :
        // otherwise show Attend button
        <AttendButton onClick={() => { handleClickOpen(); handleClickAttend() }}>
          Attend
        </AttendButton>}
      <Dialog onClose={handleClose} open={open} classes={{ paper: classes.dialog }}>
        <DialogClose onClose={handleClose} />
        <MuiDialogContent >
          <AvatarHeaderContainer>
            {hosts.length > 1 ? (
              <>
                <AvatarGroup className={classes.avatar}>
                  <Avatar src={hosts[0].thumbnail} style={{ width: 72, height: 72 }} />
                  <Avatar src={hosts[1].thumbnail} style={{ width: 72, height: 72 }} />
                </AvatarGroup>
                <HeaderContainer>
                  <DialogHeader>
                    <div>These are your hosts for the event</div>
                  </DialogHeader>
                </HeaderContainer>
              </>
            ) : (
                hosts.map((host, i) => {
                  const firstName = host.name.split(' ')[0]
                  return <div key={i}>
                    <AvatarGroup className={classes.avatar}>
                      <Avatar src={host.thumbnail} style={{ width: 72, height: 72 }} />
                    </AvatarGroup>
                    <HeaderContainer>
                      <DialogHeader>This is {firstName}, your host for the event</DialogHeader>
                    </HeaderContainer>
                  </div>
                })
              )
            }
          </AvatarHeaderContainer>
          <SubheaderContainer>
            <DialogSubheader>Fanny pack la croix mixtape, gastropub cardigan iceland polaroid hammock typewriter</DialogSubheader>
          </SubheaderContainer>
          <DialogCalendarBtn />
          <DialogEventInfo event={event} title={title} time={time} />
        </MuiDialogContent>
      </Dialog>
    </div >
  );
}
