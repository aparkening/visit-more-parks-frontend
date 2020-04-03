import React from 'react';
import Event from './Event';

import Accordion from 'react-bootstrap/Accordion';

const Events = props => {
  const mapEvents = props.events.map(obj => <Event key={obj.id} event={obj} addEvent={props.addEvent} token={props.token} />)

  return (
    <div className="events">
      <h2>Upcoming Calendar Events</h2>  
      <div class="instructions">Select an event below to see and add nearby parks to your itinerary.</div>
      <Accordion>
        {mapEvents}
      </Accordion>
    </div>
  )
};

export default Events;