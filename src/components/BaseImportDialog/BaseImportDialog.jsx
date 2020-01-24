import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Dialog, 
  Button, 
  ButtonGroup, 
  Typography, 
  TextField, 
  Select, 
  MenuItem 
} from '@material-ui/core'

import CachedIcon from '@material-ui/icons/Cached';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import BIDialogTitle from './subcomponents/DialogHeader'
import BIDialogContent from './subcomponents/DialogContent'


class BaseImportDialog extends Component {
  state = {
    fields: {},
    titles: ['Name', 'Surname', 'Email', 'Phone']
  }

  componentDidMount () {
    const { defaultFields } = this.props
    if(defaultFields)
      this.setState({fields: defaultFields})
  }

  getFieldName = (index) => {
    const { fields } = this.state
    return Object.keys(fields).filter(field => fields[field] === index)[0]
  }

  handleChangeTitle = (index) => (e) => {
    const { target: { value } } = e
    const { fields } = this.state
    let newFields = {}

    const uniqueFields = Object.keys(fields).reduce((ak, cur) => {
        if(fields[cur] !== index)
          ak[cur] = fields[cur]
        return ak
    }, {})

    newFields = {
      ...uniqueFields,
      [value]: index
    }
    
    this.setState({
      fields: newFields
    })
  }

  handleCallback = () => {
    const { callback } = this.props
    const { fields } = this.state
    callback(fields)
    this.handleCloseBaseImport()
  }

  handleOpenBaseImport = () => {
    this.setState({
      baseImportShown: true
    })
  }

  handleCloseBaseImport = () => {
    this.setState({
      baseImportShown: false
    })
  }

  mapTitles = () => {
    const { titles } = this.state

    if(!titles)
      return null

    return titles.map(title => (<MenuItem key={title} value={title}>{title}</MenuItem>))
  }


  mapRows = () => {
    const { fields, classes } = this.props
    
    if(!fields)
      return null

    return fields.map((field, index) => (
      <ButtonGroup key={index} variant="outlined" color="primary" fullWidth className={classes.formGroup}>
        <TextField 
          label={`Field ${+index+1}`}
          InputProps={
            {
              classes: 
              {
                input: classes.formGroupInput,
              },
            }
          }
          value={field}
          disabled/>
        <Select
          className={classes.formGroupSelect}
          variant="outlined"
          onChange={this.handleChangeTitle(index)}
          inputProps={{
            classes: {
                icon: classes.formGroupSelectIcon,
            },
          }}
          value={this.getFieldName(index) || ""}>
          {this.mapTitles()}
        </Select>
      </ButtonGroup>))
  }
  

  render() {
    const { classes } = this.props
    const { baseImportShown } = this.state
    
    return (
      <div>
        <Button 
          onClick={this.handleOpenBaseImport} 
          variant="outlined" 
          color="primary">
            Setup fields
        </Button>
        <Dialog onClose={this.handleCloseBaseImport} open={baseImportShown}>
          <BIDialogTitle onClose={this.handleCloseBaseImport}>
            <SaveAltIcon className={classes.saveAlt}/> Import Customers Base
          </BIDialogTitle>
          <BIDialogContent dividers>
            <Typography gutterBottom className={classes.subtitle}>
              Fields from uploaded CSV file
            </Typography>
            <Typography gutterBottom className={classes.typography}>
              Please choose correct columns and click Show Table Preview to see your imported data.
              <br/>
              <a href="#">Send us your base file</a> and we'll import it ourselves if you have any problems with that.
            </Typography>

            {this.mapRows()}
            
            <Button 
              autoFocus 
              onClick={this.handleCallback} 
              color="primary"
              className={classes.applyButton}
              startIcon={<CachedIcon/>}
              fullWidth>
              Show table preview
            </Button>
          </BIDialogContent>
        </Dialog>
      </div>
    )
  }
}


const styles = theme => ({
  applyButton: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: '16px',
    border: '2px solid #1E88E5',
    boxSizing: 'border-box',
    borderRadius: 4,
    textTransform: 'capitalize',
    height: 44
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '17px',
  },
  typography: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '17px',
    marginTop: 16,
    color: theme.palette.secondary.main
  },
  saveAlt: {
    width: 16,
    height: 14,
    verticalAlign: 'bottom'
  },
  formGroup: {
    height: 48,
    marginTop: 12,
    marginBottom: 12,
  },
  formGroupInput: {
    height: 16,
    padding: 16,
    fontSize: 17,
  },
  formGroupSelect: {
    height: 48,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '17px',
    color: theme.palette.primary.main,
    border: '1px solid #A3D2FC',
    notchedOutline: {
      borderColor: 'transparent'
    }
  },
  formGroupSelectIcon: {
    fill: theme.palette.primary.main,
  }
 });

export default withStyles(styles)(BaseImportDialog)
