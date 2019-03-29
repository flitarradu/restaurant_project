import React, { Component } from 'react';
import reactstrap from 'reactstrap';
import './profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class ProfileForm extends Component {
  render() {
    return (       
      
      <div class="container">

        <h1>My Account</h1>
       
        <div class="row">
         
          {/* <div class="col-md-3">
            <div class="text-center">
              <img src="//placehold.it/100" class="avatar img-circle" alt="avatar"></img>
              <h6>Upload a different photo...</h6>
              <input type="file" class="form-control"></input>
            </div>
          </div> */}

        
          <div class="col-md-9 personal-info">

            <div class="row">
              <h3 class="col-lg-3 text-right">Personal info</h3>
            </div>

            <form class="form-horizontal">

              <div class="form-group">
                <label class="col-lg-3 control-label">First name:
                  <input class="form-control" type="text" value="firstname"></input>
                </label>
              </div>

              <div class="form-group">
                <label class="col-lg-3 control-label">Last name:             
                  <input class="form-control" type="text" value="lastname"></input>    
                </label>           
              </div>

              <div class="form-group">
                <label class="col-lg-3 control-label">Email:                
                  <input class="form-control" type="text" value="email"></input>
                  </label>
              </div>

              <div class="form-group">
                <label class="col-md-3 control-label">No. of bookings:              
                  <input class="form-control" type="text" value="xsute"></input>
                </label>
              </div>

              <div class="form-group">
                <label class="col-md-3 control-label">            
                  <input type="button" class="btn btn-primary" value="Logout"></input>
                </label>
              </div>

            </form>
          </div>
      </div>      
    </div>
   
    );
  }
}

export default ProfileForm;