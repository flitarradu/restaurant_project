import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './RestList.css';

class List extends React.Component {
    constructor(props){
        super(props);


        this.state = { 
            ceva: "text banal",
            rest: []
        };
    }


    async componentDidMount(){
        const resp = await  axios.get('http://localhost:3004/restaurants/');

        this.setState({ rest: resp.data});
    }

    
    render(){
        return(

            <div className="container mb-5 mr-auto">
                <div className=" row justify-content-center ">
                    {this.state.rest.map(rest => <div key={ rest.id }>
                        <div className=" p-4 box">
                            <Card style={{ width: '20rem' }}>
                               
                                <Link to={"/list/details/"+ rest.id}>
                                    <Card.Img className="cards-image mx-auto text-center" variant="top" src={rest.image} />
                                </Link>
                                
                                <Card.Body>
                                    <Card.Title className="text-center">{rest.name}</Card.Title>
                                    <Card.Text className="text-center">
                                        {rest.short_descr}
                                    </Card.Text>
                                    <LinkContainer to={"/list/details/"+ rest.id } >                                   
                                        <Button className="center-button" variant="primary" >Book now</Button>
                                    </LinkContainer>
                                </Card.Body>
                                </Card>
                        </div>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default List;
