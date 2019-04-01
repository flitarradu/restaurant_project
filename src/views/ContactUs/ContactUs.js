import React, { Component } from "react";
import NavbarToggle from '../../shared/NavbarToggle';
import { Container } from "react-bootstrap";
import Footer from "../../shared/Footer";
import './ContactUs.css'
import axios from "axios";
import {Redirect} from 'react-router-dom';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class FormContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "",
          email: "",
          message: "",
          redirect : false
    }
  }



    async handleFormSubmit(event) {
      console.log("aici");
      event.preventDefault();
      var apiBaseUrl = "http://localhost:3004/messages/";
  
      var payload = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };
      console.log(payload);
  
      await axios
      .post(apiBaseUrl , payload)
      console.log(payload);
      this.setState({ redirect: true })
      alert("Message sent!");
      

     
    }


  render() {
    const { redirect } = this.state;
    console.log("Redirect home");
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
        <>
          <div className='mb-5'>
          
            <NavbarToggle />
            <Container className="mt-5 mb-5">
              
            <h3 className="font-weight-bold mx-auto text-center text-secondary"> If you have any questions for us, just send us a message! </h3>

            </Container>

            <form className="Loginscreen mx-auto text-center mb-5 container-fluid">
              <MuiThemeProvider>
                <div >
            
                  <TextField
                    hintText="Enter your name"
                    floatingLabelText="Name"
                    onChange={(event, newValue) =>
                      this.setState({ name: newValue })
                    }
                  />
                  <br />
                  <TextField
                    hintText="Enter your email"
                    type="email"
                    floatingLabelText="Email"
                    onChange={(event, newValue) => this.setState({ email: newValue })}
                  />
                  <br />
                  <TextField 
                    className="text-field-custom"
                    type="text"
                    hintText="Enter your message..."
                    floatingLabelText="Message"
                    onChange={(event, newValue) =>
                      this.setState({ message: newValue })
                    }
                  />
                  <br/>
                  <RaisedButton
                    className="mb-5 mt-5"
                    label="Submit"
                    primary={true}
                    onClick={event => this.handleFormSubmit(event)}
                  />
                </div>
              </MuiThemeProvider>
            </form>
          
          </div>


          <Footer className="mt-5"/>
      </>
      
      
    );
  }
}



export default FormContainer;
