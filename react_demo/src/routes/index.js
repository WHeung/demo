import Cle from '../views/cle';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class RouteMap extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/cle' component={Cle} />
        </Switch>
      </Router>
    )
  }
}

export default RouteMap
