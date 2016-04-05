'use strict';

import React from 'react';

export default class ShuffleButton extends React.Component {

  shuffleCards() {
    this.props.shuffle();
  }

  render() {
    return (
      <div className="used-cards">
        <div
          className={`shuffle ${(this.props.cardsNo < this.props.cardsTotal) ? 'used':'none'}`} onClick={this.shuffleCards.bind(this)}>
            {`${(this.props.cardsNo < this.props.cardsTotal) ? 'Shuffle' : ''}`}
        </div>
      </div>
    );
  }
}

ShuffleButton.propTypes = {
  shuffle: React.PropTypes.func.isRequired,
  cardsNo: React.PropTypes.number.isRequired,
  cardsTotal: React.PropTypes.number.isRequired
}

ShuffleButton.defaultProps = {
  cardsNo: 0
}
