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


import Button from 'react-bootstrap/Button';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path='/parks' component={Parks} />
          <Route path='/events' component={Events} />
        </Switch>
      </Router>
    );
  }         

}

export default App;
