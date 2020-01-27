import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Typography, 
  Grid,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from '@material-ui/core';
import {
  shape, string, oneOf, number, object,
} from 'prop-types';

import Tile from './Tile';
import ToRightIcon from './toRight.svg';

const style = (() => ({
  tile: {
    padding: 0,
    margin: 0,
  },
  tilesGrid: {
    margin: 0,
    marginTop: 14,
  },
}));

const TilesGreed = ({
  classes, 
  time: {
    from, till, fromTime, tillTime, delta, 
  },
  customer: {
    customerName, customerNote, 
  },
  vehicle: { 
    vehicleTitle, vehicleNote,
  },
}) => (
  <Grid 
    className={classes.tilesGrid}
    direction="row"
    spacing={2}
    xs={12}
    container
    alignItems="stretch"
    alignContent="stretch"
    justify="space-between"
  >
    <Grid item xs className={classes.tile}>
      <Tile classes={classes} title="Vehicle">
        <ListItem style={{ padding: 0 }}>
          <ListItemAvatar className={classes.small}>
            <Avatar className={classes.small} />
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.tilePrimary, secondary: classes.tileSecondary }} 
            primary={vehicleTitle} 
            secondary={vehicleNote}
          />
        </ListItem>
      </Tile>
    </Grid>
    <Grid item xs className={classes.tile}>
      <Tile title="Customer" classes={classes}>
        <ListItem style={{ padding: 0 }}>
          <ListItemAvatar className={classes.small}>
            <Avatar className={classes.small} />
          </ListItemAvatar>
          <ListItemText
            classes={{ primary: classes.tilePrimary, secondary: classes.tileSecondary }} 
            primary={customerName} 
            secondary={customerNote}
          />
        </ListItem>
      </Tile>
    </Grid>
    <Grid item xs className={classes.tile}>
      <Tile title="Period" classes={classes}>
        <Grid container direction="row" xs={12} spacing={1}>
          <Grid item xs={4}>
            <Typography className={classes.tilePrimary}>{ from }</Typography>
            <Typography className={classes.tileSecondary}>
              From 
              {' '}
              { fromTime }
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <ToRightIcon />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.tilePrimary}>{ till }</Typography>
            <Typography className={classes.tileSecondary}>
              Until 
              {' '}
              { tillTime }
            </Typography>
          </Grid>
          <Grid item xs={1} style={{ display: 'flex' }} direction="column" alignItems="center">
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.tilePrimary}>{ delta }</Typography>
            <Typography className={classes.tileSecondary}>Days</Typography>
          </Grid>
        </Grid>
      </Tile>
    </Grid>
  </Grid>
);

TilesGreed.propTypes = {
  classes: shape({
    card: string,
    cardHeader: string,
    tileTitle: string,
    small: string,
    tile: string,
    tilePrimary: string,
    tileSecondary: string,
  }),
  time: shape({
    from: string,
    till: string,
    fromTime: string,
    tillTime: string,
    delta: oneOf([string, number]),
  }),
  customer: shape({
    customerName: string,
    customerNote: oneOf([string, object]),
  }),
  vehicle: shape({
    vehicleTitle: string, 
    vehicleNote: oneOf([string, object]),
  }),
};

export default withStyles(style)(TilesGreed);
