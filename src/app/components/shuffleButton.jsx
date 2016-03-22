'use strict';

import React from 'react';

export default class ShuffleButton extends React.Component {

  shuffleCards() {
    this.props.shuffle();
  }

  render() {
    return (
      <div className="shuffle">
        <button className="btn btn-info" onClick={this.shuffleCards.bind(this)}>Shuffle</button>
      </div>
    );
  }
}

ShuffleButton.propTypes = {
  shuffle: React.PropTypes.func.isRequired
}
