import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Button,
} from '@material-ui/core';
import {
  shape, string, func,
} from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';


const style = (() => ({
  applyButton: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: '16px',
    border: '2px solid #1E88E5',
    boxSizing: 'border-box',
    borderRadius: 4,
    textTransform: 'capitalize',
    height: 44,
  },
  editReservationGrid: {
    margin: 0,
    marginTop: 24,
    padding: 10,
  },
}));

const EditReservation = ({ classes, onEditClick }) => (
  <Grid container className={classes.editReservationGrid}>
    <Grid item xs={12}>
      <Button 
        onClick={onEditClick} 
        color="primary"
        className={classes.applyButton}
        startIcon={<EditIcon />}
        fullWidth
      >
        Edit Reservation
      </Button>
    </Grid>
  </Grid>
);

EditReservation.propTypes = {
  classes: shape({
    applyButton: string,
    tilesGrid: string,
  }),
  onEditClick: func,
};

export default withStyles(style)(EditReservation);
