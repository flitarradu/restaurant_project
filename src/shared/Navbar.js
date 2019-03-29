import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { LinkContainer} from 'react-router-bootstrap';
import './Navbar.css';
import logo from '../shared/img/Logo.png';
import UserContext from './user.context';

function NavbarCustom (props) {
  return (
<<<<<<< HEAD
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
=======
    <UserContext.Consumer>
      {
        (function (value) {
          return(
            <Navbar  bg="dark" variant="dark" >
              <LinkContainer to="/">
                <Navbar.Brand > 
                <img src={logo} alt ="logo" style={{width:60, marginTop: -7}} />
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
                </Nav>
               
              </Navbar.Collapse>
              <Form inline>
              <div className="btn-toolbar">
               
                <LinkContainer exact to="/login">        
                <Button variant="success" className="btn-group mr-2">Log in</Button>
                  </LinkContainer> 
                <LinkContainer exact to="/register">        
                  <Button variant="outline-primary" >Sign up</Button>
                </LinkContainer> 
                </div>
              </Form>
            </Navbar>
          
      );
    })
  }
    </UserContext.Consumer>
>>>>>>> master
  );
}

export default NavbarCustom;
