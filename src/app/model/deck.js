'use strict';

export default class Deck {

  /**
   * setup and create a new deck
   */
  constructor() {
    this.suits = ['s', 'd', 'c', 'h'];
    this.value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

    this.deck = this.generateDeck();
  }

  generateDeck() {
    let deck = [];

    for(let i = 0; i < this.suits.length; i++) {
      for(let j = 0; j < this.value.length; j++) {
        let card = this.suits[i] + this.value[j];
        deck.push(card);
      }
    }

    return deck;
  }

  /**
   * Get a random card, return random card and remove it from the deck
   */
  drawCard() {
    let randomCard = Math.floor((Math.random() * this.deck.length));
    return this.deck.splice(randomCard, 1)[0];
  }

  getDeck() {
    return this.deck;
  }
}
