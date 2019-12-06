import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import GameCard from './GameCard';
import IGame from '../models/Game.ts';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.getGames = this.getGames.bind(this);
  }

  state = {
    gamesList: [IGame]
  };

  componentDidMount() {
    console.log("compodidmount");
    this.getGames()
      .then((res) => {
        this.setState({
          gamesList: res
        })
      })
      .catch(err => console.log(err))
    console.log(this.state.gamesList)
  }

  getGames() {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/backend/noobs-api/game/all')
        .then(res => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch(err => reject(err));
    })
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
              {this.state.gamesList != null &&
                this.state.gamesList.map(game => {
                  return <GameCard game={game} />
                })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}