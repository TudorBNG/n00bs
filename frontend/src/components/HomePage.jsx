import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import GameCard from './GameCard';
import GamePage from './GamePage';
import IGame from '../models/Game.ts';
import {Image, Col, Row, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



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
    let i = 0;
    return (
      <div className="Full-view">
        <Container>
          <Row noGutters>
            <HeaderNavbar />
          </Row>
          <Container className="Homepage-body">
            <Sidebar />
            <Container className="Cards-container">
              {this.state.gamesList != null &&
                this.state.gamesList.map(game => {
                  return <div className="gamecard-container"><Link to={{pathname: '/game-page', state: {game: game}}} className="gamecard-style" /*onClick={this.onCardClick}*/><GameCard game={game} /></Link></div>
                })}
            </Container>
          </Container>
        </Container>
      </div>
    )
  }
}