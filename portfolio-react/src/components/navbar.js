import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class N extends Component {

  render() {
    return (
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>   
          <Nav.Link href="#technos">Technos</Nav.Link>
          <Nav.Link href="#productions">Productions</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}