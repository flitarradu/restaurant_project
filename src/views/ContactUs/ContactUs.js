import React, { Component } from "react";
import Navbar from '../../shared/Navbar';
import { Container } from "react-bootstrap";
import Input from "../ContactUs/components/Input";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
        emailAddress: "",
        Message: ""
      },

    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleEmaillAddress = this.handleEmaillAddress.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmaillAddress(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    axios.get("http://localhost:3004/messages", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        about: ""
      }
    });
  }

  render() {
    return (
        <div>

         <div>
             <Navbar />

        <Container>
          
        <h3 className="font-weight-bold mx-auto text-center text-secondary"> If you have any questions for us, just send us a message! </h3>

        </Container>

      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name..."}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"text"}
          name={"email address"}
          title={"Email Address"}
          value={this.state.newUser.age}
          placeholder={"Enter your e-mail address..."}
          handleChange={this.handleEmaillAddress}
        />{" "}
        
        <TextArea
          title={"Your message tu us:"}
          rows={5}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"..."}
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
