import React, { Component } from 'react'
import { connect } from 'react-redux'

import EventInput from '../components/EventInput'
import Events from '../components/Events'

import { fetchEvents, addEvent, deleteEvent, updateEvent } from '../actions/eventActions'

class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.token)
  }

  render() {
    // Investigate when loading occurs
    // console.log(this.props.loading)

    return ( 
      <div className="EventsContainer container">
        <h1>Events</h1>
        <EventInput addEvent={this.props.addEvent} />
        <Events 
          events={this.props.events}
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
    events: state.events,
    hasErrored: state.eventsErrored,
    isLoading: state.eventsLoading
  }  
}

const mapDispatchToProps = dispatch => ({
  fetchEvents: (token) => dispatch(fetchEvents(token)),
  addEvent: (token, park_id) => dispatch(addEvent(token, park_id)),
  deleteEvent: (token, id) => dispatch(deleteEvent(token, id)),
  updateEvent: (token, id) => dispatch(updateEvent(token, id))  
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)