
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';



class FooterCustom extends Component {
  render() {
    return (
      <div className ="footer-custom">


    <footer className="footer-distributed">

        <div className="footer-right">

            <Link to="/facebook"><i className="fa fa-facebook"></i></Link>
            <Link to="/twitter"><i className="fa fa-twitter"></i></Link>
            <Link to="/linkedin"><i className="fa fa-linkedin"></i></Link>
            <Link to="/github"><i className="fa fa-github"></i></Link>

        </div>

        <div className="footer-left ">

            <p className="footer-links text-muted">
                <Link className="link-1 mr-1" to="/">Home</Link>


                <Link to="/list" className="mr-1">Book</Link>

                <Link to="/contact" className="mr-1">Contact</Link>

            </p>

            <p className="text-important">BookIT &copy; 2019</p>
        </div>

    </footer>

    </div>
    
    );
  }
}

export default FooterCustom;