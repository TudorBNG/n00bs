import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import GameCard from './GameCard';
import GamePage from './GamePage';

import IGame from '../models/Game.ts';
import { BrowserRouter as Router, Route, HashRouter, Link, BrowserRouter, Switch, Redirect } from 'react-router-dom';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.getGames = this.getGames.bind(this);
  }

  state = {
    gamesList: [IGame],
    redirect: false
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

  onCardClick = () => {
    console.log("clicked on game")
    this.setState({
      redirect: true
    })

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
    if (this.state.redirect) {
      return <BrowserRouter><Link to="/gamePage" component={GamePage} /></BrowserRouter>;
    }
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
                  return <a onClick={this.onCardClick}><GameCard game={game} /></a>
                })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}