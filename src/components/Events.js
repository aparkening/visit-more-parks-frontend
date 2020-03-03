import React from 'react';
import Event from './Event';

const Events = props => {
  const { events } = props;
  
  console.log("Events")
  console.log(props)

// debugger

  const mapEvents = events.map(obj => <Event key={obj.id} event={obj} addEvent={props.addEvent} loading={props.loading} token={props.token} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <div className="events">
        {mapEvents}
      </div>
    )
  }
};

export default Events;