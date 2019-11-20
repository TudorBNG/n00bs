import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
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
            <HeaderNavbar/>
          </div>
          {
          //   TODO here: App-body
          //   <div className="App-body">
          //  </div>
          }
          nu o sa tac niciodata ca sa stiti!!
        </div>
      </div>
    )
  }
}