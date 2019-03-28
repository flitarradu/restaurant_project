import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../../shared/Navbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import UserContext from '../../shared/user.context';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }

 }



  async handleClick(event){

      var apiBaseUrl = "http://localhost:3004/users?first_name="+this.state.username+'&password='+this.state.password;
      const resp = await axios.get(apiBaseUrl);
      const isRegistered = !!resp.data[0]//resp.data.filter( item => item.email === this.state.username && item.password === this.state.password);
      // console.log(isRegistered[0].first_name);
    
      if ( isRegistered ){
        localStorage.setItem("user", JSON.stringify(resp.data[0]));
        
        this.context.onUserUpdated(resp.data[0]);
      alert("Login succesful!");  
      this.props.history.push("/");
      }else {
        alert("Username or password not found!");
      }

  }


render() {
    return (
      <div className="Loginscreen mx-auto text-center">
        <MuiThemeProvider>
          <>
          <Navbar
              title="Login" site_name="BookIT"
            />
          <div >

           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick()}/>
        
             </div>
             </>
         </MuiThemeProvider>
     </div>
    );
  }
}
const style = {
 margin: 15,
};

Login.contextType = UserContext;

export default Login;