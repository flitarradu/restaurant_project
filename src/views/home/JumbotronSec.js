import React, { Component } from "react";
import { Jumbotron, Button  } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './home.css';


class JumbotronSec extends Component {
    render() {
      return (
        <Jumbotron className="jumbo-style mt-0 ">
        <p className="text-center text-white">
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <div className="button-container">
          <Link to="/list">
            <Button variant="primary">Book now</Button>
          </Link>
        </div>
        </Jumbotron>
      );
    }
}

export default JumbotronSec;