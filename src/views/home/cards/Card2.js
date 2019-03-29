import React from 'react';
import { Card } from 'react-bootstrap';


class Card2 extends React.Component {
    render() {
      return (
        <Card className="border-0" style={{ width: '18rem' }}>
        <Card.Img className="rounded-image" variant="top" src={require('../img/testim2.jpg')} />
        <Card.Body>
            <Card.Title className="text-center">MOIS ROCKER</Card.Title>
            <Card.Text className="text-center">
              Really quick response from the restaurant after the reservation was made. Keep up the good work!
            </Card.Text>
        </Card.Body>
        </Card>
      );
    }
}

export default Card2;