import React, { Component } from 'react'
import { connect } from 'react-redux'

import Events from '../components/Events'
import ParkEvents from '../components/ParkEvents'

import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'


import { fetchEvents, addEvent, deleteEvent, updateEvent, showAlert } from '../actions/eventActions'
// import { fetchParkEvents, addParkEvent, deleteParkEvent, updateParkEvent } from '../actions/parkEventActions'

class EventsContainer extends Component {
  componentDidMount() {
    if (!this.props.googleEvents.length && !this.props.parkEvents.length) {
      this.props.fetchEvents(this.props.token)
    }
  }

  // Collapse all event and park accordions
  collapseAll = () => {
    for (let i = 0; i < document.getElementsByClassName("event").length; i++) {
      document.getElementsByClassName("event")[i].querySelector("div.collapse").classList.remove("show")
    }
  }

  render() {
    // console.log("Events Container")
    // console.log(this.props)

    if (this.props.hasErrored) {
      return <Alert variant="danger">There was an error loading events. Please try again.</Alert>;
    }
    // if (!this.props.token) {
    //   return <Alert variant="warning">You've been logged out. Please log in to see content.</Alert>;
    // }

    // When alert is visible, collapse all accordions
    if (this.props.isVisible) {
      this.collapseAll()
    }

    return ( 
      <Container className="EventsContainer">
        <h1>Events</h1>
      
        <Alert variant="success" show={this.props.isVisible}>
        Event updated!
        </Alert>

        {this.props.isLoading? <>
          <Alert variant="info">Grabbing the latest calendar events...</Alert>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner></> : 
          <>
          {this.props.parkEvents.length ? 
          <ParkEvents 
            parkEvents={this.props.parkEvents}
            token={this.props.token}
            deleteEvent={this.props.deleteEvent}
            updateEvent={this.props.updateEvent}
          /> : null
          }

          {this.props.googleEvents.length ? 
          <Events 
            events={this.props.googleEvents}
            token={this.props.token}
            addEvent={this.props.addEvent}
          /> : <div>Oh no, you don't have any calendar events with locations! Please ensure your events have a location to find the nearest National Park.</div>
          }
          </>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.csrf,
    googleEvents: state.events.googleEvents,
    parkEvents: state.events.parkEvents,
    hasErrored: state.eventsErrored,
    isLoading: state.eventsLoading,
    isVisible: state.showAlert
  }  
}

const mapDispatchToProps = dispatch => ({
  fetchEvents: (token) => dispatch(fetchEvents(token)),
  addEvent: (token, obj) => dispatch(addEvent(token, obj)),
  deleteEvent: (token, id) => dispatch(deleteEvent(token, id)),
  updateEvent: (token, id) => dispatch(updateEvent(token, id)),
  switchVisible: () => dispatch(showAlert(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)