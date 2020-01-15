import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import { Image, Col, Row, Container } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import '../styles/components/GamePage.scss'
//import { Container } from '@material-ui/core';

class WishlistPage extends Component {


    componentDidMount() {
        ////////////////////////////////
        /// TODO
        /// game id sa fie in fe pentru fetch uri de add to wishlist
    }

    render() {
        const game = [];
        return (
            <div className="Full-view">
                <Container>
                    <Row noGutters>
                        <HeaderNavbar />
                    </Row>
                    <Container>
                        <Row className="Game-div justify-content-center" noGutters>
                            {/* <Col md={4}>
                                <Image className="Game-image" src={game.cover_url} alt="Game Image"></Image>
                            </Col> */}
                            <Col md={8} className="game-page-content">

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

export default WishlistPage;