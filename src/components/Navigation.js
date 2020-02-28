import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar className="justify-content-center" bg="coffee" variant="dark" expand role="navigation">
        <Navbar.Brand href="/">Visit More Parks</Navbar.Brand>
        <Nav>
        <Nav.Item>
            <Nav.Link href="/" activeclassname="active">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/events" activeclassname="active">Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/parks" activeclassname="active">Parks</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
  }
}
export default Navigation;