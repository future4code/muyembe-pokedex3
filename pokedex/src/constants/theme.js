import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      }
    },

    typography: {
      h3:{
        "fontWeight": 700,
      },
      h5: {
        "fontWeight": 700,
        "padding": 4,
      },
      h6:{
        "padding": 4,
      },
    },

  });

  export default theme