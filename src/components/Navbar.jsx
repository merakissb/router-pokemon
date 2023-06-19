import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Container fluid>
      <Navbar expand='lg' style={{background: '#58585a'}}>
        <Navbar.Brand>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'
            width='150'
            height='30'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse className='justify-content-end'>
          <Nav className='ml-auto'>
            <Nav.Link style={{color: '#cacbc1'}} as={Link} to='/'>Home</Nav.Link>
            <Nav.Link style={{color: '#cacbc1'}} as={Link} to='/pokemon'>Pokemons</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;