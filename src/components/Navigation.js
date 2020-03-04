import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar className="justify-content-center" bg="secondary" variant="dark" expand role="navigation">
        <Navbar.Brand>Visit More Parks</Navbar.Brand>
        {this.props.token ? 
          <Nav>
            <Nav.Item>
              <Nav.Link href="/events" activeclassname="active">Events</Nav.Link>  
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/parks" activeclassname="active">Parks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.props.removeAuth(this.props.token)} >Logout</Nav.Link>
            </Nav.Item>
          </Nav> : 
          <Nav>
            <Nav.Item><Nav.Link href="http://localhost:3000/auth/google/redirect">Login with Google</Nav.Link></Nav.Item>
          </Nav>
        }
      </Navbar>
    )
  }
}
export default Navigation;