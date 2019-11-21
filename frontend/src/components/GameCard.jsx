import React, { Component } from 'react';
import '../styles/components/GameCard.scss';

class GameCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      const game =this.props.game;
    return (
      <div className='gamecard-style'>
        <div>
        {game}
        </div>
      </div>
    );
  }
}

export default GameCard;