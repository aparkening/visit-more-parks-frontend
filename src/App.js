import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
// import { fetchEvents } from './actions/eventActions'
import { setupAuth } from './actions/authActions'

// import { fetchCats } from './actions/catActions'
// import CatList from './components/CatList'

import Login from './components/Login';
import Home from './components/Home';
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
    render() {
      return (
        <Router>
          <Navigation />
          <Login token={this.props.csrf}/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/parks' component={ParksContainer} />
            <Route path='/events' component={EventsContainer} />
          </Switch>
        </Router>
      );
    }
  
}


// Make parks, events, and loading available
const mapStateToProps = state => {
  // return {
  //   catPics: state.cats,
  //   loading: state.loading
  // }
  return {
    loading: state.loading,
    csrf: state.csrf
  }
}
// parks: state.parks,
// events: state.events,


 
// Make fetchEvents() available on mount
const mapDispatchToProps = dispatch => {
  // return {
  //   fetchCats: () => dispatch(fetchCats())
  // }
  return {
    setupAuth: () => dispatch(setupAuth())
  }
}
// , setupAuth: () => dispatch(setupAuth())

export default connect(mapStateToProps, mapDispatchToProps)(App)
