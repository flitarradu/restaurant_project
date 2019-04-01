import React from 'react';
import { BrowserRouter as Router,Route, Match } from 'react-router-dom';
import Home from './views/home/home';
import RestList from './views/RestList/RestList';
import Details from './views/restPage/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalSimple from '../src/views/favorites/Modal';
import Login from './views/login/Login';
import Register from './views/login/Register';
import UserContext from './shared/user.context';
import ProfileForm from './views/profile/ProfileForm';
import Logout from './shared/Logout';
import PrivateRoute from './shared/PrivateRoute';
import ContactUs from './views/ContactUs/ContactUs'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      onUserUpdated: this.handleUserChange.bind(this)
    };
  }

  handleUserChange(user) {
    console.log('change');
    this.setState({ user });
  }

  render() {
    return (
       
      <Router>
         <UserContext.Provider value={this.state}>
            
            {/* <Match exactly pattern="/facebook" component={() => window.location = 'http://facebook.com'} /> */}
            <Route exact path="/" component={ Home } />         
            <Route exact path="/favorites" component={ ModalSimple } />          
            <Route exact path="/list" component={ RestList } /> 
            <Route exact path="/login" component={ Login } />    
            <Route exact path="/contact" component={ ContactUs } />    
            <PrivateRoute exact path="/list/details/:id" component={Details} />
            <Route exact path="/register" component={ Register } />        
            <PrivateRoute exact path="/logout" component={ Logout } />  
            <PrivateRoute exact path="/myaccount" component={ ProfileForm } /> 
        
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
