import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardHeader,
} from '@material-ui/core';
import { shape, string, oneOf, object } from 'prop-types';

const style = (() => ({
  
}));

const Tile = ({ classes, title, children }) => (
  <Card className={classes.card} style={{ height: 107 }}>
    <CardHeader title={title} classes={{ root: classes.cardHeader, title: classes.tileTitle }} />
    { children }
  </Card>
);

Tile.propTypes = {
  classes: shape({
    card: string,
    cardHeader: string,
    tileTitle: string,
    small: string,
    tilePrimary: string,
    tileSecondary: string,
  }),
  title: string,
  children: oneOf([string, object]),
};

export default withStyles(style)(Tile);
