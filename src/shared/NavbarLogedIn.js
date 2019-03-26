import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { LinkContainer} from 'react-router-bootstrap';
import './Navbar.css';
import logo from '../shared/img/Logo.png';
import UserContext from './user.context';

function NavbarLoggedIn (props) {
  return (
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
                <div className="text-primary mr-2" >
                    Welcome {value.user.first_name}
                 </div>
              <div className="btn-toolbar">
                <LinkContainer exact to="/accont">        
                  <Button variant="outline-primary" >Account</Button>
                </LinkContainer> 
              </div>
              </Form>
            </Navbar>
          
      );
    })
  }
    </UserContext.Consumer>
  );
}

export default NavbarLoggedIn;