'use strict';

import React from 'react';

import ActionButton from './actionButton.jsx';
import Card from './card.jsx';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <p>Player {this.props.playerType}</p>
        {
          this.props.playerType === 'player'
          && <ActionButton hitButton={this.props.hitButton} stickButton={this.props.stickButton}/>
        }
        <p>Hand: {this.props.hand}</p>
        {
          this.props.hand.map(
            function(card) {
              return( <Card card={card} /> );
            }
          )
        }
        <p>score: {this.props.score}</p>
      </div>
    );
  }
}

Player.propTypes = {
  playerType: React.PropTypes.string.isRequired,
  hand: React.PropTypes.array.isRequired,
  score: React.PropTypes.number,
  hitButton: React.PropTypes.func,
  stickButton: React.PropTypes.func
}

Player.defaultProps = {
  score: 0
}
