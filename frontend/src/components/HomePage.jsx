import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import GameCard from './GameCard';

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
    const gamesList = ['joc jmek', 'joc barbie', 'metin', 'agar.io'];
    return (
      <div className="Full-view">
        <div className="App-Container">
          <div className="App-header">
            <HeaderNavbar />
          </div>
          <div className="App-body">
            <Sidebar />
          
          <div className="Games-view">
            <GameCard game={gamesList[0]}/>    
            <GameCard game={gamesList[1]}/>            
            <GameCard game={gamesList[2]}/>            
            <GameCard game={gamesList[3]}/>            
          </div>
          </div>
        </div>
      </div>
    )
  }
}