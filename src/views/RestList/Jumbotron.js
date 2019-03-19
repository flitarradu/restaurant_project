import React, { Component } from "react";
import { Jumbotron, Container  } from "react-bootstrap";


class JumbotronCustom extends Component {
    render() {
      return (
        <Jumbotron fluid className="jumbo-restList">
            <Container >
            <h1 className="font-weight-bold mx-auto text-center text-secondary">Book a table at the finest restaurants in Brasov</h1>
            <p className="text-center text-info">
               BookIT helps you enjoy a night out without the stress of not having a place to sit
            </p>
            </Container>
      </Jumbotron>
      );
    }
}

export default JumbotronCustom;