import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Park from './Park';

const Event = props => {
  const { event } = props;
  console.log(props)

  const parks = props.parks.map(obj => <Park key={obj.id} park={obj} favoritePark={props.favoritePark} unFavoritePark={props.unFavoritePark} loading={props.loading} />)

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
      <Card className="event mb-4" bg="white" border="coffee">
        <Card.Header as="h4">{event.title}</Card.Header>
        <Card.Body>
          <Card.Text>{event.location}</Card.Text>
          <Card.Text>{event.start_time} - {event.end_time} (event.timezone)</Card.Text>
          <Card.Text>{event.description}</Card.Text>
          <Button variant="copper" size="sm" onClick={() => props.updateEvent(event.id)}> Edit </Button>
          <Button variant="copper" size="sm" onClick={() => props.deleteEvent(event.id)}> X </Button>
          {parks}
        </Card.Body>
      </Card>
    )
  }
};

export default Event;
