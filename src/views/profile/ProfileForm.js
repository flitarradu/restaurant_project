import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import UserContext from '../../shared/user.context';

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
      
      <div className="container mx-auto text-center">

        <h1 className="text-info">My Account</h1>
       
        <div className="">

          <div className="col-md-12 ">

            <form className="form mx-auto text-muted">

              <div className="form-group">
                  <h3>First name:</h3>
                  <p className="text-primary"> {this.state.user.first_name} </p>
            
              </div>

              <div className="form-group">
                  <h3>Last name:</h3>
                  <p className="text-primary"> {this.state.user.last_name} </p>       
              </div>

              <div className="form-group">
                  <h3>Email:</h3>
                  <p className="text-primary"> {this.state.user.email} </p> 
              </div>

              <div className="form-group">
                  <h3>Reservations:</h3>
                  <p className="text-primary"> {this.state.reserved}</p> 
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">   
                  <LinkContainer exact to="/logout">               
                    <input type="button" className="btn btn-primary" value="Logout"></input>
                  </LinkContainer> 
                </label>
              </div>

            </form>
          </div>
      </div>      
    </div>
   
    );
  }
}

ProfileForm.contextType = UserContext;

export default ProfileForm;