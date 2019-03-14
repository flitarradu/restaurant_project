import React from 'react';
import { Card } from 'react-bootstrap';


class Card1 extends React.Component {
    render() {
      return (
        <Card style={{ width: '18rem' }}>
        <Card.Img className="rounded-image mx-auto"  variant="top" src="https://scontent.fsbz3-1.fna.fbcdn.net/v/t1.0-9/45001857_2152340444799003_6850573768851456000_n.jpg?_nc_cat=110&_nc_ht=scontent.fsbz3-1.fna&oh=f03bb46d4534f8b38043854d9df42754&oe=5D0FDA1E" />
        <Card.Body>
            <Card.Title className="text-center">Flitar Radu</Card.Title>
            <Card.Text>
            Comment from the frist person
            </Card.Text>
        </Card.Body>
        </Card>
      );
    }
}

export default Card1;