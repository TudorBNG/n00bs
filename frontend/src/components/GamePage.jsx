import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import {Image, Col, Row} from 'react-bootstrap';
class GamePage extends Component {

componentDidMount() {
    console.log("compmounted")
}

    render() {
        return (
            <div className="Full-view">
                <div className="App-Container">
                    <div className="App-header">
                        <HeaderNavbar />
                    </div>
                    <div className="App-body">

                    </div>
                </div>
            </div>
        )
    }
}

export default GamePage;