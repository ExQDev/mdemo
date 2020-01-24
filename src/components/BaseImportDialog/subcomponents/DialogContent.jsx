import { withStyles } from '@material-ui/core/styles';
import { 
  DialogContent 
} from '@material-ui/core'

const BIDialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent);

export default BIDialogContent