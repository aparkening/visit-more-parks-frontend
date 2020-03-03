import React from 'react';
import ParkEvent from './ParkEvent';

const ParkEvents = props => {
  console.log("ParkEvents")
  console.log(props)

// debugger
// Fix props/events

  const parkEvents = props.parkEvents.map(obj => <ParkEvent key={obj.id} parkEvent={obj} deleteParkEvent={props.deleteParkEvent} updateParkEvent={props.updateParkEvent} loading={props.loading} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <div className="events">
        {parkEvents}
      </div>
    )
  }
};

export default ParkEvents;