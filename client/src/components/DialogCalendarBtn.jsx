import React from 'react';
import { Menu, MenuItem, Divider } from '@material-ui/core';
import { TealButton, CalendarBtnContainer } from '../styles/StyledComponents.jsx'

const calendars = ['Google', 'iCal', 'Outlook', 'Yahoo']

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
        {calendars.map((calendar, i) => {
          return <div key={i}>
            {/* if its the last item on the calendar list don't add the divider otherwise add divider */}
            {i === calendars.length - 1 ?
              <>
                <MenuItem onClick={handleCloseCalendar}>{calendar}</MenuItem>
              </>
              :
              <>
                <MenuItem onClick={handleCloseCalendar}>{calendar}</MenuItem>
                <Divider />
              </>
            }
          </div>
        })}
      </Menu>
    </div>
  )
}

export default DialogCalendarBtn;