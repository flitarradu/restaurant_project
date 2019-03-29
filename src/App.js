import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './views/home/home';
import RestList from './views/RestList/RestList';
import Details from './views/restPage/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalSimple from '../src/views/favorites/Modal';
import ContactUs from './views/ContactUs/ContactUs'

import Loginscreen from "./views/login/Loginscreen";


class App extends React.Component {
  render() {
    return (
      <Router>
        <>
           <Route exact path="/" component={ Home } /> 
          <Route path="/list" component={ RestList } />          
          <Route path="/favorites" component={ ModalSimple } />          

          <Route exact path="/list" component={ RestList } />  
          <Route path="/list/details/:id" component={ Details } />         
          <Route path="/login" component={ Loginscreen } />  
                 
                 <ContactUs />
        </>
      </Router>
    );
  }
}

export default App;
