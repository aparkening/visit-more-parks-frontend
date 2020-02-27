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


  }

  setHeaders
  headers(){
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': this.csrf
    }
  }

  async authSetup(){
    const res = await fetch(`${this.baseURL}/auth-check`,{
      credentials: 'include'
    })
    const body = await res.json()
    this.csrf = body.csrf_auth_token
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
    loading: state.loading
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