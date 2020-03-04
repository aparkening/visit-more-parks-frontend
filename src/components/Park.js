import React from 'react';
import EventInput from './EventInput'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const Park = props => {
  const { park } = props;

  const accordianForm = (park) => {
    return (
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="copper" size="sm" eventKey={park.id}>
              Add Park as Event
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={park.id}>
            <Card.Body>
              <EventInput addEvent={props.addEvent} park={park} token={props.token} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };

  // console.log(props)  
  {/* Add ternary for unfavorite <Button variant="outline-copper" size="sm" onClick={() => this.props.unFavoritePark(park.id)}>Unfavorite</Button> */}

  // if (props.loading) {
  //   return (<div className="loader"></div>)
  // } else {
    return (
      <Card className="park mb-4" bg="white" border="coffee">
        <Card.Header as="h4"><Card.Link href={park.url}>{park.fullName}</Card.Link></Card.Header>
        <Card.Body>
          <Card.Text>{park.description}</Card.Text>
          {/* {props.favoritePark ? <Button variant="copper" size="sm" onClick={() => props.favoritePark(park.id)}>Favorite!</Button> : ''} */}
          {props.token && props.addEvent ? accordianForm(park) : ''}
        </Card.Body>
      </Card>
    )
  // }
};

export default Park;
