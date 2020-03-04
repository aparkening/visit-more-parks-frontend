import React from 'react';
import Event from './Event';

import Accordion from 'react-bootstrap/Accordion';

const Events = props => {
  // console.log("Events")
  // console.log(props)

  const mapEvents = props.events.map(obj => <Event key={obj.id} event={obj} addEvent={props.addEvent} token={props.token} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <div className="events">
        <Accordion>
          {mapEvents}
        </Accordion>
      </div>
    )
  }
};

export default Events;