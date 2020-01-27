import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Typography, 
  Card,
  CardHeader,
  Grid,
  Divider,
} from '@material-ui/core';
import PropTypes, { shape, number, func } from 'prop-types';


const styles = () => ({
  detailsButton: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: '16px',
    border: '1px solid #A3D2FC',
    boxSizing: 'border-box',
    borderRadius: 4,
    height: 38,
    marginTop: 20,
    textTransform: 'unset',
  },
  bigTilePrimary: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: '20px',
    textAlign: 'center',
  },
  bigTileTrinity: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 10,
    lineHeight: '12px',
    textAlign: 'center',
  },
  bigTileSecondary: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: '12px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

class PaymentDetails extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      bigTilePrimary: PropTypes.string,
      bigTileSecondary: PropTypes.string,
      bigTileTrinity: PropTypes.string,
      cardHeader: PropTypes.string,
      tileTitle: PropTypes.string,
      card: PropTypes.string,
      additionalDivider: PropTypes.string,
      detailsButton: PropTypes.string,
    }),
    paymentDetails: shape({
      dueToPay: number,
      prepayment: number,
      callbacks: {
        onFullPaymentDetailsClick: func,
      },
    }),
  };

  render() {
    const { classes, paymentDetails: { dueToPay, prepayment, callbacks: { onFullPaymentDetailsClick } } } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="Billing" classes={{ root: classes.cardHeader, title: classes.tileTitle }} />
        <Grid container direction="row" xs={14} spacing={0}>
          <Grid item xs>
            <Typography className={classes.bigTileTrinity}>Due to pay</Typography>
            <Typography className={classes.bigTilePrimary}>
              {dueToPay}
              {' '}
              €
            </Typography>
          </Grid>
          <Grid item xs={1} style={{ display: 'flex' }} direction="column" alignItems="center">
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs>
            <Typography className={classes.bigTileTrinity}>Prepayment</Typography>
            <Typography className={classes.bigTilePrimary}>
              {prepayment}
              {' '}
              €
            </Typography>
          </Grid>
          <Grid item xs={1} style={{ display: 'flex' }} direction="column" alignItems="center">
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs>
            <Typography color="primary" className={classes.bigTileSecondary}>Total Amount</Typography>
            <Typography color="primary" className={classes.bigTilePrimary}>
              {dueToPay + prepayment}
              {' '}
              €
            </Typography>
          </Grid>
        </Grid>
        <Button 
          onClick={onFullPaymentDetailsClick} 
          color="primary"
          className={classes.detailsButton}
          fullWidth
        >
          Full payment details
        </Button>
      </Card>
    );
  }
}

export default withStyles(styles)(PaymentDetails);
