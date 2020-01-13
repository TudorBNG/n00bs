import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import {Image, Col, Row, Container} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
//import { Container } from '@material-ui/core';

class GamePage extends Component {


componentDidMount() {
    
    console.log()
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
                            <Col>
                            <Image className="Game-image" src={game.cover_url} alt="Game Image"></Image>
                            </Col>
                            <Col>
                                <h1>Titlu</h1>
                                <StarRatings
                                rating={game.rating}
                                starRatedColor="#F86210"
                                //changeRating={}
                                numberOfStars={5}
                                name='rating'
                                starDimension="15px"
                                starSpacing="2px"
                                />
                                <p>{game.summary}</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default GamePage;