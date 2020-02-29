import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Card';
import Park from './Park';

const Event = props => {
  const { event } = props;
  console.log(props)

  // const parks = props.nearParks.map(obj => <Park key={obj.id} park={obj} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
        <Card className="event mb-4" bg="white" border="coffee">
          <Card.Header as="h4"><Card.Link href={event.htmlLink}>{event.summary}</Card.Link></Card.Header>
          <Card.Body>
            <Card.Text>{event.location}</Card.Text>
            <Card.Text>{event.start.date ? event.start.date : event.start.dateTime} - {event.end.date ? event.end.date : event.end.dateTime} {event.end.timeZone? (event.end.timeZone) : ''}</Card.Text>
            <Card.Text>{event.description}</Card.Text>
            <Button variant="copper" size="sm" className="mr-2" onClick={() => props.updateEvent(event.id)}> Edit </Button>
            <Button variant="copper" size="sm" className="mr-2" onClick={() => props.deleteEvent(event.id)}> X </Button>
            {console.log(props.nearParks)}
          </Card.Body>
        </Card>
    )
  }
};

export default Event;
