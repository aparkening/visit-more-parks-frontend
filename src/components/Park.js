import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Park = props => {
  const { park } = props;

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
        </Card.Body>
      </Card>
    )
  // }
};

export default Park;
