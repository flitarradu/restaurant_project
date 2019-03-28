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
import UserRedirect from './shared/UserRedirect';
import Logout from './shared/Logout';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(user) {
    this.setState({ user });
  }

  render() {
    return (
      <Router>
         <UserContext.Provider value={ {user: this.state.user, onUserUpdated: this.handleUserChange} }>
          <>
            <UserRedirect />
            <Route exact path="/" component={ Home } />         
            <Route path="/favorites" component={ ModalSimple } />          
            <Route exact path="/list" component={ RestList } />  
            <Route path="/list/details/:id" component={ Details } /> 
            { this.state.user.first_name ? "" :  <Route exact path="/login" component={ Login } />}     
            {/* <Route path="/login" component={ Login } />          */}
            { this.state.user.first_name ? "" :  <Route path="/register" component={ Register } />    }  
            {/* <Logout /> */}
            <Route exact path="/logout" component={ Logout } />  
          </>
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
