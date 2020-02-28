import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
 
class Login extends Component {
  render() {
    return(
      <div>
        <Button href="http://localhost:3000/auth/google/redirect" variant="copper">Sign in with Google</Button>
        <p>{this.props.token}</p>
        Active: {this.props.active? "Yes" : "No"}
      </div>
    )
  }
}
 
export default Login;