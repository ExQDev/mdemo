import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Typography, 
  Card,
  Grid,
  CardHeader,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import {
  shape, string, bool, func,
} from 'prop-types';
import RightIcon from '@material-ui/icons/ExitToAppOutlined';

const style = (() => ({
  checkItem: { 
    display: 'flex', 
    width: '100%',
  },
  rightIcon: { 
    width: 14, 
    height: 14, 
    marginBottom: -2,
  },
  leftIcon: {
    width: 14, 
    height: 14, 
    marginBottom: -2, 
    transform: 'scale(-1)', 
  },
  cardChecklist: {
    background: 'linear-gradient(180deg, #FFFFFF 55.21%, #FBFDFF 100%)',
    border: '1px solid #E3EDF4',
    boxSizing: 'border-box',
    boxShadow: '0px 3px 15px rgba(136, 196, 249, 0.21)',
    borderRadius: '4px',
    width: '100%',
    padding: 20,
    paddingBottom: 0,
  },
  checkTypography: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '16px',
    color: '#455A64',
  },
  checkAssignee: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '16px',
    textDecorationLine: 'underline',
    color: '#30BE71',
  },
  checkAssigneeGrey: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '16px',
    color: '#99ABB4',
  },
  checkAssigneePickUpButton: {
    border: '1px solid #5CF3A2',
    boxSizing: 'border-box',
    borderRadius: 2,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#30BE71',
    height: 22,
    width: 138,
  },
  checkAssigneeDropOffButton: {
    border: '1px solid #A3D2FC',
    boxSizing: 'border-box',
    borderRadius: 2,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#1E88E5',
    height: 22,
    width: 138,
  },
}));

const Checklist = ({
  classes, checks: {
    confirmation,
    moneyTransaction,
    pickUp,
    dropOff,
    depositUnblock,
    pickUpCourier,
    dropOffCourier,
    callbacks: {
      onChangeCourierClick,
      onCheck,
    },
  }, 
}) => (
  <ListItem disableGutters>
    <Card className={classes.cardChecklist}>
      <CardHeader title="Checklist" classes={{ root: classes.cardHeader, title: classes.tileTitle }} />
      <List>
        <ListItem disableGutters dense>
          <Grid 
            direction="row" 
            justify="space-between" 
            alignItems="center" 
            className={classes.checkItem}
          >
            <FormControlLabel
              control={(
                <Checkbox
                  checked={confirmation.checked}
                  value="confirmation"
                  color="primary"
                  onChange={onCheck('confirmation')}
                />
                            )}
              label="Confirmation"
              classes={{ label: classes.checkTypography }}
            />
            <Typography className={classes.checklistDate}>{confirmation.date}</Typography>
          </Grid>
        </ListItem>
        <ListItem disableGutters dense divider>
          <Grid direction="row" justify="space-between" alignItems="center" className={classes.checkItem}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={moneyTransaction.checked}
                  value="moneyTransaction"
                  color="primary"
                  onChange={onCheck('moneyTransaction')}
                />
                            )}
              label="Money transaction"
              classes={{ label: classes.checkTypography }}
            />
            <Typography className={classes.checklistDate}>{moneyTransaction.date}</Typography>
          </Grid>
        </ListItem>
        <ListItem disableGutters dense divider>
          <Grid 
            direction="column" 
            className={classes.checkItem}
          >
            <Grid 
              direction="row" 
              justify="space-between" 
              alignItems="center" 
              className={classes.checkItem}
            >
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={pickUp.checked}
                    value="pickUp"
                    color="primary"
                    onChange={onCheck('pickUp')}
                  />
                              )}
                label="Pick up"
                classes={{ label: classes.checkTypography }}
              />
              <Typography className={classes.checklistDate}>{pickUp.date}</Typography>
            </Grid>
            <Grid 
              direction="row" 
              justify="space-between" 
              className={classes.checkItem}
            >
              <Typography className={classes.checkAssignee}> 
                {' '}
                <RightIcon className={classes.leftIcon} />
                {' '}
                {pickUpCourier || 'Courier Name'}
              </Typography>
              <Button className={classes.checkAssigneePickUpButton} onClick={onChangeCourierClick('pickUp')}>Change Courier</Button>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem disableGutters dense divider>
          <Grid 
            direction="column" 
            className={classes.checkItem}
          >
            <Grid 
              direction="row" 
              justify="space-between" 
              alignItems="center" 
              className={classes.checkItem}
            >
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={dropOff.checked}
                    value="dropOff"
                    color="primary"
                    onChange={onCheck('dropOff')}
                  />
                              )}
                label="Drop Off"
                classes={{ label: classes.checkTypography }}
              />
              <Typography className={classes.checklistDate}>{dropOff.date}</Typography>
            </Grid>
            <Grid 
              direction="row" 
              justify="space-between"
              className={classes.checkItem}
            >
              <Typography className={classes.checkAssigneeGrey}> 
                {' '}
                <RightIcon className={classes.rightIcon} />
                {' '}
                { dropOffCourier || 'Courier Name' }
              </Typography>
              <Button className={classes.checkAssigneeDropOffButton} onClick={onChangeCourierClick('dropOff')}>Assign Courier</Button>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem disableGutters dense>
          <Grid
            direction="row" 
            justify="space-between" 
            alignItems="center"
            className={classes.checkItem}
          >
            <FormControlLabel
              control={(
                <Checkbox
                  checked={depositUnblock.checked}
                  value="depositUnblock"
                  color="primary"
                  onChange={onCheck('depositUnblock')}
                />
                            )}
              label="Deposit unblock"
              classes={{ label: classes.checkTypography }}
            />
            <Typography className={classes.checklistDate}>{depositUnblock.date}</Typography>
          </Grid>
        </ListItem>
      </List>
    </Card>
  </ListItem>
);

Checklist.propTypes = {
  classes: shape({
    card: string,
    cardHeader: string,
    tileTitle: string,
    checkAssignee: string,
    checkAssigneeGrey: string,
    checkTypography: string,
    checklistDate: string,
    checkItem: string,
    checkAssigneePickUpButton: string,
    checkAssigneeDropOffButton: string,
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
};

export default withStyles(style)(Checklist);
