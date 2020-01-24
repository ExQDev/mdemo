import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1E88E5'
    },
    secondary: {
      main: '#99ABB4'
    }
  },
  typography: { 
    fontFamily: 'Montserrat'
  }
});

export default theme