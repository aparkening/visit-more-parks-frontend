import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';

const Welcome = () => (
  <Container className="welcome">
    <Row>
      <Col xs={6}><img src="/yellowstone-photo.png" alt="Yellowstone park entrance" className="img-fluid" /></Col>
      <Col>
        <h1>Want to visit more parks?</h1>
        <p>
          Log in with your Google account and we will suggest U.S. National Parks that are nearby your upcoming events.
        </p>
        <p>
          <Button href="http://localhost:3000/auth/google/redirect">Log in with Google</Button>
        </p>
      </Col>
    </Row>
  </Container>
)
export default Welcome