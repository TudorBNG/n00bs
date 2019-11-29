import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../../styles/components/HeaderNavbar.scss';
import { firebase, googleAuthProvider } from "../../firebase/firebase";

class HeaderNavbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='toolbar-style'>
        <div className="logo-container">
          <Tooltip title="home">
            <img className='logo-img-style' alt='logo' src={require('../../images/logo.png')}></img>
          </Tooltip>
        </div>
        <div className="login-container">
          <img alt='login' className="login-icon" onClick={() => firebase.auth().signInWithPopup(googleAuthProvider)} src={require('../../images/login.png')}></img>
        </div>
      </div>
    );
  }
}

export default HeaderNavbar;