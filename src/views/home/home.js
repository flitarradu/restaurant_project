import React from 'react';
import Footer from '../../shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';
import JumbotronCustom from './Jumbotron';
import JumbotronSec from './JumbotronSec';
import Testimonials from './Testimonials';
import NavbarToggle from '../../shared/NavbarToggle';
import WhyComp from './Why';

class Home extends React.Component {
    render() {
      return (
          <>
            <NavbarToggle  site_name="BookIT"/>
            <JumbotronCustom />
            <Carousel />
            <JumbotronSec />
            <WhyComp />
            <Testimonials />
            <Footer  />
          
          </>
      );
    }
  }

  export default Home;