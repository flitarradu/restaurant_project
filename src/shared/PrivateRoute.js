import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from './user.context';

function PrivateRoute({ component: Component, ...rest }) {
    const userContext = useContext(UserContext);

    return (
      <Route
        {...rest}
        render={props =>
          userContext.user.first_name ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;