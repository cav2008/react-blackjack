'use strict';

import React from 'react';
import { render } from 'react-dom';
import 'bootstrap-loader';
import $ from 'jquery';
// import styles
import '../../styles/app.scss';
// import models
import Game from '../model/game.js';
import Deck from '../model/deck.js';

import Sounds from '../utilities/sounds.js';

// import components
import Player from './player.jsx';
import DealButton from './dealButton.jsx';
import ShuffleButton from './shuffleButton.jsx';
import ModeButton from './modeButton.jsx';
import Message from './message.jsx'

class Table extends React.Component {

  /**
   * turn 0 = beginning
   * turn 1 = player's turn
   */
  constructor(props) {
    super(props);
    this.sounds = new Sounds();
    this.deck = new Deck();
    this.game = new Game();
    this.state = {
      hardMode: false,
      cardsTotal: this.deck.getDeck().length,
      cardsLeft: this.deck.getDeck().length,
      playerHand: [],
      dealerHand: [],
      playerScore: 0,
      dealerScore: 0,
      turn: 0,
      message: '',
      clearHand: true
    };
  }

  /**
   * deal card function, acts as game start
   * only deal cards if it is inital turn, there are at least 20 cards at the start and all player hands are empty
   * otherwise the deal button turns in to clear hand to set up next game
   */
  deal() {
    console.log('deal',this.state.clearHand);
    if(this.state.turn === 0 && (this.deck.getDeck().length >= 20) && (this.state.clearHand === true)) {
      this.dealCard(this.state.dealerHand, 'dealerHand');
      setTimeout(function() {
        this.dealCard(this.state.playerHand, 'playerHand');
        this.setState({turn: 1, clearHand: false});
      }.bind(this), 300);

      this.setState({message: ''});

      // stacks all card with a relative margin, to give a 3d effect
      let left = 0;
      let step = 0.8;
      let i = 1;

      // add deck style to shuffle button
      $('.shuffle').each(function() {
        $(this).css({'z-index': i});
        $(this).css({
            'margin-left': left + 'px'
        });
        $(this).css({
            'margin-top': 0 + 'px'
        });
        left = left + step;
        i++;
      });

    } else {
      this.clearHand();
    }
  }

  /**
   * method to add a card to the player's hand
   */
  dealCard(hand, player) {
    this.sounds.playDraw();
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
      console.log('out of cards');
    }
  }

  /**
   * function for player draw card hit
   */
  hit() {
    if(this.state.turn === 1) {
      this.dealCard(this.state.playerHand, 'playerHand');
      if(this.game.checkHandStatus(this.state.playerHand) === 'bust') {
        this.gameOver('dealer');
      }
    }
  }

  /**
   * function for player stick and dealers turn
   */
  stick() {
    console.log('---------STICK----------');

    if(this.state.turn === 1) {
      // get player's hand total value
      let playerHandValue = this.game.calculateHand(this.state.playerHand);
      console.log('player hand', playerHandValue);

      // BEAST MODE
      // keep looping until dealer has the same or higher card value
      if(this.state.hardMode) {
        console.log('hard mode');
        let checker = function() {
          this.dealCard(this.state.dealerHand, 'dealerHand');
          if(this.game.calculateHand(this.state.dealerHand) >= playerHandValue || this.game.calculateHand(this.state.dealerHand) > 21 || (this.deck.getDeck().length === 0)) {
            clearInterval(timer);

            let dealerHandValue = this.game.calculateHand(this.state.dealerHand);
            console.log('dealer hand', dealerHandValue);

            // detemine outcome of dealer's final hand
            if(dealerHandValue > 21 || playerHandValue > dealerHandValue) {
              this.gameOver('player');
            }
            else if(dealerHandValue > playerHandValue) {
              this.gameOver('dealer');
            }
            else {
              this.gameOver('draw');
            }
          }
        };

        let timer = setInterval(checker.bind(this), 400);

      } else {
        // NORMAL MODE
        // dealer must draw until value over 16
        console.log('normal mode');
        let checker = function() {
          this.dealCard(this.state.dealerHand, 'dealerHand');
          if(this.game.calculateHand(this.state.dealerHand) > 16 || (this.deck.getDeck().length === 0)) {
            clearInterval(timer);

            let dealerHandValue = this.game.calculateHand(this.state.dealerHand);
            console.log('dealer hand', dealerHandValue);

            // detemine outcome of dealer's final hand
            if(dealerHandValue > 21 || playerHandValue > dealerHandValue) {
              this.gameOver('player');
            }
            else if(dealerHandValue > playerHandValue) {
              this.gameOver('dealer');
            }
            else {
              this.gameOver('draw');
            }
          }
        };

        let timer = setInterval(checker.bind(this), 800);
      }
    }
  }

  /**
   * method to reset turn and register scores
   */
  gameOver(winner) {
    if(winner === 'player') {
      this.sounds.playWin();
      this.setState({message: 'Win'});
      this.setState({playerScore: ++this.state.playerScore});
      console.log('PLAYER win----');
    }
    else if(winner === 'dealer') {
      this.sounds.playLose();
      this.setState({message: 'Lose'});
      this.setState({dealerScore: ++this.state.dealerScore});
      console.log('DEALER win----');
    }
    else {
      this.sounds.playDraw();
      this.setState({message: 'Push'});
      console.log('DRAW----');
    }

    this.setState({turn: 0});
    console.log(this.state.playerScore, this.state.dealerScore);
  }

  /**
   * Clears all hands
   */
  clearHand() {
    this.setState({dealerHand: [], playerHand: [], clearHand: true, turn: 0});
  }

  /**
   * Generate a new deck (shuffle)
   */
  shuffle() {
    this.clearHand();
    this.deck = new Deck();
    this.setState({cardsLeft: this.deck.getDeck().length});
  }

  toggleMode() {
    this.setState({hardMode: !this.state.hardMode});
  }

  render() {
    return (
      <div className="table container">
        <Player playerType="dealer" hand={this.state.dealerHand} score={this.state.dealerScore}/>
        <Player
          playerType="player"
          hand={this.state.playerHand}
          score={this.state.playerScore}
          hitButton={this.hit.bind(this)}
          stickButton={this.stick.bind(this)}
        />
        <DealButton cardsNo={this.state.cardsLeft} deal={this.deal.bind(this)} clearHand={this.state.clearHand}/>
        <ShuffleButton
          shuffle={this.shuffle.bind(this)}
          cardsTotal={this.state.cardsTotal}
          cardsNo={this.state.cardsLeft}
        />
        <ModeButton toggleMode={this.toggleMode.bind(this)}/>
        <Message message={this.state.message}/>
      </div>
    );
  }
}

// add react app to html element
render(<Table />, document.getElementById('app'));
