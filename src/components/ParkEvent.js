import React from 'react';
import Moment from 'react-moment';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const ParkEvent = props => {
  const { parkEvent } = props;
  // console.log(props);

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <Card className="event" bg="white" border="coffee">
        <Card.Header as="h5">
          <Accordion.Toggle as={Button} variant="link" eventKey={parkEvent.id}>
           {parkEvent.summary}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={parkEvent.id}>
          <Card.Body className="mb-4">
            <div className="event-heading"><img src="icon-location.svg" alt="Location icon" caption="Location by Neha Tyagi from the Noun Project" /> {parkEvent.location}</div>
            <div className="event-heading"><img src="icon-date.svg" alt="Date icon" caption="date by Karan from the Noun Project" /> <Moment format="LLL" date={parkEvent.start_time}/> to <Moment format="LLL" date={parkEvent.end_time}/></div>            
            <Card.Text>{parkEvent.description}</Card.Text>
            {/* <Button size="sm" className="mr-2" onClick={() => props.updateEvent(event.id)}> Edit </Button> */}

            <Button size="sm" className="mr-2" onClick={() => props.deleteEvent(props.token, parkEvent.id)}> X </Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
};

export default ParkEvent;
