import React from 'react';
import NavbarToggle from '../../shared/NavbarToggle';
import Footer from '../../shared/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import JumbotronRest from './JumbotronRest';
import List from './List';
import Jumbotron from './Jumbotron';


class RestList extends React.Component {
    render() {
      return (
          <>
            <NavbarToggle site_name="BookIT" />
            <JumbotronRest />
            <Jumbotron />
            <List />
            <Footer  />
          </>
      );
    }
  }

  export default RestList;