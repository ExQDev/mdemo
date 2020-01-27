import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Typography, 
  Card,
  CardHeader,
  CardContent,
  GridList,
  GridListTile,
  Divider,
} from '@material-ui/core';
import FileIcon from '@material-ui/icons/InsertDriveFileOutlined';
import PropTypes from 'prop-types';

import PlaceHeader from './PlaceHeader';

const styles = () => ({
  directionInfo: {
    background: '#FAFCFD',
    margin: -20,
    padding: 20,
    borderTop: '1px solid #EEF4F8',
  },
  additionalInfo: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '131%',
    color: '#455A64',
    marginBottom: 6,
  },
  attachmentButton: {
    width: '96%',
    textTransform: 'unset',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(63, 63, 68, 0.1)',
    borderRadius: 4,
    maxHeight: 32,
  },
  additionalDivider: {
    width: '100%',
    marginBottom: 20,
  },
  attachmentButtonTile: {
    maxHeight: 36,
  },
});

const mapAttachments = (attachments, classes) => attachments.map((att) => (
  <GridListTile className={classes.attachmentButtonTile}>
    <Button startIcon={<FileIcon style={{ width: 14, height: 14 }} />} className={classes.attachmentButton}>{att.title}</Button>
  </GridListTile>
));

class DetailsInfo extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      attachmentButtonTile: PropTypes.string,
      tileTitle: PropTypes.string,
      card: PropTypes.string,
      directionInfo: PropTypes.string,
      additionalInfo: PropTypes.string,
      attachmentButton: PropTypes.string,
      additionalDivider: PropTypes.string,
    }),
    fromPoint: PropTypes.shape({
      title: PropTypes.string,
      note: PropTypes.string,
    }),
    toPoint: PropTypes.shape({
      title: PropTypes.string,
      note: PropTypes.string,
    }),
    deltaKm: PropTypes.number,
    attachments: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })),
    additionalInformation: PropTypes.string,
  };

  render() {
    const { classes, attachments, additionalInformation } = this.props;
    return (
      <Card className={classes.card} fullWidth>
        <CardHeader title={<PlaceHeader {...this.props} />} />
        <CardContent className={classes.directionInfo}>
          <Typography className={classes.tileTitle}>Additional Information</Typography>
          <Typography className={classes.additionalInfo}>{additionalInformation}</Typography>
          <Divider className={classes.additionalDivider} />
          <Typography className={classes.tileTitle}>Attached Files</Typography>
          <GridList cols={3} spacing={2}>
            {mapAttachments(attachments, classes)}
          </GridList>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(DetailsInfo);
