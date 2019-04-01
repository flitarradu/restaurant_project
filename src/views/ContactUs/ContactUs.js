import React, { Component } from "react";
import NavbarToggle from '../../shared/NavbarToggle';
import { Container } from "react-bootstrap";
import Input from "../ContactUs/components/Input";
import TextArea from "../ContactUs/components/TextArea";
import Button from "../ContactUs/components/Button";
import Footer from "../../shared/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'
import axios from "axios";

class FormContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newUser: {
          name: "",
          email: "",
          Message: ""
        }
    }
  }


    async handleFormSubmit(event) {
      event.preventDefault();
      var apiBaseUrl = "http://localhost:3004/messages/";
  
      var payload = {
        name: this.state.newUser.name,
        email: this.state.newUser.email,
        message: this.state.newUser.message
      };
      console.log(payload);
  
      await axios
      .post(apiBaseUrl , payload)
      console.log(payload);
      alert("Message sent!");

     
    }


  render() {
    return (
        <div>

          <div>
          <NavbarToggle />

            <Container className="mt-5 mb-5">
              
            <h3 className="font-weight-bold mx-auto text-center text-secondary"> If you have any questions for us, just send us a message! </h3>

            </Container>

          <form className="container-fluid mb-5 mt-4" onSubmit={this.handleFormSubmit}>
            <Input
             
              title={"Full Name"}
              name={"name"}
              // defaultValue={this.state.name}
              placeholder={"Enter your name..."}
              onChange={(event, newValue) =>
                this.setState({ name: newValue })
              }
            />{" "}
            {/* Name of the user */}
            <Input
              
              name={"email address"}
              title={"Email Address"}
              // defaultValue={this.state.email}
              placeholder={"Enter your e-mail address..."}
              onChange={(event, newValue) =>
                this.setState({ email: newValue })
              }
            />{" "}
            
            <TextArea
              
              title={"Your message tu us:"}
              rows={5}
              // defaultValue={this.state.message}
              name={"currentPetInfo"}
              onChange={(event, newValue) =>
                this.setState({ message: newValue })
              }
              placeholder={"Insert your message here..."}
            />
            {/* Message */}
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              style={buttonStyle}
            />{" "}
            {/*Submit */}
            <Button
              action={this.handleClearForm}
              type={"secondary"}
              title={"Clear"}
              style={buttonStyle}
            />{" "}
            {/* Clear the form */}
          </form>
          
          </div>
          <Footer/>
      </div>
      
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};


export default FormContainer;
