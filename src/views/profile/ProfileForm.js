import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
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
                  <p className="text-primary"> {this.state.user.email} </p> 
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