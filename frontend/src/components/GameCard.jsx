import React, { Component } from 'react';
import '../styles/components/GameCard.scss';
import '../models/Game.ts';
import StarRatings from 'react-star-ratings';
import { number } from 'prop-types';


class GameCard extends Component {

  state = {
    rating: number
  };

  render() {
    const game = this.props.game;
    return (
      <div className='gamecard-style'>

        <div className="photo-container">
          photo
        </div>

        <div className="content-container">
          <span className="title-rating">
            <div>
              {game.name}
            </div>
            <div>
              <StarRatings
                rating={game.rating}
                starRatedColor="#F86210"
                changeRating={this.changeRating}
                numberOfStars={5}
                name='rating'
                starDimension="15px"
                starSpacing="2px"
              />
            </div>
          </span>
          <div className="description-container">
            {game.description}
          </div>
        </div>

      </div>
    );
  }
}

export default GameCard;