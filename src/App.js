import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
// import { authErrored, authLoading, authremoveAuth } from './actions/authActions'


import { setupAuth, removeAuth } from './actions/authActions';

import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import ParksContainer from './containers/ParksContainer';
import EventsContainer from './containers/EventsContainer';
import Navigation from './components/Navigation';

class App extends Component {

  // Get server authorization when component mounted
  componentDidMount() {
    this.props.setupAuth()
  }

  // Display components based on login status
  displayHome = () => {
    return (
      this.props.csrf ? <EventsContainer token={this.props.csrf} loading={this.props.isLoading} /> : <Welcome />
    );
  };

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading home.</p>;
    }

    // console.log("Home CSRF")
    // console.log(this.props.csrf)

    return (
      <Router>
        <Navigation removeAuth={this.props.removeAuth} token={this.props.csrf} loading={this.props.isLoading} />
        <main role="main" className="container">          
          <Switch>
            <Route exact path="/">{this.displayHome}</Route>
            <Route path='/events' component={EventsContainer} token={this.props.csrf} />
            <Route path='/parks' component={ParksContainer} token={this.props.csrf} />
          </Switch>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    csrf: state.csrf,
    // loggedIn: state.csrf.loggedIn,
    hasErrored: state.authErrored,
    isLoading: state.authLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setupAuth: () => dispatch(setupAuth()),
    removeAuth: token => dispatch(removeAuth(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
