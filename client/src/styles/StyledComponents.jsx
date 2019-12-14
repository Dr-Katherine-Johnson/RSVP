import {
  withStyles,
  Grid,
  Checkbox,
  Button,
  Typography
} from '@material-ui/core';

const Roboto = 'Roboto, sans-serif'

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
    height: 34,
    marginLeft: 60,
    '&:hover': {
      backgroundColor: 'transparent',
    }
  }

}))(Checkbox);

export const AttendButton = withStyles(() => ({
  root: {
    backgroundColor: '#f55858',
    borderRadius: '7px',
    width: 114,
    height: 54,
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#f55758',
      opacity: '0.9',
      transition: '0.3s'
    },
    fontWeight: 600,
    marginLeft: 20,
    fontFamily: Roboto,
    fontSize: 16,
  },

}))(Button);

export const TimeDate = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 16,
    fontWeight: 300
  }

}))(Typography);

export const BoldText = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 16,
    fontWeight: 600
  }

}))(Typography);

