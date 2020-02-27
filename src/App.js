import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import { fetchEvents } from './actions/eventActions'
import { setupAuth } from './actions/authActions'

import Home from './components/Home';
import Parks from './components/Parks';
import Events from './components/Events';
import Navigation from './components/Navigation';

class App extends Component {

  // Launch fetchEvents when component mounted
  componentDidMount() {
    // Show initial array (should be empty)
    // console.log(this.props)
    // this.props.fetchEvents()
    this.props.setupAuth()

  }

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


// Make parks, events, and loading available
const mapStateToProps = state => {
  return {
    parks: state.parks,
    events: state.events,
    loading: state.loading,
    csrf: state.csrf
  }
}
 
// Make fetchEvents() available on mount
const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    setupAuth: () => dispatch(setupAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)