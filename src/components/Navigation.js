import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="true" role="navigation">
        <Navbar.Brand href="/">Visit More Parks</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/parks">Parks</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}
export default Navigation;