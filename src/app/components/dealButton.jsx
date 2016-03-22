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
        <button
          className={`deck btn btn-${this.props.clearHand?'primary':'warning'}`}
          onClick={this.dealCards.bind(this)}>
            {this.props.clearHand?'Deal':'Clear'}
        </button>
        <p>{this.props.cardsNo}</p>
      </div>
    );
  }
}

DealButton.propTypes = {
  cardsNo: React.PropTypes.number.isRequired,
  deal: React.PropTypes.func.isRequired,
  clearHand: React.PropTypes.bool.isRequired
}
