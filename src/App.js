import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './views/home/Carousel';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Carousel />
          <Footer  />
        </div>
      </Router>
    );
  }
}

export default App;
