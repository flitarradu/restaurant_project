import React, { Component } from "react";
import { Jumbotron, Container  } from "react-bootstrap";
import './home.css';


class JumbotronCustom extends Component {
    render() {
      return (
        <Jumbotron fluid className="jumbo-style mb-0">
            <Container >
            <h1 className="font-weight-bold mx-auto text-center text-white">Welcome to <span className="text-muted">BookIT</span></h1>
            <p className="text-center text-white">
               You can book a table at the finest restaurants in Brasov. Give it a try!
            </p>
            </Container>
      </Jumbotron>
      );
    }
}

export default JumbotronCustom;