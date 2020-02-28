import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
 

class Login extends Component {
// const Login = () => {
  render() {
    return(
      <div>
        <Button href="http://localhost:3000/auth/google/redirect" variant="copper">Sign in with Google</Button>
        {/* <p>{this.props.token}</p> */}
      </div>
    )
  }
}

// class Login extends React.Component {

//   render() {
//     return (
      
//     );
//   }
// }
 
export default Login;