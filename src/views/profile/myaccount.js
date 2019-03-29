import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../shared/Footer';
import NavbarToggle from '../../shared/NavbarToggle';
import ProfileForm from '../../views/profile/ProfileForm';
// import theme from '../../views/profile/theme';
// npm install --save reactstrap react react-dom


class Myaccount extends Component {
  render() {
    return (
    <>
      <NavbarToggle site_name="BookIT" />
      <ProfileForm />
      {/* <theme /> */}
      <Footer  />
    </>
    );
  }
}

export default Myaccount;