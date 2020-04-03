import React from 'react';
import ParkEvent from './ParkEvent';

import Accordion from 'react-bootstrap/Accordion';

const ParkEvents = props => {
  const pEvents = props.parkEvents.map(obj => <ParkEvent key={obj.id} parkEvent={obj} deleteEvent={props.deleteEvent} updateParkEvent={props.updateParkEvent} token={props.token} />)

  return (
    <div className="events">
      <h2>Park Visits You've Added</h2>
      <Accordion>
        {pEvents}
      </Accordion>
    </div>
  )
};

export default ParkEvents;