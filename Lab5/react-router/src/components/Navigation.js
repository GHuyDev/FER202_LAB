import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  const location = useLocation();
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={location.pathname}>
            <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/news" eventKey="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/quiz" eventKey="/quiz">Quiz</Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
