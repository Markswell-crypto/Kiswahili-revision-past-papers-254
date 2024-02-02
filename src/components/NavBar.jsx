import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container mt-3">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Image src="/klogo.png" alt="Kenya Pastpapers Logo" fluid height="100px" width="100px" className="ml-4" />
        <Navbar.Brand as={Link} to="/" className="ml-5">
          KISWAHILI REVISION PASTPAPERS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-5">
            <Nav.Link as={Link} to="/" style={{ marginLeft: '20px' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/exam-papers" style={{ marginLeft: '20px' }}>
              Past-Papers
            </Nav.Link>
            <Nav.Link as={Link} to="/payment" style={{ marginLeft: '20px' }}>
              Payment
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ marginLeft: '20px' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
