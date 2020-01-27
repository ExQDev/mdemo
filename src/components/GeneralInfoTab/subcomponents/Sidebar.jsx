import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
  List,
} from '@material-ui/core';
import {
  shape, string,
} from 'prop-types';
import Drivers from './Sidebar/Drivers';
import Checklist from './Sidebar/Checklist';


const style = (() => ({
  sidebar: {
    padding: '0 2px',
    marginLeft: -6,
  },
}));

const Sidebar = (props) => (
  <Grid item>
    <List className={props.classes.sidebar}>
      <Drivers {...props} />
      <Checklist {...props} />
    </List>
  </Grid>
);

Sidebar.propTypes = {
  classes: shape({
    applyButton: string,
    tilesGrid: string,
  }),
};

export default withStyles(style)(Sidebar);
