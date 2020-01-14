import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../../styles/components/HeaderNavbar.scss';
import { Image, Col, Row, Container } from 'react-bootstrap';
import { firebase, googleAuthProvider } from "../../firebase/firebase";
//import { Container } from '@material-ui/core';

class HeaderNavbar extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    user: null,

  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState(() => { return { user: user }; });
    })
  }

  addUser(userDto) {
    /////////////////////////////////////////////////////////////
    //TODO: 
    //backend: verify if user exists -> add to db otherwise
    ///////////////////////////////////////////////////////////


    const apiHeaders = {
      'Content-Type': 'application/json',
      //'Accept': 'application/json',
      //'Access-Control-Allow-Headers': 'origin, content-type, accept, authorization,access-control-allow-origin,access-control-allow-headers',
      //'Access-Control-Allow-Origin': '*'

    };
    return new Promise((resolve, reject) =>
      fetch('http://localhost:8080/backend/noobs-api/user/persist',

        {
          method: 'POST',
          headers: apiHeaders,
          body: userDto
        })
        .then((respo) => {
          if (respo.ok) {
            console.log(respo)
            return respo.json()

          } else {
            throw respo
          }
        })
        .then((e) =>
          resolve(e)
        )
        .catch((error) => {
          console.log(error)
        })

    )
  }

  onClickLogin() {
    firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
      var user = firebase.auth().currentUser;
      var name = user.displayName;
      var email = user.email;
      var uid = user.uid;
      const userDto = {
        name: name,
        email: email,
        uid: uid
      }
      console.log(userDto)
      this.addUser(userDto);
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
              {!this.state.user && <button className='btn btn-2 btn-2g' onClick={() => this.onClickLogin()}><img src="https://img.icons8.com/small/16/000000/google-logo.png" /><b>Login</b></button>}
              {this.state.user && <button className='btn btn-2 btn-2g' onClick={() => firebase.auth().signOut()}><b>Log out</b></button>}
              {this.state.user &&
                <Tooltip title="wishlist">
                  <a href="/wishlist">
                    <Image className='wishlist-img-style' alt='wishlist' src={require('../../images/starr.png')}></Image>
                  </a>
                </Tooltip>
              }
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeaderNavbar;