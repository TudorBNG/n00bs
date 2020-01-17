import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "../../styles/components/HeaderNavbar.scss";
import { Image, Col, Row, Container } from "react-bootstrap";
import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { Service } from "../../service/Service";

class HeaderNavbar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState(() => {
        return { user: user };
      });
    });
  }

  addUser() {
    /////////////////////////////////////////////////////////////
    //TODO:
    //backend: verify if user exists -> add to db otherwise
    ///////////////////////////////////////////////////////////

    let eml = localStorage.getItem("email");
    console.log("header eml: " + eml);

    Service.getUserByEmail(eml)
      .then(usr => {
        console.log("id user: " + usr.id);
        return usr;
      })
      .then(usr => {
        //user ul exista deja
        console.log("2nd call usr: " + usr);
      })
      .catch(err => {
        console.log("eroare cod: " + err);
        //if (err == 500) {
        var username = localStorage.getItem("username");
        var uid = localStorage.getItem("uid");
        var email = localStorage.getItem("email");
        //console.log("user local st: " + usr)

        Service.addUser(username, email, uid)
          .then(() => {
            console.log("usr added");
          })
          .catch(err => console.log(err));
        //}
      });
  }

  onClickLogin() {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        var user = firebase.auth().currentUser;
        var name = user.displayName;
        var email = user.email;
        var uid = user.uid;
        const userDto = {
          username: name,
          email: email,
          uid: uid
        };
        console.log(userDto);
        if (localStorage.getItem("email") == null) {
          localStorage.setItem("email", email);
          localStorage.setItem("username", name);
          localStorage.setItem("uid", uid);
        }

        this.addUser();
      });
  }

  onClickLogout() {
    firebase.auth().signOut();
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("uid");
  }

  render() {
    return (
      <Container>
        <Row noGutters className="toolbar-style">
          <Col md="5" sm="6" className="">
            <Tooltip title="home">
              <a href="/">
                <Image
                  className="logo-img-style"
                  alt="logo"
                  src={require("../../images/logo.png")}
                ></Image>
              </a>
            </Tooltip>
          </Col>

          <Col md="7" sm="6" className="justify-content-right" className="nav-div-right">
            <div className="float-right navbar-icons">
              {/* toDo: clickable username for info */}
              {this.state.user && (
                <div className="user-name">
                  {this.state.user.displayName.toUpperCase()}
                </div>
              )}
              {!this.state.user && (
                <button
                  className="btn btn-2 btn-2g"
                  onClick={() => this.onClickLogin()}
                >
                  <img src="https://img.icons8.com/small/16/000000/google-logo.png" />
                  <b>Login</b>
                </button>
              )}
              {this.state.user && (
                <button
                  className="btn btn-2 btn-2g"
                  onClick={() => this.onClickLogout()}
                >
                  <b>Log out</b>
                </button>
              )}
              {this.state.user && (
                <Tooltip title="wishlist">
                  <a href="/wishlist">
                    <Image
                      className="wishlist-img-style"
                      alt="wishlist"
                      src={require("../../images/starr.png")}
                    ></Image>
                  </a>
                </Tooltip>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeaderNavbar;
