import React from 'react';
import Moment from 'react-moment';
import Park from './Park';

// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


const Event = props => {
  const { event } = props;
  // console.log("One Event");
  // console.log(props);
  const parks = event.nearParks ? event.nearParks.map(p => {
    const start = event.start.date ? event.start.date : event.start.dateTime
    return (
      <Accordion>
        <Park park={p} token={props.token} addEvent={props.addEvent} date={start} />
      </Accordion>
    );
  }) : '';

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
        <Card className="event" bg="white" border="coffee">
          <Card.Header as="h5">
            <Accordion.Toggle as={Button} variant="link" eventKey={event.id}>
              {event.summary}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={event.id}>
            <Card.Body className="mb-4">
              <div className="event-heading"><img src="icon-location.svg" alt="Location icon" caption="Location by Neha Tyagi from the Noun Project" /> {event.location}</div>
              <div className="event-heading"><img src="icon-date.svg" alt="Date icon" caption="date by Karan from the Noun Project" /> <Moment format="LLL" date={event.start.date ? event.start.date : event.start.dateTime} /> to <Moment format="LLL" date={event.end.date ? event.end.date : event.end.dateTime} /> {event.end.timeZone? (event.end.timeZone) : ''}
              </div>
              <Card.Text>{event.description}</Card.Text>
              <h5 className="mt-4">Nearby Parks</h5>
              {parks}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    )
  }
};

export default Event;
