import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './views/home/home';
import RestList from './views/RestList/RestList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalSimple from '../src/views/favorites/Modal';


class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={ Home } /> 
          <Route path="/list" component={ RestList } />          
          <Route path="/favorites" component={ ModalSimple } />          
          </>
      </Router>
    );
  }
}

export default App;
