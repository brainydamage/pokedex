import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import pokeball from '../static/icons8-pokeball-96.png';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={pokeball}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt='test'
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/captured">Captured</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

