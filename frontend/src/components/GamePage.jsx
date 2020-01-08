import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import {Image, Col, Row, Container} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
//import { Container } from '@material-ui/core';

class GamePage extends Component {

componentDidMount() {
    console.log("compmounted")
}

    render() {
        return (
            <div className="Full-view">
                <Container>
                    <Row noGutters>
                        <HeaderNavbar />
                    </Row>
                    <Container>
                        <Row className="Game-div justify-content-center" noGutters>
                            <Col>
                            <Image className="Game-image" src="" alt="Game Image"></Image>
                            </Col>
                            <Col>
                                <h1>Titlu</h1>
                                <StarRatings
                                //rating={}
                                starRatedColor="#F86210"
                                //changeRating={}
                                numberOfStars={5}
                                name='rating'
                                starDimension="15px"
                                starSpacing="2px"
                                />
                                <p>Description</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default GamePage;