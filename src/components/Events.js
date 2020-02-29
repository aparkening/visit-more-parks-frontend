import React from 'react';
import Event from './Event';

const Events = props => {
  console.log("Events")
  console.log(props)

  const events = props.events.map(obj => <Event key={obj.id} event={obj} deleteEvent={props.deleteEvent} updateEvent={props.updateEvent} loading={props.loading} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <div className="events">
        {events}
      </div>
    )
  }
};

export default Events;