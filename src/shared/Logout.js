import React from 'react';
import UserContext from './user.context';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component{
     componentDidMount() {
        localStorage.removeItem("user");
        this.context.onUserUpdated( {} );  
    }

    render(){
        return(
          <Redirect to="/" />
        );
    }


}

Logout.contextType = UserContext;

export default Logout;