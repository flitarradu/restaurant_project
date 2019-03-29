import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../../shared/Navbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import UserContext from '../../shared/user.context';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    redirect : false
    }

 }

  componentDidMount(){

    const checkUser = !! this.context.user.first_name;
    console.log(checkUser);
    if (checkUser) {
      this.setState({ redirect: true });
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
        this.setState({ redirect: true })
         alert("Login succesful!");  
      }else {
        alert("Username or password not found!");
      }

  }


render() {
    const { redirect } = this.state;
    console.log("Redirect home");
    if (redirect) {
      return <Redirect to='/' />;
    }
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