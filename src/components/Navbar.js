import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="true" role="navigation">
        <Navbar.Brand href="#home">Visit More Parks</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}
export default Navigation;