'use strict';

export default class Game {

  /**
   * pass the hand and return's the value of the hand
   */
  calculateHand(hand) {
    let total = 0;
    let aces = 0;
    let aceTotal = 0;

    for(let i = 0; i < hand.length; i++) {
      let card = hand[i];
      let value = card.slice(1);

      if(isNaN(value)) {
        if(value != 'a') {
          value = 10;
        }
        else {
          value = 0;
          aces++
        }
      }
      total = parseInt(total) + parseInt(value);
    }

    // first ace total value
    for(let i = 0; i < aces; i++) {
      if((total + 11) < 22) {
        aceTotal = parseInt(aceTotal) + 11;
      }
      else {
        aceTotal++;
      }
    }

    if((total + aceTotal) > 21) {
      aceTotal = 0;
      for(let i = 0; i < aces; i++) {
        aceTotal++;
      }
    }

    total = parseInt(total) + parseInt(aceTotal);

    return total;
  }

  /**
   * Checks if the player bust or not
   */
  checkHandStatus(hand) {
    let result;
    let total = this.calculateHand(hand);

    if(total > 21) {
      result = 'bust';
    }

    return result;
  }
}
