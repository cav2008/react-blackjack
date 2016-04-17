'use strict';

import win from '../../sounds/win.wav';
import lose from '../../sounds/lose.wav';
import draw from '../../sounds/draw.wav';
import cardShuffle from '../../sounds/cardShuffle.wav';
import cardFan from '../../sounds/cardFan2.wav';
import cardSlide1 from '../../sounds/cardSlide1.wav';
import cardSlide2 from '../../sounds/cardSlide2.wav';
import cardSlide3 from '../../sounds/cardSlide3.wav';
import cardSlide4 from '../../sounds/cardSlide4.wav';
import cardSlide5 from '../../sounds/cardSlide5.wav';
import cardSlide6 from '../../sounds/cardSlide6.wav';
import cardSlide7 from '../../sounds/cardSlide7.wav';
import cardSlide8 from '../../sounds/cardSlide8.wav';
import empty from '../../sounds/empty.wav';

export default class Sound {

  constructor() {
    this.win = new Audio(win);
    this.lose = new Audio(lose);
    this.draw = new Audio(draw);
    this.cardShuffle = new Audio(cardShuffle);
    this.cardFan = new Audio(cardFan);
    this.cardSlide1 = new Audio(cardSlide1);
    this.cardSlide2 = new Audio(cardSlide2);
    this.cardSlide3 = new Audio(cardSlide3);
    this.cardSlide4 = new Audio(cardSlide4);
    this.cardSlide5 = new Audio(cardSlide5);
    this.cardSlide6 = new Audio(cardSlide6);
    this.cardSlide7 = new Audio(cardSlide7);
    this.cardSlide8 = new Audio(cardSlide8);
    this.empty = new Audio(empty);

    this.cardDraw = [
      this.cardSlide1,
      this.cardSlide2,
      this.cardSlide3,
      this.cardSlide4,
      this.cardSlide5,
      this.cardSlide6,
      this.cardSlide7,
      this.cardSlide8
    ]
  }

  playWin() {
    this.win.play();
  }

  playLose() {
    this.lose.play();
  }

  playDraw() {
    this.draw.play();
  }

  playShuffle() {
    this.cardShuffle.play();

    setTimeout(function() {
      this.cardFan.play();
    }.bind(this), 3200);

  }

  playDraw() {
    this.cardDraw[Math.floor(Math.random() * 8)].play();
  }

  playEmpty() {
    this.empty.play();
  }
}
