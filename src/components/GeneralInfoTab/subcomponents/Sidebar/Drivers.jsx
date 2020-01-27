import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core';
import {
  shape, string, arrayOf,
} from 'prop-types';
import WheelIcon from '../../../icons/DrivingWheelIcon';

const style = ((theme) => ({
  smallest: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    minWidth: theme.spacing(2),
    marginRight: theme.spacing(1),
    alignSelf: 'start',
    marginTop: theme.spacing(0.5),
  },
  cardDrivers: {
    background: 'linear-gradient(180deg, #FFFFFF 55.21%, #FBFDFF 100%)',
    border: '1px solid #E3EDF4',
    boxSizing: 'border-box',
    boxShadow: '0px 3px 15px rgba(136, 196, 249, 0.21)',
    borderRadius: '4px',
    width: '100%',
    padding: 20,
    paddingBottom: 0,
  },
  driverItem: { 
    padding: 0, 
    paddingBottom: 12,
    paddingTop: 12,
  },
}));

const mapDrivers = (drivers, classes) => drivers.map((driver, index) => (
  <ListItem className={classes.driverItem} divider={index !== drivers.length - 1}>
    <ListItemAvatar className={classes.smallest}>
      <WheelIcon color={index === 0 ? 'primary' : 'secondary'} className={classes.smallest} />
    </ListItemAvatar>
    <ListItemText
      classes={{ 
        primary: classes.tilePrimary, 
        secondary: classes.tileSecondary,
      }} 
      primary={driver.name}
      secondary={driver.info}
    />
  </ListItem>
));

const Drivers = ({ classes, drivers }) => (
  <ListItem disableGutters>
    <Card className={classes.cardDrivers}>
      <CardHeader 
        title="Drivers" 
        classes={{ root: classes.cardHeader, title: classes.tileTitle }} 
      />
      <List>
        {mapDrivers(drivers, classes)}
      </List>
    </Card>
  </ListItem>
);

Drivers.propTypes = {
  classes: shape({
    card: string,
    cardHeader: string,
    tileTitle: string,
    smallest: string,
    tilePrimary: string,
    tileSecondary: string,
  }),
  drivers: arrayOf(shape({
    name: string,
    info: string,
  })),
};

export default withStyles(style)(Drivers);
