import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './store';

import Home from './containers/Home/Home';
import Users from './containers/Users/Users';

const App = () => {
  return (
    <Router>
      <Switch>
        <Provider store={configureStore()}>
          <Route path="/" exact render={Home} />
          <Route path="/users" exact render={Users} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
