import React, { Component } from 'react';
import '../styles/components/GameCard.scss';
import '../models/Game.ts';

class GameCard extends Component {



  render() {
    const game = this.props.game;
    return (
      <div className='gamecard-style'>

        <div className="photo-container">
          photo
        </div>

        <div className="content-container">
          <div>
            {game.name}
          </div>
          <div>
            {game.rating}
          </div>
          <div>
            {game.description}
          </div>
        </div>

      </div>
    );
  }
}

export default GameCard;