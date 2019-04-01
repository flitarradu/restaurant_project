
import React, { Component } from "react";
import Footer from "react-footer-comp";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';



class FooterCustom extends Component {
  render() {
    return (
      <div className ="footer-custom">

      <Footer 
        copyrightIcon
        years={[2018]}
        height={80}
        bgColor={"#343a40"}
        copyrightText
        copyrightIconStyle={{ color: "white", fontSize: 17, marginRight: 10 }}
        copyrightTextStyle={{ color: "gray", fontSize: 17, marginRight: 10 }}
        textStyle={{ color: "#007bff", fontSize: 16, marginRight: 10 }}
        text={"All rights reserved."}
        
      />
      
    </div>
    
    );
  }
}

export default FooterCustom;