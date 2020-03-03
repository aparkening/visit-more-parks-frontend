import React, { Component } from 'react'
import { connect } from 'react-redux'

import EventInput from '../components/EventInput'
import Events from '../components/Events'
import ParkEvents from '../components/ParkEvents'

import { fetchEvents, addEvent, deleteEvent, updateEvent } from '../actions/eventActions'
import { fetchParkEvents, addParkEvent, deleteParkEvent, updateParkEvent } from '../actions/parkEventActions'

class EventsContainer extends Component {
  componentDidMount() {
    // this.props.fetchEvents(this.props.token)
  }

  render() {
    // Investigate when loading occurs
    // console.log(this.props.loading)

    // debugger

    return ( 
      <div className="EventsContainer container">
        <h1>Events</h1>

        <EventInput 
          addEvent={this.props.addEvent} 
          token={this.props.token}
        />

        <Events 
          events={this.props.events}
          token={this.props.token}
          addEvent={this.props.addEvent}
          deleteEvent={this.props.deleteEvent}
          updateEvent={this.props.updateEvent}
          loading={this.props.isLoading}
        />

        <ParkEvents 
          parkEvents={this.props.parkEvents}
          token={this.props.token}
          addParkEvent={this.props.addParkEvent}
          deleteParkEvent={this.props.deleteParkEvent}
          updateParkEvent={this.props.updateParkEvent}
          loading={this.props.isLoading}
        />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    parkEvents: state.parkEvents,
    hasErrored: state.eventsErrored,
    isLoading: state.eventsLoading
  }  
}

const mapDispatchToProps = dispatch => ({
  fetchEvents: (token) => dispatch(fetchEvents(token)),
  addEvent: (token, obj) => dispatch(addEvent(token, obj)),
  deleteEvent: (token, id) => dispatch(deleteEvent(token, id)),
  updateEvent: (token, id) => dispatch(updateEvent(token, id)),
  fetchParkEvents: (token) => dispatch(fetchParkEvents(token)),
  addParkEvent: (token, obj) => dispatch(addParkEvent(token, obj)),
  deleteParkEvent: (token, id) => dispatch(deleteParkEvent(token, id)),
  updateParkEvent: (token, id) => dispatch(updateParkEvent(token, id))  
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)