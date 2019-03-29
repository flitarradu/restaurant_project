import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import { LinkContainer, Link} from 'react-router-bootstrap';
import './Navbar.css';
import logo from '../shared/img/Logo.jpg';

function NavbarCustom (props) {
  return (
    <Navbar  bg="dark" variant="dark" >
      <LinkContainer to="/">
        <Navbar.Brand > 
         <img src={logo}  style={{width:60, marginTop: -7}} />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/list">
            <Nav.Link >Book</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/favorites">
           <Nav.Link >Favorites</Nav.Link>
           </LinkContainer> 
          <LinkContainer exact to="/login">
            <Nav.Link >Sign in</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/ContactUs">
            <Nav.Link >Contact us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
      <div className="btn-toolbar">
         <Button variant="success" className="btn-group mr-2">Log in</Button>
         <Button variant="outline-primary" >Sign up</Button>
        </div>
      </Form>
    </Navbar>
  );
}

export default NavbarCustom;
