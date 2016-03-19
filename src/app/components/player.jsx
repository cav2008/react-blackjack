'use strict';

import React from 'react';

import ActionButton from './actionButton.jsx';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <p>Player {this.props.playerType}</p>
        {this.props.playerType === 'player' && <ActionButton />}
        <p>Hand: {this.props.hand}</p>
      </div>
    );
  }
}

Player.propTypes = {
  playerType: React.PropTypes.string.isRequired,
  hand: React.PropTypes.array.isRequired
}
