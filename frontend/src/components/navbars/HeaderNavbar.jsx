import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../../styles/components/HeaderNavbar.scss';
import {Image, Col, Row, Container} from 'react-bootstrap';
import { firebase, googleAuthProvider } from "../../firebase/firebase";
//import { Container } from '@material-ui/core';

class HeaderNavbar extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState(() => { return { user: user }; });
    })
  }

  render() {
    return (
      <Container>
        <Row noGutters className="toolbar-style">
          <Col md="5" sm="6" className="">
          <Tooltip title="home">
            <a href="/">
              <Image className='logo-img-style' alt='logo' src={require('../../images/logo.png')}></Image>
            </a>
          </Tooltip>
        </Col>
        <Col md="7" sm="6" className="justify-content-right">
          <div className="float-right navbar-icons">
            {/* toDo: clickable username for info */}
          {this.state.user && <div className="user-name">{this.state.user.displayName.toUpperCase()}</div>}
          {!this.state.user && <button className='btn btn-2 btn-2g' onClick={() => firebase.auth().signInWithPopup(googleAuthProvider)}><img src="https://img.icons8.com/small/16/000000/google-logo.png" /><b>Login</b></button>}
          {this.state.user && <button className='btn btn-2 btn-2g' onClick={() => firebase.auth().signOut()}><b>Log out</b></button>}
          </div>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default HeaderNavbar;