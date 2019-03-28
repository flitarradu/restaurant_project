import React from 'react';
import { Card } from 'react-bootstrap';


class Card3 extends React.Component {
    render() {
      return (
        <Card className="border-0" style={{ width: '20rem' }}>
        <div className="rounded">
        <Card.Img className="rounded-image" variant="top"  src={require('../img/testim3.jpg')}   />
        </div>
        <Card.Body>
            <Card.Title className="text-center">KATHRINA KOLLON</Card.Title>
            <Card.Text className="text-center">
                Quite easy to use and have found my favorite restaurants here. Big up!
            </Card.Text>
        </Card.Body>
        </Card>
      );
    }
}

export default Card3;