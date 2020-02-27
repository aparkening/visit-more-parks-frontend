import React, { Component } from 'react';

class EventsContainer extends Component {
  constructor(){
    super()
    this.state = {
      events: []
    }
  }

  render() {
    return (
      <div className="Events">
        Events are here
      </div>
    );
  }
}

export default EventsContainer;