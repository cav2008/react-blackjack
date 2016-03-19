'use strict';

import React from 'react';
import { render } from 'react-dom';
import 'bootstrap-loader';
// import styles
import '../../styles/app.scss';
// import models
import Game from '../model/game.js';
import Deck from '../model/deck.js';
// import components
import Player from './player.jsx';
import DealButton from './dealButton.jsx';

class Table extends React.Component {

  /**
   * turn 0 = beginning
   * turn 1 = deal both player
   * turn 2 = player's turns
   * turn 3 = dealer's turns
   */
  constructor(props) {
    super(props);
    this.deck = new Deck();
    this.state = {
      cardsLeft: this.deck.getDeck().length,
      playerHand: [],
      dealerHand: [],
      turn: 0
    };
  }

  /**
   * deal card function, acts as game start
   * figure out the turns
   */
  deal() {
    if(this.state.turn === 0) {
      this.dealCard(this.state.dealerHand, 'dealerHand');
      this.dealCard(this.state.playerHand, 'playerHand');

      console.log(this.state.dealerHand, this.state.playerHand);
    }
  }

  /**
   * method to add a card to the player's hand
   */
  dealCard(hand, player) {
    if(this.deck.getDeck().length != 0) {
      let cardHand = hand;
      let card = this.deck.drawCard();

      cardHand.push(card);

      this.setState({
        player: cardHand,
        cardsLeft: this.deck.getDeck().length
      });
    }
    else {
      alert('out of cards');
    }
  }

  render() {
    return (
      <div className="table">
        <Player playerType="dealer" hand={this.state.dealerHand}/>
        <Player playerType="player" hand={this.state.playerHand}/>
        <DealButton cardsNo={this.state.cardsLeft} deal={this.deal.bind(this)}/>
      </div>
    );
  }
}

// add react app to html element
render(<Table />, document.getElementById('app'));
