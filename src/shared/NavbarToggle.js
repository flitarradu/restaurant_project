import React from "react";
import NavbarCustom from './Navbar';
import NavbarLoggedIn from './NavbarLogedIn';
import './Navbar.css';
import UserContext from './user.context';

function NavbarToggle(props) {

  return (
    <UserContext.Consumer>
      {
        (function (value) {
          return(
            <>
                  { value.user.first_name != null ?  <NavbarLoggedIn /> : <NavbarCustom />}
      
            </>
          
      );
    })
  }
    </UserContext.Consumer>
  );
}

export default NavbarToggle;
