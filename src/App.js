import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import Parks from './components/Parks';
import Events from './components/Events';
import Navbar from './components/Navigation';

import Button from 'react-bootstrap/Button';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Navigation />
          <Route path='/parks' component={Parks} />
          <Route path='/events' component={Events} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }         

}

export default App;
