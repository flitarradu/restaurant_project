import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "../../shared/Navbar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      redirect: false
    };
  }

   async handleClick(event) {
    var apiBaseUrl = "http://localhost:3004";
    console.log(
      "values",
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password
      
    );


    var payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };



     const emailValid = !! this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    if ( emailValid ){
      const resp = await axios.get(apiBaseUrl + "/users?email="+this.state.email);

      const isAlreadyRegistered = !!resp.data[0];

      if ( !isAlreadyRegistered )
      {
        await axios
        .post(apiBaseUrl + "/users", payload)
        this.context.onUserUpdated(payload);
        
  
        alert("Registration succesful!");
        this.setState({ redirect: true })
        
      } else {
        alert("Email already exists!");
      }
    } else {
      alert("Email not valid");
      return;
    }
    // if( isAlreadyRegistered.length === 0 )
    

   
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      console.log("succesfull");
      return <Redirect to='/' />;
    }
    return (
      <div className="Loginscreen mx-auto text-center">
        <MuiThemeProvider>
          <div >
            <Navbar title="Register" site_name="BookIT" />
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) =>
                this.setState({ first_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) =>
                this.setState({ last_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

Register.contextType = UserContext;

export default Register;
