import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import GameCard from './GameCard';
import GamePage from './GamePage';
import IGame from '../models/Game.ts';
import {Image, Col, Row, Container} from 'react-bootstrap';



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

  onCardClick = () => {
    console.log("clicked on game")
    this.props.history.push('/game-page')
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
        <Container>
          <Row noGutters>
            <HeaderNavbar />
          </Row>
          <Container className="Homepage-body">
            <Sidebar />
            <Container className="Cards-container">
            <div className="gamecard-container">
              {this.state.gamesList != null &&
                this.state.gamesList.map(game => {
                  return <a className="gamecard-style" onClick={this.onCardClick}><GameCard game={game} /></a>
                })}
            </div>
            </Container>
          </Container>
        </Container>
      </div>
    )
  }
}