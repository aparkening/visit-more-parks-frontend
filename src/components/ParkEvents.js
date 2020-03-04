import React from 'react';
import ParkEvent from './ParkEvent';

const ParkEvents = props => {
  const { parkEvents } = props;

  console.log("ParkEvents")
  console.log(props)

// debugger
// Fix props/events

  const pEvents = parkEvents.map(obj => <ParkEvent key={obj.id} parkEvent={obj} deleteParkEvent={props.deleteParkEvent} updateParkEvent={props.updateParkEvent} token={props.token} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <div className="events">
        {pEvents}
      </div>
    )
  }
};

export default ParkEvents;