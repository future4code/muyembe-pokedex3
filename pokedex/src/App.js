import React from 'react'
import Router from './routes/Router'
import GlobalState from './global/GlobalState'
import {ThemeProvider, createMuiTheme} from '@material-ui/core';


function App() {

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


  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
      <Router/>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
