import React from 'react';

import Moment from 'react-moment';

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

  // const addTrip = (id) => {
  //   console.log("Park id:", id)
  // };

  const parks = event.nearParks ? event.nearParks.map(p => {
    const start = event.start.date ? event.start.date : event.start.dateTime
    return (
      <Col sm={6} key={p.id}>
        {/* <Badge variant="coffee" onClick={addTrip(obj.id)}>Add Park to Trip!</Badge> */}

        <Park park={p} token={props.token} addEvent={props.addEvent} date={start} />
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
          <Card.Header as="h5">{event.summary}</Card.Header>
          <Card.Body>
            <div className="event-heading">
              <span>Location: </span>{event.location}
            </div>
            <div className="event-heading">
              <span>Date: </span> 
              <Moment format="LLL" date={event.start.date ? event.start.date : event.start.dateTime} /> to <Moment format="LLL" date={event.end.date ? event.end.date : event.end.dateTime} /> {event.end.timeZone? (event.end.timeZone) : ''}
            </div>
            <Card.Text>{event.description}</Card.Text>
            <h5 className="mt-4">Nearby Parks</h5>
            <Row>{parks}</Row>
          </Card.Body>
        </Card>
    )
  }
};

export default Event;
