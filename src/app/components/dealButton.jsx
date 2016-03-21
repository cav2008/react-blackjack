'use strict';

import React from 'react';

export default class DealButton extends React.Component {

  constructor(props) {
    super(props);
  }

  dealCards() {
    this.props.deal();
  }

  render() {
    return (
      <div className="deal">
        <button className="deck btn btn-primary" onClick={this.dealCards.bind(this)}>{this.props.turn?'clear cards':'deal cards'}</button>
        <p>{this.props.cardsNo}</p>
      </div>
    );
  }
}

DealButton.propTypes = {
  cardsNo: React.PropTypes.number.isRequired,
  deal: React.PropTypes.func.isRequired,
  turn: React.PropTypes.number
}
