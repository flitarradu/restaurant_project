import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './RestList.css';
import UserContext from '../../shared/user.context';

class List extends React.Component {
    constructor(props){
        super(props);
        this.handleFav = this.handleFav.bind(this);
        this.favURL= `http://localhost:3004/favorites`;
        this.state = { 
            ceva: "text banal",
            rest: []
        };
    }


    async componentDidMount(){
        const resp = await  axios.get('http://localhost:3004/restaurants/');

        this.setState({ rest: resp.data});
    }

      async handleFav( id,name){


        const checkUser = !! this.context.user.first_name;
        const user = this.context.user.email;
        console.log(user);
        if (! checkUser) {
            alert("Please login in order to add to favorites!");
        }else{

        const restName = name;
        const restId = id;
        const payload = {
            user : user,
            restaurant : restId
        }


            console.log(payload);
            await axios.post(this.favURL, payload)
            alert(`${restName} was added to favorites!`);
        }



    }

    
    render(){

        return(

            <div className="container mb-5 mr-auto">
                <div className=" row justify-content-center ">
                    {this.state.rest.map(rest => <div key={ rest.id }>
                        <div className=" p-4 box">
                            <Card style={{ width: '20rem' }}>
                               
                                <Link to={"/list/details/"+ rest.id}>
                                    <Card.Img className="cards-image mx-auto text-center mt-3" variant="top" src={rest.image} />
                                </Link>
                                
                                <Card.Body>
                                    <Card.Title className="text-center">{rest.name}</Card.Title>
                                    <Card.Text className="text-center">
                                        {rest.short_descr}
                                    </Card.Text>
                                    <div className="btn-group ml-5">
                                        <LinkContainer to={"/list/details/"+ rest.id } >                                   
                                            <Button className="btn" variant="primary" >Book now</Button>
                                        </LinkContainer>                               
                                            <Button className="btn" variant="secondary" onClick={ this.handleFav.bind(this,rest.id, rest.name)} >Add to fav</Button>
                                    </div>
                                </Card.Body>
                                </Card>
                        </div>
                    </div>)}
                </div>
            </div>
        );
    }
}

List.contextType = UserContext;

export default List;
