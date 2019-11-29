import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../../styles/components/HeaderNavbar.scss';
import { firebase, googleAuthProvider } from "../../firebase/firebase";

class HeaderNavbar extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    user: null
  };

  componentDidMount()
  {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user); 
      this.setState(()=> {return {user:user};});
  })
  }

  render() {
    return (
      <div className='toolbar-style'>
        <Tooltip title="home">
        <img className='logo-img-style' alt='logo' src={require('../../images/logo.png')}></img>
        </Tooltip>
        <div className="login-container">
           {!this.state.user && <button className='login-button' onClick={() => firebase.auth().signInWithPopup(googleAuthProvider)}><img src="https://img.icons8.com/small/16/000000/google-logo.png"/><b>Login</b></button>}
           {this.state.user && <button className='login-button' onClick={() => firebase.auth().signOut()}><b>Log out</b></button>}
        </div>
        {this.state.user && <div>{this.state.user.displayName}</div>}
      </div>
    );
  }
}

export default HeaderNavbar;