import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Card,
  CardHeader,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';


const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.secondary.main,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: '12px',
    padding: 20,
  },
  body: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '15px',
    padding: 20,
  },
}))(TableCell);


const styles = () => ({
  moreButton: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: '16px',
    boxSizing: 'border-box',
    textTransform: 'capitalize',
    height: 44,
    padding: 0,
    margin: 0,
  },
  cardReservations: {
    background: 'linear-gradient(180deg, #FFFFFF 55.21%, #FBFDFF 100%)',
    border: '1px solid #E3EDF4',
    boxSizing: 'border-box',
    boxShadow: '0px 3px 15px rgba(136, 196, 249, 0.21)',
    borderRadius: '4px',
    paddingBottom: 0,
    width: '100%',
  },
  cardHeaderReservations: {
    padding: 0,
    margin: 20,
    marginBottom: 12,
  },
});

const mapRows = (data) => data.map((row) => (
  <TableRow>
    <StyledTableCell size="small">{row.dateTime}</StyledTableCell>
    <StyledTableCell>{row.action}</StyledTableCell>
  </TableRow>
));

class ReservationHistory extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      cardReservations: PropTypes.string,
      cardHeaderReservations: PropTypes.string,
      tileTitle: PropTypes.string,
      card: PropTypes.string,
      moreButton: PropTypes.string,
    }),
    data: PropTypes.arrayOf(PropTypes.shape({
      dateTime: PropTypes.string,
      action: PropTypes.string,
    })),
    callbacks: PropTypes.shape({
      onMoreClick: PropTypes.func,
    }),
  };

  render() {
    const { classes, data, callbacks: { onMoreClick } } = this.props;
    const first3 = data.slice(0, 3);
    return (
      <Card className={classes.cardReservations}>
        <CardHeader title="Reservation history" classes={{ root: classes.cardHeaderReservations, title: classes.tileTitle }} />
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell size="small">Date & Time</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mapRows(first3)}
          </TableBody>
        </Table>
        <Button 
          onClick={onMoreClick} 
          color="primary"
          className={classes.moreButton}
          fullWidth
        >
          More 
          {' '}
          <ExpandMoreIcon />
        </Button>
      </Card>
    );
  }
}

export default withStyles(styles)(ReservationHistory);
