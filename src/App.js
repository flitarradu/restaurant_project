import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './views/home/home';
import RestList from './views/RestList/RestList';
import Details from './views/restPage/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalSimple from '../src/views/favorites/Modal';
import Login from './views/login/Login';
import Register from './views/login/Register';
import UserContext from './shared/user.context';
import Myaccount from './views/profile/myaccount';
import Logout from './shared/Logout';
import PrivateRoute from './shared/PrivateRoute';



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
            
           
            <Route exact path="/" component={ Home } />         
            <Route exact path="/favorites" component={ ModalSimple } />          
            <Route exact path="/list" component={ RestList } /> 
            <Route exact path="/login" component={ Login } />         
            <PrivateRoute exact path="/list/details/:id" component={Details} />
            <Route exact path="/register" component={ Register } />        
            <PrivateRoute exact path="/logout" component={ Logout } />  
            <PrivateRoute exact path="/myaccount" component={ Myaccount } /> 
        
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
