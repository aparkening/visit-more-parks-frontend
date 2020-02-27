import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import { fetchEvents } from './actions/eventActions'
// import { setupAuth } from './actions/authActions'

// import { fetchCats } from './actions/catActions'
// import CatList from './components/CatList'

import Home from './components/Home';
import ParksContainer from './containers/ParksContainer';
import EventsContainer from './containers/EventsContainer';
import Navigation from './components/Navigation';

class App extends Component {

  // Launch fetchEvents when component mounted
  componentDidMount() {
    // Show initial array (should be empty)
    // console.log(this.props)
    this.props.fetchEvents()
    // this.props.setupAuth()

    // this.props.fetchCats()
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
    events: state.events,
    loading: state.loading
  }
}
// parks: state.parks,
// events: state.events,
// loading: state.loading,
// csrf: state.csrf

 
// Make fetchEvents() available on mount
const mapDispatchToProps = dispatch => {
  // return {
  //   fetchCats: () => dispatch(fetchCats())
  // }
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}
// , setupAuth: () => dispatch(setupAuth())

export default connect(mapStateToProps, mapDispatchToProps)(App)
