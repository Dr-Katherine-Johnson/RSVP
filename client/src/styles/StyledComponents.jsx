import {
  withStyles,
  Grid,
  Checkbox
} from '@material-ui/core';

export const Container = withStyles(() => ({
  root: {
    border: '#e6e6e6 solid 1px',
    maxWidth: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20%'
  }

}))(Grid);

export const EventInfoContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  }

}))(Grid);

export const TextButtonContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

}))(Grid);

export const FavoriteButton = withStyles(() => ({
  root: {
    border: '#c5c4c4 solid 1px',
    borderRadius: '7px',
    width: 34,
    height: 34
  }

}))(Checkbox);

