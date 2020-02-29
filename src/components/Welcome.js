import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


const Welcome = () => (
  <Container>
    <h1>Let's visit more parks!</h1>
    <p>
      When you log in with your Google account, Visit More Parks will scan your calendar for upcoming events with locations and suggest nearby U.S. National Parks (within 100 miles).
    </p>
    <p>
      <Button variant="coffee" href="http://localhost:3000/auth/google/redirect">Log in to Google</Button>
    </p>
  </Container>
)
export default Welcome