import React from 'react';
import Event from './Event';

import Accordion from 'react-bootstrap/Accordion';

const Events = props => {
  const mapEvents = props.events.map(obj => <Event key={obj.id} event={obj} addEvent={props.addEvent} token={props.token} />)

  return (
    <div className="events">
      <h2>Upcoming Calendar Events</h2>     
      <Accordion>
        {mapEvents}
      </Accordion>
    </div>
  )
};

export default Events;