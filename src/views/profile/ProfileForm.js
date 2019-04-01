import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import NavbarToggle from '../../shared/NavbarToggle';
import axios from 'axios';
import UserContext from '../../shared/user.context';
import Footer from "../../shared/Footer";
import { Container } from "react-bootstrap";

class ProfileForm extends Component {
  constructor(props){
    super(props);
    this.userURL = `http://localhost:3004/users/`;
    this.reserveURL = `http://localhost:3004/reservations/`;


    this.state = {
      user: {},
      reserved: ""
    }
  }

  async componentDidMount() {
    const resp = await axios.get(this.userURL + this.context.user.id);
    const reservations = await axios.get(this.reserveURL);

    const zaTables = reservations.data.filter( item => item.email === this.context.user.email);
    const res = zaTables.map( item => item.reservations); 
    let resString = res.join();
    console.log(resString);

    if (resString.length === 0){
      resString= "There are no reservations made for this user."
    } 



    this.setState({ 
      user: resp.data,
      reserved: resString
     });


  }


  render() {
    return (   
        
      <div> 
          <NavbarToggle />
       
          <div className="container text-center">

      
            <form className="container-fluid mb-5 mt-4">
              <h3 className="font-weight-bold mx-auto text-center text-primary mt-5">My Account </h3> 
            <Container className="mt-5 mb-5">
                
                
    
            </Container>
                    <div className="list-inline mb-3">
                        <h4 className="list-inline-item text-muted">First name:</h4>
                        <p className="list-inline-item text-primary"> {this.state.user.first_name} </p>
                  
                    </div>

                    <div className="list-inline mb-3">
                        <h4 className="list-inline-item text-muted">Last name:</h4>
                        <p className="list-inline-item text-primary"> {this.state.user.last_name} </p>       
                    </div>

                    <div className="list-inline mb-3">
                        <h4 className="list-inline-item text-muted">Email:</h4>
                        <p className="list-inline-item text-primary"> {this.state.user.email} </p> 
                    </div>

                    <div className="list-inline mb-3">
                        <h4 className="list-inline-item text-muted">Reservations:</h4>
          
                        <p className="list-inline-item text-primary"> {this.state.reserved} </p> 
                    </div>
                   
                    <Container className="mt-4 mb-5">
                      <label className="col-md-3 control-label mb-5 ">            
                      <LinkContainer exact to="/logout">               
                        <input type="button" className="btn btn-primary" value="Logout"></input>
                      </LinkContainer> 
                      </label>
                    </Container>
                </form>

               

           
          </div>       
          
          <Footer />
      </div>
    );
  }
}

ProfileForm.contextType = UserContext;

export default ProfileForm;