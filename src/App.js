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

  displayHome = () => {
    return (
      this.props.csrf ? <Dashboard token={this.props.csrf} loading={this.props.isLoading} /> : <Welcome />
    );
  };

  render() {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    // if (this.props.isLoading) {
    //     return <p>Loading…</p>;
    // }

    return (
      <Router>
        <Navigation removeAuth={this.props.removeAuth} token={this.props.csrf} loading={this.props.isLoading} />
        
        {/* {console.log(this.props.isLoading)} */}

        <main role="main" className="container">          
          <Switch>
            <Route exact path="/">{this.displayHome}</Route>
            <Route path='/parks' component={ParksContainer} />
            <Route path='/events' component={EventsContainer} />
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
