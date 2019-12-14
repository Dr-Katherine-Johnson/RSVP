import {
  withStyles,
  Grid
} from '@material-ui/core';

export const Container = withStyles(() => ({
  root: {
    border: '#e6e6e6 solid 1px',
    maxWidth: '100%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20%'
  }

}))(Grid)