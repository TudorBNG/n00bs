import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import GameCard from './GameCard';
import GamePage from './GamePage';
import IGame from '../models/Game.ts';
import { Image, Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';


export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.getGames = this.getGames.bind(this);
  }

  state = {
    gamesList: [IGame],
    currentPage: 1,
    gamesPerPage: 5
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

  handleNextPage = () => {
    console.log("handleNext")
    let nextPage = this.state.currentPage + 1
    this.setState({
      currentPage: nextPage
    });
  }

  handlePrevPage = () => {
    console.log("handlePrev")
    let prevPage = this.state.currentPage - 1
    this.setState({
      currentPage: prevPage
    });
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

  getPaginationItems = () => {
    let active = 1;
    let items = [];
    let list = this.state.gamesList;
    console.log(list)
    for (let number = 1; number <= 5; number++) {
      let game = list[number]
      items.push(
        <Pagination.Item key={game.name} active={number === active}><div className="gamecard-container"><Link to={{ pathname: '/game-page', state: { game: game } }} className="gamecard-style" /*onClick={this.onCardClick}*/><GameCard game={game} /></Link></div></Pagination.Item>
      ,
      );
    }
    var element = document.getElementsByClassName("page-link");
    element.classList.remove();
    return items
  }

  render() {
    let i = 0;
    const indexOfLastGame = this.state.currentPage * this.state.gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - this.state.gamesPerPage;
    const currentGames = this.state.gamesList.slice(indexOfFirstGame, indexOfLastGame);

    return (
      <div className="Full-view">
        <Container>
          <Row noGutters>
            <HeaderNavbar />
          </Row>
          <Container className="Homepage-body">
            <Sidebar />
            <Pagination className="Cards-container">
              <Container >
                {
                  this.state.gamesList &&
                  currentGames.map((game, index) => {
                    return <Pagination.Item key={index} className="gamecard-container"><div ><Link to={{ pathname: '/game-page', state: { game: game } }} className="gamecard-style" /*onClick={this.onCardClick}*/><GameCard game={game} /></Link></div></Pagination.Item>
                      ;
                  })
                  // this.state.gamesList.map(game => {
                  //   return <Pagination.Item><div className="gamecard-container"><Link to={{ pathname: '/game-page', state: { game: game } }} className="gamecard-style" /*onClick={this.onCardClick}*/><GameCard game={game} /></Link></div></Pagination.Item>
                  // })
                }
                <span className="arrows-container">
                  <Pagination.Prev id="pgn-arr" className="pagination-arrow" onClick={this.handlePrevPage} />
                  <Pagination.Next id="pgn-arr" className="pagination-arrow" onClick={this.handleNextPage} />
                </span>
              </Container>

            </Pagination>

          </Container>
        </Container>
      </div>
    )
  }
}