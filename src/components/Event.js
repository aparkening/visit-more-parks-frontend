import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <li>
          {event}
          <button onClick={() => this.props.updateEvent(event.id)}> Edit </button>
          <button onClick={() => this.props.deleteEvent(event.id)}> X </button>
        </li>
      </div>
    );
  }
};

export default Event;
