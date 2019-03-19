import React from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import JumbotronRest from './JumbotronRest';
import List from './List';
import Jumbotron from './Jumbotron';


class RestList extends React.Component {
    render() {
      return (
          <>
            <Navbar site_name="BookIT" />
            <JumbotronRest />
            <Jumbotron />
            <List />
            <Footer  />
          </>
      );
    }
  }

  export default RestList;