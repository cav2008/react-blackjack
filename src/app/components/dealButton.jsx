'use strict';

import React from 'react';

export default class DealButton extends React.Component {

  constructor(props) {
    super(props);
  }

  dealCards() {
    this.props.deal();
  }

  /**
   * using es6 template literal to toggle class
   */
  render() {
    return (
      <div className="deal">
        <div
          className={`deck ${this.props.clearHand?'give':'clear'}`}
          onClick={this.dealCards.bind(this)}>
            {this.props.clearHand?'Deal':'Clear'}
        </div>
        <p>Cards left: {this.props.cardsNo}</p>
        <p className="tip">Shuffle when less than 20 cards</p>
      </div>
    );
  }
}

DealButton.propTypes = {
  cardsNo: React.PropTypes.number.isRequired,
  deal: React.PropTypes.func.isRequired,
  clearHand: React.PropTypes.bool.isRequired
}
