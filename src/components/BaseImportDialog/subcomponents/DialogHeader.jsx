import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  IconButton, 
  Typography,
  DialogTitle
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  titleContainer: {
    margin: 0,
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 'bold'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1.5),
    top: theme.spacing(1.5),
    color: theme.palette.grey[500],
    width: 14,
    height: 14
  },
})

const BIDialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.titleContainer} {...other}>
      <Typography variant="h6" className={classes.title}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

export default BIDialogTitle