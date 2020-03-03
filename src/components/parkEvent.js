import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const ParkEvent = props => {
  const { parkEvent } = props;
  console.log(props);

// Add event input form to Event
//   <EventInput 
//   addEvent={this.props.addEvent} 
//   token={this.props.token}
// />

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
        <Card className="event mb-4" bg="white" border="coffee">
          <Card.Header as="h4">{parkEvent.summary}</Card.Header>
          <Card.Body>
            <Card.Text>{parkEvent.location}</Card.Text>
            <Card.Text>{parkEvent.start.dateTime - parkEvent.end.dateTime}</Card.Text>
            <Card.Text>{parkEvent.description}</Card.Text>
            {/* <Button variant="copper" size="sm" className="mr-2" onClick={() => props.updateEvent(event.id)}> Edit </Button>
            <Button variant="copper" size="sm" className="mr-2" onClick={() => props.deleteEvent(event.id)}> X </Button> */}
          </Card.Body>
        </Card>
    )
  }
};

export default ParkEvent;
