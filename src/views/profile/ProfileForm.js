import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import UserContext from '../../shared/user.context';

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
      
      <div className="container mx-auto text-center">

        <h1 className="text-muted">My Account</h1>
       
        <div className="">

          <div className="col-md-12 ">

            <form className="form mx-auto">

              <div className="form-group">
                <label className="col-lg-3 control-label">First name:
                  <p > {this.state.user.first_name} </p>
                </label>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Last name:             
                  <input className="form-control" type="text"></input>    
                </label>           
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Email:                
                  <input className="form-control" type="text"></input>
                  </label>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">No. of bookings:              
                  <input className="form-control" type="text"></input>
                </label>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">            
                  <input type="button" className="btn btn-primary" value="Logout"></input>
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