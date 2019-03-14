import React from 'react';
import { Card } from 'react-bootstrap';


class Card2 extends React.Component {
    render() {
      return (
        <Card style={{ width: '18rem' }}>
        <Card.Img className="rounded-image" variant="top" src="https://scontent.fsbz3-1.fna.fbcdn.net/v/t1.0-9/42424710_2024640874224812_5243125186798026752_n.jpg?_nc_cat=104&_nc_ht=scontent.fsbz3-1.fna&oh=0f5ec5ef0dfb1dc21726a451a3835bed&oe=5CDCA153" />
        <Card.Body>
            <Card.Title className="text-center">Magda Stoenescu</Card.Title>
            <Card.Text>
            Comment from the second person
            </Card.Text>
        </Card.Body>
        </Card>
      );
    }
}

export default Card2;