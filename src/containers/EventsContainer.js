import React, { Component } from 'react'
import { connect } from 'react-redux'

import EventInput from '../components/EventInput'
import Events from '../components/Events'
import ParkEvents from '../components/ParkEvents'

import { fetchEvents, addEvent, deleteEvent, updateEvent } from '../actions/eventActions'
// import { fetchParkEvents, addParkEvent, deleteParkEvent, updateParkEvent } from '../actions/parkEventActions'

class EventsContainer extends Component {
  componentDidMount() {
    if (this.props.token) {this.props.fetchEvents(this.props.token)}
  }

  render() {
    console.log(this.props)

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading events</p>;
    }

    if (!this.props.token) {
      return <p>Please log in.</p>;
    }

    return ( 
      <div className="EventsContainer container">
        <h1>Events</h1>

        {/* <EventInput 
          addEvent={this.props.addEvent} 
          token={this.props.token}
        /> */}

        <Events 
          events={this.props.googleEvents}
          token={this.props.token}
          addEvent={this.props.addEvent}
          loading={this.props.isLoading}
        />

        <ParkEvents 
          parkEvents={this.props.parkEvents}
          token={this.props.token}
          deleteEvent={this.props.deleteEvent}
          updateEvent={this.props.updateEvent}
          loading={this.props.isLoading}
        />

      </div>
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
  // fetchParkEvents: (token) => dispatch(fetchParkEvents(token)),
  // addParkEvent: (token, obj) => dispatch(addParkEvent(token, obj)),
  // deleteParkEvent: (token, id) => dispatch(deleteParkEvent(token, id)),
  // updateParkEvent: (token, id) => dispatch(updateParkEvent(token, id))  
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)