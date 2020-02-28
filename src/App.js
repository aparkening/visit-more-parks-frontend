import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import { setupAuth, removeAuth } from './actions/authActions'

import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import ParksContainer from './containers/ParksContainer';
import EventsContainer from './containers/EventsContainer';
import Navigation from './components/Navigation';

class App extends Component {

  // Get server authorization when component mounted
  componentDidMount() {
    this.props.setupAuth()
 
    // this.props.fetchEvents()
  }

  // render() {
  //   return ( 
  //     <div className="App">
  //       {/* <h1>CatBook</h1>
  //       <CatList catPics={this.props.catPics} loading={this.props.loading} /> */}
  //       <Home />
  //     </div>
  //   );
  // }   

    displayHome = () => {
      return (
        this.props.activeUser ? <Dashboard token={this.props.csrf} active={this.props.activeUser} loading={this.props.loading}/> : <Welcome />
      );
    };

    render() {
      return (
        <Router>
          <Navigation active={this.props.activeUser} removeAuth={this.props.removeAuth} token={this.props.csrf} loading={this.props.loading} />
          
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
    loading: state.loading,
    csrf: state.csrf,
    activeUser: state.activeUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setupAuth: () => dispatch(setupAuth()),
    removeAuth: token => dispatch(removeAuth(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
