'use strict';

import React from 'react';
import $ from 'jquery';
import Sounds from '../utilities/sounds.js';

export default class ShuffleButton extends React.Component {

  constructor(props) {
    super(props);
    this.sounds = new Sounds();
  }

  shuffleCards() {
    this.shuffleDeck();

    this.sounds.playShuffle();
    // set timer to allow shuffle animatation to finish first (synchronous)
    setTimeout(this.props.shuffle, 3500);

  }

  shuffleDeck() {
    // card animatation by techigniter
    // create shuffle effect(just to show it to user)
    let i = 0;
    let time = 0;
    let shuffle_time = 4;
    let counter = 0;

    $($('.shuffle').get().reverse()).each(function() {
      let card = $(this);
      setTimeout(function() {
        card.animate({
          'margin-left': '150px'
        }, 100);
        setTimeout(function() {
          card.animate({'z-index': i});
          card.animate({
            'margin-left': '0px'
          }, 150);
        }, 100);
        i++;
      }, time);
      time += 700;
      counter++;
      //limit shuffle to specific no of times.
      if (counter > shuffle_time) {
        return false;
      }
    });
  }

  // function to loop and create several shuffle cards for the shuffle animation
  makeUsedCards() {
    let usedCards = [];

    for(let i = 0; i < 12; i++) {
      usedCards.push(<div className={`shuffle ${(this.props.cardsNo < this.props.cardsTotal) ? 'used':'none'}`} onClick={this.shuffleCards.bind(this)}>{`${(this.props.cardsNo < this.props.cardsTotal) ? 'Shuffle' : ''}`}</div>);
    }

    return usedCards;
  }

  render() {
    return (
      <div className="used-cards">
        {this.makeUsedCards()}
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
