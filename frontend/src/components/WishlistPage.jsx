import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import '../styles/components/Wishlist.scss';
import GameCard from './GameCard';
import IGame from '../models/Game.ts';
import { Image, Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import { Service } from '../service/Service';

class WishlistPage extends Component {

    constructor(props) {
        super(props);
        //this.getGames = this.getGames.bind(this);
    }

    state = {
        gamesList: [IGame],
        currentPage: 1,
        gamesPerPage: 5
    };

    componentDidMount() {
        console.log("compodidmount");
        let eml = localStorage.getItem('email')

        Service.getUserByEmail(eml)
            .then((usr) => {
                console.log(usr)
                return usr.id
            }
            ).then((id_usr) => {
                console.log(id_usr)
                Service.getUserWishlist(id_usr)
                    .then((res) => {
                        console.log("yes")
                        this.setState({
                            gamesList: res
                        })
                    }
                    )
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))

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

export default WishlistPage;