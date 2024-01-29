import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container mt-3">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Image src="/gcomlogo.jpg" alt="Kenya Pastpapers Logo" fluid height="50px" width="50px" className="ml-4" />
        <Navbar.Brand as={Link} to="/" className="ml-5">
          KISWAHILI REVISION PASTPAPERS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="ml-4">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/exam-papers" className="ml-4">
              Past-Papers
            </Nav.Link>
            <Nav.Link as={Link} to="/payment" className="ml-4">
              Payment
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="ml-4">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
