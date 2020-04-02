import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import Container from 'react-bootstrap/Container'

import { setupAuth, removeAuth } from './actions/authActions';
import Welcome from './components/Welcome';
import ParksContainer from './containers/ParksContainer';
import EventsContainer from './containers/EventsContainer';
import Navigation from './components/Navigation';

class App extends Component {

  // Get server authorization when component mounted
  componentDidMount() {
    console.log("Component did mount.")
    if (!this.props.csrf) {this.props.setupAuth()}
  }

  // Display components based on login status
  displayHome = () => {
    return (
      document.cookie.split(';').some((cookieItem) =>cookieItem.includes('logged_in=false')) ? <Welcome /> : <EventsContainer token={this.props.csrf} loading={this.props.isLoading} />
    );
  };

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading home.</p>;
    }

    return (
      <Router>
        <Navigation removeAuth={this.props.removeAuth} token={this.props.csrf} />
        <Container role="main" className="main-page">          
          <Switch>
            <Route exact path="/">{this.displayHome}</Route>
            <Route path='/events'>
              <EventsContainer token={this.props.csrf} loading={this.props.isLoading} />
            </Route> 
            <Route path='/parks'>
              <ParksContainer token={this.props.csrf} loading={this.props.isLoading} />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
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
