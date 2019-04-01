import React, { Component } from 'react';
import NavbarToggle from '../../shared/NavbarToggle';
import axios from 'axios';
import UserContext from '../../shared/user.context';
// import Footer from "../../shared/Footer";
import { Container } from "react-bootstrap";

class ProfileForm extends Component {
  constructor(props){
    super(props);
    this.userURL = `http://localhost:3004/users/`;

    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    console.log('aaaaa', this.context);
    const resp = await axios.get(this.userURL + this.context.user.id);
    console.log(resp);
    this.setState({ user: resp.data });

    console.log(resp.data);
  }


  render() {
    return (   
        
      <div> 
          <NavbarToggle />
       
          <div className="container text-center">

      
            <form className="container-fluid mb-5 mt-4">
                    
            <Container className="mt-5 mb-5">
                
                <h3 className="font-weight-bold mx-auto text-center text-primary">My Account </h3>
    
            </Container>
                    <div className="list-inline">
                        <h4 className="list-inline-item text-muted">First name:</h4>
                        <p className="list-inline-item text-primary"> {this.state.user.first_name} </p>
                  
                    </div>

                    <div className="list-inline">
                        <h4 className="list-inline-item text-muted">Last name:</h4>
                        <p className="list-inline-item text-primary"> {this.state.user.last_name} </p>       
                    </div>

                    <div className="list-inline">
                        <h4 className="list-inline-item text-muted">Email:</h4>
                        <p className="list-inline-item text-primary"> {this.state.user.email} </p> 
                    </div>

                    <div className="list-inline">
                        <h4 className="list-inline-item text-muted">Reservations:</h4>
          
                        <p className="list-inline-item text-primary"> {this.state.user.reservations} </p> 
                    </div>
                   
                    <Container className="mt-5 mb-5">
                      <label className="col-md-3 control-label">            
                          <input type="button" className="btn btn-primary" value="Logout"></input>
                      </label>
                    </Container>
          
                </form>

               

            {/* <Footer /> */}
          </div>       
          

      </div>
    );
  }
}

ProfileForm.contextType = UserContext;

export default ProfileForm;