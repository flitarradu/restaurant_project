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
    const resString = res.join();
    console.log(resString);


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
          
                        <p className="list-inline-item text-primary"> {this.state.reserved} </p> 
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