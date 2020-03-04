import React from 'react';
import EventInput from './EventInput'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const Park = props => {
  const { park } = props;

  const accordianForm = 
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} variant="primary" size="sm" eventKey={park.id + 1}>
          Add Park to Calendar
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={park.id + 1}>
          <Card.Body>
            <EventInput addEvent={props.addEvent} park={park} token={props.token} date={props.date} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    
  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <Card className="park" bg="white" border="coffee">
        <Card.Header as="h5">
          <Accordion.Toggle as={Button} variant="link" eventKey={park.id}>
            {park.fullName}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={park.id}>
          <Card.Body className="mb-4">
          <Card.Text>{park.description}</Card.Text>
            <div className="event-heading"><img src="icon-location.svg" alt="Location icon" caption="Location by Neha Tyagi from the Noun Project" /> {park.address}</div>
            <Card.Link href={park.url}><img src="icon-url.svg" alt="URL icon" caption="url by Agni from the Noun Project" /> {park.url}</Card.Link>

            {props.token && props.addEvent ? accordianForm : ''}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
};

export default Park;