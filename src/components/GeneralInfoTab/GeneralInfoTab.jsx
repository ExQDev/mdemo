import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import PropTypes, {
  object, string, shape, oneOf, number, func, arrayOf, bool, 
} from 'prop-types';

import DetailedInfoCard from './subcomponents/DetailedInfoCard';
import ShortInfoTiles from './subcomponents/ShortInfoTiles';
import EditReservartion from './subcomponents/EditReservartion';
import Sidebar from './subcomponents/Sidebar';
import PaymentDetails from './subcomponents/PaymentDetails';
import ReservationHistory from './subcomponents/ReservationHistory';

class GeneralInfoTab extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      container: PropTypes.string,
      contentGrid: PropTypes.string,
      list: PropTypes.string,
      cardHeader: PropTypes.string,
      tileTitle: PropTypes.string,
      card: PropTypes.string,
      detailsButton: PropTypes.string,
    }),
    shortInfo: shape({
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
    }),
    details: shape({
      fromPoint: shape({
        title: string,
        note: string,
      }),
      toPoint: shape({
        title: string,
        note: string,
      }),
      deltaKm: number,
      attachments: arrayOf(PropTypes.shape({
        title: string,
        link: string,
      })),
      additionalInformation: string,
    }),
    paymentDetails: shape({
      dueToPay: number,
      prepayment: number,
      callbacks: {
        onFullPaymentDetailsClick: func,
      },
    }),
    reservationHistory: shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        dateTime: PropTypes.string,
        action: PropTypes.string,
      })),
      callbacks: PropTypes.shape({
        onMoreClick: PropTypes.func,
      }),
    }),
    checks: shape({
      confirmation: shape({
        checked: bool,
        date: string,
      }),
      moneyTransaction: shape({
        checked: bool,
        date: string,
      }),
      pickUp: shape({
        checked: bool,
        date: string,
      }),
      dropOff: shape({
        checked: bool,
        date: string,
      }),
      depositUnblock: shape({
        checked: bool,
        date: string,
      }),
      pickUpCourier: string,
      dropOffCourier: string,
      callbacks: {
        onChangeCourierClick: func,
        onCheck: func,
      },
    }),
    drivers: arrayOf(shape({
      name: string,
      info: string,
    })),
  };

  state = {
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <EditReservartion onEditClick={() => { console.log('edit click'); }} {...this.props} classes={classes} />
        <ShortInfoTiles {...this.props.shortInfo} classes={classes} />
        <Grid 
          container 
          className={classes.contentGrid} 
          direction="row"
        >
          <Grid 
            item 
            xs={8} 
            direction="column" 
            spacing={12}
          >
            <Grid item xs>
              <List className={classes.list}>
                <ListItem disableGutters>
                  <DetailedInfoCard {...this.props.details} classes={classes} />
                </ListItem>
                <ListItem disableGutters>
                  <PaymentDetails paymentDetails={this.props.paymentDetails} classes={classes} />
                </ListItem>
                <ListItem disableGutters>
                  <ReservationHistory {...this.props.reservationHistory} classes={classes} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid 
            item 
            xs={4} 
            container 
            direction="column" 
            spacing={2}
          >
            <Sidebar {...this.props} />
          </Grid>
        </Grid>
      </div>
    );
  }
}


const styles = (theme) => ({
  container: {
    padding: 24,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    minWidth: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  contentGrid: {
    margin: 0,
    marginTop: 8,
    justifyContent: 'space-around',
  },
  list: {
    padding: '0 10px',
    marginLeft: -5,
  },
  tileTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '15px',
    textTransform: 'uppercase',
    color: theme.palette.secondary.main,
    marginBottom: 12,
  },
  tilePrimary: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '17px',
  },
  tileSecondary: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 10,
    lineHeight: '12px',
  },
  card: {
    background: 'linear-gradient(180deg, #FFFFFF 55.21%, #FBFDFF 100%)',
    border: '1px solid #E3EDF4',
    boxSizing: 'border-box',
    boxShadow: '0px 3px 15px rgba(136, 196, 249, 0.21)',
    borderRadius: '4px',
    width: '100%',
    padding: 20,
  },
  cardHeader: {
    padding: 0,
  },
});

export default withStyles(styles)(GeneralInfoTab);
