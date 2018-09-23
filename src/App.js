import React, { Component } from 'react';
import Overview from './components/user/Overview';
import User from './components/user/User'

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route
              exact
              path="/users/:name"
              component={User}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
    );
  }
}

export default App;


