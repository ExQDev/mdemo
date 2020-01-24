import React, { Component } from 'react';
import { connect } from 'react-redux';

import theme from './modules/themeProvider'

import { ThemeProvider } from '@material-ui/core'

import BaseImportDialog from './components/BaseImportDialog'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {

  state = {
    fields: [
      'Fluvio',
      'Bucci',
      '+39 484 373 47 38',
      'flaviobuccirentcompany@gmail.com'
    ]
  }

  handleCallback = (fields) => {
    console.log(fields)
    alert(JSON.stringify(fields))
    this.setState({
      defaultFields: fields
    })
  }

  render() {
    const { fields, defaultFields } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <BaseImportDialog
          fields={fields}
          callback={this.handleCallback}
          defaultFields={defaultFields}
          />
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
