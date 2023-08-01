import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const CustomNavbar = () => {

  const authLinks = (
    <Nav.Link as={NavLink} to="/dashboard">
      Dashboard
    </Nav.Link>
  );

  const guestLinks = (
    <>
      <Nav.Link as={NavLink} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login">
        Login
      </Nav.Link>
    </>
  );

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auth Site
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          {authLinks}
          {guestLinks}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
