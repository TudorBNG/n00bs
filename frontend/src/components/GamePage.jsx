import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import {Image, Col, Row, Container} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import '../styles/components/GamePage.scss'
//import { Container } from '@material-ui/core';

class GamePage extends Component {


componentDidMount() {
    
}

    render() {
        const game = this.props.location.state.game;
        return (
            <div className="Full-view">
                <Container>
                    <Row noGutters>
                        <HeaderNavbar />
                    </Row>
                    <Container>
                        <Row className="Game-div justify-content-center" noGutters>
                            <Col md={4}>
                            <Image className="Game-image" src={game.cover_url} alt="Game Image"></Image>
                            </Col>
                            <Col md={8} className="game-page-content">
                                <h1 className="game-page-title">{game.name}</h1>
                                <h6>{game.release_date}</h6>
                                <StarRatings
                                rating={4.4}
                                starRatedColor="#F86210"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                                starDimension="15px"
                                starSpacing="2px"
                                />
                                <br/>
                                <span>Genre: </span>
                                <br/>
                                <span>Platforms: </span>
                                <br/>
                                <br/>
                                <p>{game.summary}</p>
                            </Col>
                        </Row>
                        <Row className='more-info-div' noGutters>

                        </Row>
                        <Row className='review-div' noGutters>
                            {/* read and write reviews */}
                        </Row>
                        <Row className='reccomending-div' noGutters>

                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default GamePage;