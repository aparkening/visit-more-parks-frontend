import React from 'react';
import ParkEvent from './ParkEvent';

import Accordion from 'react-bootstrap/Accordion';

const ParkEvents = props => {
  // console.log("ParkEvents")
  // console.log(props)

  const pEvents = props.parkEvents.map(obj => <ParkEvent key={obj.id} parkEvent={obj} deleteParkEvent={props.deleteParkEvent} updateParkEvent={props.updateParkEvent} token={props.token} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <div className="events">
        <Accordion>
          {pEvents}
        </Accordion>
      </div>
    )
  }
};

export default ParkEvents;