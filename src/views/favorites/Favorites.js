import React from 'react';
import axios from "axios";
import UserContext from '../../shared/user.context';
import NavbarToggle from '../../shared/NavbarToggle';
import { Card, Button } from 'react-bootstrap';
import { Container  } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.favoritesURL = `http://localhost:3004/favorites/`;
    this.apiURL = `http://localhost:3004/restaurants/`;
    this.state = {
      error: null,
      isLoaded: false,
      rest: []
    };
  }

  async componentDidMount() {
    const user = this.context.user.email;
    const resp = await axios.get(this.favoritesURL+"?user="+user);

    const favorites = resp.data.map(item => item.restaurant  );

    if (!! favorites){
      const response = await axios.get(this.apiURL);
      const restaurants = response.data.filter( item => favorites.includes(item.restID) )
      console.log(restaurants);
      this.setState({ rest: restaurants});
    }



  }

  render() {

      let card = [];
      let cond = !! this.state.rest[0];
      
      console.log(this.state.rest);
      console.log(cond);
      if ( cond ){
       card = this.state.rest.map((rest) => (

          <div className=" p-4 box" key={rest.id}>
              <Card style={{ width: '20rem' }}>
                  
                  <Link to={"/list/details/"+ rest.id}>
                      <Card.Img className="cards-image mx-auto text-center mt-3" variant="top" src={rest.image} />
                  </Link>
                  
                  <Card.Body>
                      <Card.Title className="text-center">{rest.name}</Card.Title>
                      <Card.Text className="text-center">
                          {rest.short_descr}
                      </Card.Text>
                      <div >
                        <LinkContainer to={"/list/details/"+ rest.id } >                                   
                          <Button className="center-button" variant="primary" >Book now</Button>
                        </LinkContainer>                          
                      </div>
                  </Card.Body>
                  </Card>
          </div>
    ))
      }else{
        card = <div>
            <Container >
                <h1 className="font-weight-bold mx-auto text-center text-secondary">There are no Favorites added yet...</h1>
            </Container>
        </div>
      }

      return (
        <div>        
         <NavbarToggle site_name="BookIT"/> 
         <div className="container mb-5 mr-auto">
         <div className=" row justify-content-center "> 
          {card}
        </div>
        </div>
        </div> 
      );
    }
  
}


Favorites.contextType = UserContext;
export default Favorites;
