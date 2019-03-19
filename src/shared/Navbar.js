import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import { LinkContainer} from 'react-router-bootstrap';
import './Navbar.css';


function NavbarCustom (props) {
  return (
    <Navbar  bg="primary" variant="dark" >
      <LinkContainer to="/">
        <Navbar.Brand > {props.site_name}</Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/list">
            <Nav.Link >Book</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/login">
            <Nav.Link >Sign in</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavbarCustom;
