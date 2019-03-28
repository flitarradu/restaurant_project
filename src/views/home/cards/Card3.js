import React from 'react';
import { Card } from 'react-bootstrap';


class Card3 extends React.Component {
    render() {
      return (
        <Card className="border-0" style={{ width: '20rem' }}>
        <div className="rounded">
        <Card.Img className="rounded-image" variant="top"  src="https://scontent.fsbz3-1.fna.fbcdn.net/v/t1.0-9/40595663_2082825991738758_6521932797030957056_n.jpg?_nc_cat=105&_nc_ht=scontent.fsbz3-1.fna&oh=a0ff7b9482d301174a19ed0bcf5f5a23&oe=5D0D2044"  />
        </div>
        <Card.Body>
            <Card.Title className="text-center">Florina Ceasar</Card.Title>
            <Card.Text>
            Comment from the third person
            </Card.Text>
        </Card.Body>
        </Card>
      );
    }
}

export default Card3;