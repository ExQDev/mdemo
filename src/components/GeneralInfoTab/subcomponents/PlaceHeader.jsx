import React from 'react';
import { 
  Typography, 
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Badge,
} from '@material-ui/core';
import { shape, string, number } from 'prop-types';
import { withStyles } from '@material-ui/styles';
import PlaceIcon from '@material-ui/icons/Place';
import ArrowRightAltIcon from './arrowDown.svg';

const styles = () => ({
  km: {
    background: '#FAFCFD',
    border: '1px solid #EEF4F8',
    borderRadius: '4px 0px 0px 4px',
    width: 80,
    height: 31,
    position: 'absolute',
    right: -24,
    marginTop: -15,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: '12px',
    color: '#455A64',
    zIndex: 2,
  },
});

const PlaceHeader = ({ classes, fromPoint, toPoint, deltaKm }) => (
  <List 
    style={{ margin: -20, marginBottom: 0 }}
  >
    <ListItem 
      style={{ padding: 0, margin: 0, paddingBottom: 14 }}
    >
      <ListItemAvatar 
        className={classes.small}
      >
        <Badge 
          color="default" 
          badgeContent={1} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
          style={{ marginTop: 4 }}
        >
          <PlaceIcon color="secondary" />
        </Badge>
      </ListItemAvatar>
      <ListItemText 
        classes={{ primary: classes.tilePrimary, secondary: classes.tileSecondary }} 
        primary={fromPoint.title}
        secondary={`Pickup | Note: ${fromPoint.note}`}
      />
    </ListItem>
    <Divider style={{ width: '120%', marginLeft: -25 }} />
    <ArrowRightAltIcon style={{
      marginTop: -10, marginLeft: 5, position: 'absolute', color: '#30BE71', zIndex: 2, 
    }}
    />
    <Typography className={classes.km}>{deltaKm} km</Typography>
    <ListItem style={{
      padding: 0, paddingTop: 16, paddingBottom: 10, borderTop: '1px solid #EEF4F8', 
    }}
    >
      <ListItemAvatar className={classes.small}>
        <Badge 
          color="default" 
          badgeContent={2} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
          style={{ marginTop: 4 }}
        >
          <PlaceIcon color="secondary" />
        </Badge>
      </ListItemAvatar>
      <ListItemText 
        classes={{ primary: classes.tilePrimary, secondary: classes.tileSecondary }} 
        primary={toPoint.title} 
        secondary={`Return | Note: ${toPoint.note}`}
      />
    </ListItem>
  </List>
);

PlaceHeader.propTypes = {
  classes: shape({
    small: string,
    tilePrimary: string,
    tileSecondary: string,
    km: string,
  }),
  fromPoint: shape({
    title: string,
    note: string,
  }),
  toPoint: shape({
    title: string,
    note: string,
  }),
  deltaKm: number,
};

export default withStyles(styles)(PlaceHeader);
