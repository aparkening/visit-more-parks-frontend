import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
// import { fetchEvents } from './actions/eventActions'
import { setupAuth, removeAuth } from './actions/authActions'

// import { fetchCats } from './actions/catActions'
// import CatList from './components/CatList'

import Login from './components/Login';
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
        this.props.activeUser ? <Dashboard token={this.props.csrf} active={this.props.activeUser}/> : <Welcome />
      );
    };


    render() {
      return (
        <Router>
          <Navigation active={this.props.activeUser} removeAuth={this.props.removeAuth} token={this.props.csrf} loading={this.props.loading} />
          
          {this.props.csrf}
          
          <Switch>
            <Route exact path="/">{this.displayHome}</Route>
            <Route path='/parks' component={ParksContainer} />
            <Route path='/events' component={EventsContainer} />
            {/* <Route path='/login'><Login token={this.props.csrf} active={this.props.activeUser} /></Route>
            <Route path='/logout'><Logout token={this.props.csrf} active={this.props.activeUser} /></Route> */}
          </Switch>
        </Router>
      );
    }
  
}


// Make parks, events, and loading available
const mapStateToProps = state => {
  return {
    loading: state.loading,
    csrf: state.csrf,
    activeUser: state.activeUser
  }
}
// parks: state.parks,
// events: state.events,


 
// Make actions available as props
const mapDispatchToProps = dispatch => {
  return {
    setupAuth: () => dispatch(setupAuth()),
    // removeAuth: token => dispatch({ type: "LOG_OUT", token })
    removeAuth: token => dispatch(removeAuth(token))
  }
}
// , fetchEvents: () => dispatch(fetchEvents())

export default connect(mapStateToProps, mapDispatchToProps)(App)
