import React, { Component } from 'react'
import { connect } from 'react-redux'

import Events from '../components/Events'
import ParkEvents from '../components/ParkEvents'

import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'


import { fetchEvents, addEvent, deleteEvent, updateEvent } from '../actions/eventActions'
// import { fetchParkEvents, addParkEvent, deleteParkEvent, updateParkEvent } from '../actions/parkEventActions'

class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.token)
  }

  render() {
    // console.log("Events Container")
    // console.log(this.props)

    if (this.props.hasErrored) {
      return <Alert variant="danger">There was an error loading events. Please try again.</Alert>;
    }

    if (!this.props.token) {
      return <Alert variant="warning">You've been logged out. Please log in to see content.</Alert>;
    }

    return ( 
      <Container className="EventsContainer">
        <h1>Events</h1>

        <h2>Park Visits You've Added</h2>
        <ParkEvents 
          parkEvents={this.props.parkEvents}
          token={this.props.token}
          deleteEvent={this.props.deleteEvent}
          updateEvent={this.props.updateEvent}
          loading={this.props.isLoading}
        />

        <h2>Upcoming Calendar Events</h2>
        <Events 
          events={this.props.googleEvents}
          token={this.props.token}
          addEvent={this.props.addEvent}
          loading={this.props.isLoading}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    googleEvents: state.events.googleEvents,
    parkEvents: state.events.parkEvents,
    hasErrored: state.eventsErrored,
    isLoading: state.eventsLoading
  }  
}

const mapDispatchToProps = dispatch => ({
  fetchEvents: (token) => dispatch(fetchEvents(token)),
  addEvent: (token, obj) => dispatch(addEvent(token, obj)),
  deleteEvent: (token, id) => dispatch(deleteEvent(token, id)),
  updateEvent: (token, id) => dispatch(updateEvent(token, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)