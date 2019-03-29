import React from 'react';
import UserContext from './user.context';

class UserRedirect extends React.Component{
     componentDidMount() {
        const user = ;
        if(user) {
            this.context.onUserUpdated( user);
        }

        console.log(user);
    }

    render() {
        return null;
    }


}

UserRedirect.contextType = UserContext;

export default UserRedirect;