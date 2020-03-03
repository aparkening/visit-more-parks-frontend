import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Park from './Park';

const Event = props => {
  const { event } = props;
  console.log("One Event");
  console.log(props);

// debugger

  const addTrip = (id) => {
    console.log("Park id:", id)
  };

  const parks = event.nearParks ? event.nearParks.map(p => {
    return (
      <Col sm={6} key={p.id}>
        {/* <Badge variant="coffee" onClick={addTrip(obj.id)}>Add Park to Trip!</Badge> */}

        <Park park={p} token={props.token} addEvent={props.addEvent} />
      </Col>
    );
  }) : '';

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
          <Card.Header as="h4">{event.summary}</Card.Header>
          <Card.Body>
            <Card.Text>
              {event.location} <br />
              {event.start.date ? event.start.date : event.start.dateTime} to {event.end.date ? event.end.date : event.end.dateTime} {event.end.timeZone? (event.end.timeZone) : ''}</Card.Text>
            <Card.Text>{event.description}</Card.Text>





            {/* <Button variant="copper" size="sm" className="mr-2" onClick={() => props.deleteEvent(event.id)}> X </Button> */} */}
    
            <h4 className="mt-4">Nearby Parks</h4>
            <Row>
              {parks}
            </Row>
          </Card.Body>
        </Card>
    )
  }
};

export default Event;
