import React from 'react';
import Moment from 'react-moment';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ParkEvent = props => {
  const { parkEvent } = props;
  console.log(props);

  if (props.loading) {
    return (<div className="loader"></div>)
  } else {
    return (
        <Card className="event mb-4" bg="white" border="coffee">
          <Card.Header as="h5">{parkEvent.summary}</Card.Header>
          <Card.Body>
            <div className="event-heading"><span>Location: </span>{parkEvent.location}</div>
            <div className="event-heading"><span>Date: </span><Moment format="LLL" date={parkEvent.start_time}/> to <Moment format="LLL" date={parkEvent.end_time}/></div>            
            <Card.Text>{parkEvent.description}</Card.Text>
            {/* <Button size="sm" className="mr-2" onClick={() => props.updateEvent(event.id)}> Edit </Button>
            <Button size="sm" className="mr-2" onClick={() => props.deleteEvent(event.id)}> X </Button> */}
          </Card.Body>
        </Card>
    )
  }
};

export default ParkEvent;
