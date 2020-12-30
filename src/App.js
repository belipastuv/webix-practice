import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Home from './containers/Home/Home';
import Users from './containers/Users/Users';
import Projects from './containers/Projects/Projects';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#146181"
    },
    secondary: {
      main: "#A51D4F"
    },
    accent: {
      main: "#A5CE3A"
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Provider store={configureStore()}>
            <Route path="/" exact render={Home} />
            <Route path="/users" exact render={Users} />
            <Route path="/projects" exact render={Projects} />
          </Provider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
