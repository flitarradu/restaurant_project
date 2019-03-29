import React from 'react';
import { Card } from 'react-bootstrap';


class Card1 extends React.Component {
    render() {
      return (
        <Card className="border-0" style={{ width: '18rem' }}>
        <Card.Img className="rounded-image mx-auto border-0"  variant="top" src={require('../img/testim1.jpg')} />
        <Card.Body>
            <Card.Title className="text-center">ANGELINA SELIMONIA</Card.Title>
            <Card.Text className="text-center">
              Booked a table last week. Everything was very quick!
            </Card.Text>
        </Card.Body>
        </Card>
      );
    }
}

export default Card1;