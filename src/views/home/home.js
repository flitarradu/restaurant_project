import React from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';
import JumbotronCustom from './Jumbotron';
import JumbotronSec from './JumbotronSec';
import Testimonials from './Testimonials';

class Home extends React.Component {
    render() {
      return (
          <>
            <Navbar site_name="BookIT" />
            <JumbotronCustom />
            <Carousel />
            <JumbotronSec />
            <Testimonials />
            <Footer  />
          
          </>
      );
    }
  }

  export default Home;