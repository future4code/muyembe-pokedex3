import React from 'react'
import Router from './routes/Router'
import GlobalState from './global/GlobalState'
import {ThemeProvider} from '@material-ui/core';
import theme from './constants/theme'

function App() {

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
