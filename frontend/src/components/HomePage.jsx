import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import '../styles/components/Sidebar.scss';

import GameCard from './GameCard';
import GamePage from './GamePage';
import IGenre from '../models/Genre.ts';
import { Service } from '../service/Service';
import IGame from '../models/Game.ts';
import { Image, Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';


export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.getGames = this.getGames.bind(this);
    this.getGenres = this.getGenres.bind(this);
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  state = {
    gamesList: [IGame],
    currentPage: 1,
    gamesPerPage: 5,
    genresList: [IGenre],
    clickedGenres: [],
    filtered: false,
    clickedGame: null
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
    Service.getGenres()
      .then((res) => {
        this.setState({
          genresList: res
        })
        console.log(res)
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
    if (prevPage != 0)
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

  createSidebar = () => {
    //const filters = this.state.genresList;
    // let sidebar = [];
    // console.log("create sidebar")
    // this.state.genresList.map((genres, index) => {
    //    <li class={this.state.clickedGenres.includes(this.state.genresList[i].id) ? "sidebar-row row-active" : "sidebar-row"} onClick={() => this.handleGenreClick(this.state.genresList[i].id)} className='sidebar-row'>{
    //     this.state.genresList[i].name
    //   }</li>
    //     ;
    // })
    // for (let i = 0; i < this.state.genresList.length; i++) {
    //   sidebar.push(<li class={this.state.clickedGenres.includes(this.state.genresList[i].id) ? "sidebar-row row-active" : "sidebar-row"} onClick={() => this.handleGenreClick(this.state.genresList[i].id)} className='sidebar-row'>{
    //     this.state.genresList[i].name
    //   }</li>)
    // }

    // return sidebar
  }

  handleGenreClick(id) {
    console.log(id)
    var g_list = this.state.clickedGenres
    var contains = false
    for (var i = 0; i < g_list.length; i++) {
      if (g_list[i] == id)
        contains = true
      //new_list.push(g_list[i])
    }
    if (!contains) {
      g_list.push(id)
    }
    else {
      if (g_list.length == 1) {
        g_list = []
      }
      else {
        var new_list = []

        for (var i = 0; i < g_list.length; i++) {
          if (g_list[i] !== id)
            new_list.push(g_list[i])
        }
        //g_list.reduce(id)
        g_list = new_list
      }
    }
    this.setState({
      clickedGenres: g_list
    })
    console.log(g_list)
    if (g_list.length != 0) {
      Service.getGamesByGenres(g_list)
        .then((res) => {
          this.setState({
            filtered: true,
            gamesList: res
          })
        })
        .catch((err) => console.log(err))
    }
    else {
      this.getGames()
        .then((res) => {
          this.setState({
            gamesList: res,
            filtered: false
          })
        })
        .catch(err => console.log(err))
    }
  }

  getGenres() {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/backend/noobs-api/genre/all')
        .then(res => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch(err => reject(err));
    })
  }

  getDetailedGame = (id) => {
    console.log("getDetailedGame");

    Service.getDetailedGame(id)
      .then((res) => {
        console.log(res);
        this.setState({
          clickedGame: res
        })
      })
      .catch(err => console.log(err));
  };

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
            <ul className='sidebar-style'>
              {this.state.genresList && this.state.genresList.map((genre, index) => {
                return <li class={this.state.clickedGenres.includes(genre.id) ? "sidebar-row row-active" : "sidebar-row"} onClick={() => this.handleGenreClick(genre.id)} className='sidebar-row'>{
                  genre.name
                }</li>
                  ;
              })}
            </ul>
            <Pagination className="Cards-container">
              <Container >
                {
                  this.state.gamesList && (

                    currentGames ?
                      currentGames.map((game, index) => {
                        return <Pagination.Item key={index} className="gamecard-container"><div ><Link to={{ pathname: '/game-page', state: { game: game } }} className="gamecard-style" /*onClick={this.onCardClick}*/><GameCard game={game} /></Link></div></Pagination.Item>
                          ;
                      })
                      : this.handlePrevPage
                  )

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