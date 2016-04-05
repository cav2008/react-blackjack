'use strict';

import React from 'react';

import ActionButton from './actionButton.jsx';
import Card from './card.jsx';
import Score from './score.jsx';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.playerType, this.props.hand);
    return (
      <div className={`players ${this.props.playerType}`}>
        {
          this.props.playerType === 'player' &&
          <div>
            <h2>{this.props.playerType}</h2>
            <Score score={this.props.score}/>
          </div>
        }
        {/*<p>Hand: {this.props.hand}</p>*/}
        <div className="card-space">
          {
            this.props.hand.map(
              function(card) {
                return( <Card card={card} /> );
              }
            )
          }
        </div>
        {
          this.props.playerType === 'player'
          && <ActionButton hitButton={this.props.hitButton} stickButton={this.props.stickButton}/>
        }
        {
          this.props.playerType === 'dealer' &&
          <div>
            <Score score={this.props.score}/>
            <h2>{this.props.playerType}</h2>
          </div>
        }
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
