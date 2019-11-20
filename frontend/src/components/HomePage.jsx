import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';

import '../styles/components/HomePage.scss';

export default class HomePage extends Component {

  componentDidMount() {
    console.log("compodidmount");
    fetch('http://localhost:8080/backend/noobs-api/user/all')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.log());
  }

  render() {
    return (
      <div className="Full-view">
        <div className="App-Container">
          <div className="App-header">
            <HeaderNavbar />
          </div>
          <div className="App-body">
            <Sidebar />
          
          <div className="Games-view">
            <div>
              lalala
            </div>
            <div>
              lalala
            </div>
            <div>
              lalala
            </div>
            {/*
              //scrollable ul with game cards
            */}
          </div>
          </div>
        </div>
      </div>
    )
  }
}