import React from 'react';
import { Menu, MenuItem, Divider } from '@material-ui/core';
import { TealButton, CalendarBtnContainer } from '../styles/StyledComponents.jsx'


const DialogCalendarBtn = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickCalendar = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCalendar = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CalendarBtnContainer>
        <TealButton onClick={handleClickCalendar}>
          Add to calendar
        </TealButton>
      </CalendarBtnContainer>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseCalendar}
      >
        <MenuItem onClick={handleCloseCalendar}>Google</MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseCalendar}>iCal</MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseCalendar}>Outlook</MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseCalendar}>Yahoo</MenuItem>
      </Menu>
    </div>
  )
}

export default DialogCalendarBtn;