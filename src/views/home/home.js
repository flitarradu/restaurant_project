import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
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
        <Router>
          <div>
            <Navbar />
            <JumbotronCustom />
            <Carousel />
            <JumbotronSec />
            <Testimonials />
            <Footer  />
          </div>
        </Router>
      );
    }
  }

  export default Home;