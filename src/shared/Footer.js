import React, { Component } from "react";
import { Navbar, Container} from "react-bootstrap";



class FooterCustom extends Component {
  render() {
    return (
        <Container >
            <Navbar expand="lg" variant="light" bg="primary" fixed="bottom" className="mt-5">
                <Navbar.Brand href="#">Footer</Navbar.Brand>
            </Navbar>
        </Container>
    );
  }
}

export default FooterCustom;