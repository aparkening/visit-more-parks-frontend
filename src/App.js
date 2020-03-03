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
      this.props.csrf ? <Dashboard token={this.props.csrf} loading={this.props.isLoading} /> : <Welcome />
    );
  };

  render() {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading home.</p>;
    }

    console.log("Home CSRF")
    console.log(this.props.csrf)

    // console.log("Logged In?")
    // console.log(this.props.loggedIn)

    return (
      <Router>
        <Navigation removeAuth={this.props.removeAuth} token={this.props.csrf} loading={this.props.isLoading} />
        
        {/* {console.log(this.props.isLoading)} */}

        <main role="main" className="container">          
          <Switch>
            <Route exact path="/">{this.displayHome}</Route>
            <Route path='/parks' component={ParksContainer} token={this.props.csrf} />
            <Route path='/events' component={EventsContainer} token={this.props.csrf} />
            {/* <Route path='/events/new'><EventInput /></Route> */}
          </Switch>
        </main>

      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    // loading: state.loading,
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
