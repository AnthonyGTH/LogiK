import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  counterAll: { min: number; sec: number };
  interval;
  randomNumber1 = '';
  randomNumber2 = '';
  difficulty = 10;
  wins = 0;
  lost = 0;
  isPlaying = 0;
  randomizer = false;
  message = '';
  condition = 'Es igual a';
  styleTimer = 2;
  operationsSet = [
    '(5*5)-15',
    '(9*4)-31',
    '(2*(5+5))/2',
    '(5*5)-15',
    '(5*0)+(-15*-1)',
    '(0*5)+10',
    '(5*5)-16',
    '(5*5)-15',
    '((2*(5+5))/2)-1',
    '(5*5)-15',
    '(4*4)-9',
    '(4+4+4)-2',
    '(5*100)/50',
    '(100*5)/100',
    '5*(6-4)',
    '(9*10)/10',
    '(5*9)-35',
    '(5*9)-40',
    '(4*5)-15',
    '(65*10)-640',
    '(30*5)/15',
    '(10-5)*2',
    '(10*10)-95',
    '(5*5)/5',
    '2*(5*0.5)',
  ];
  type;
  timeSaver = {};
  styleOfGrid = '';

  counter: { min: number; sec: number };
  constructor() {
    this.randomNumber1 = this.operationsSet[Math.floor(Math.random() * 25)];
    this.randomNumber2 = this.operationsSet[Math.floor(Math.random() * 25)];
  }

  typeChange() {
    console.log('type: ', this.type);
  }

  startGame() {
    this.isPlaying = 1;
    this.randomNumber1 = this.operationsSet[Math.floor(Math.random() * 25)];
    this.randomNumber2 = this.operationsSet[Math.floor(Math.random() * 25)];
    this.difficulty = 10;
    this.wins = 0;
    this.lost = 0;
    this.message = '';
    clearInterval(this.interval);
    this.startTimer();
    this.styleOfGrid = '';
  }

  endGame() {
    if (this.wins === this.lost) {
      this.message = 'Wow, igual de aciertos que de perdidas :O';
    }
    if (this.wins > this.lost) {
      this.message = 'Acertaste mas veces que perdiste, muy bien!';
    }
    if (this.wins < this.lost) {
      this.message = 'Perdiste mas veces que las que acertaste :(';
    }

    if (this.wins === 0 && this.lost > 0) {
      this.message = 'Perdiste :(';
    }

    if (this.lost === 0 && this.wins > 0) {
      this.message = 'Ganaste, felicidades! :D';
    }
    this.counter = { min: 0, sec: 1 };
    clearInterval(this.interval);
  }

  validate() {
    const result1 = eval(this.randomNumber1);
    const result2 = eval(this.randomNumber2);
    console.log(result1 === result2, result1 > result2, result1 < result2);
    if (result1 === result2) {
      this.wins++;
      if (this.type) {
        this.counter.sec = this.counter.sec + 5;
      }
      this.styleOfGrid = 'background: darkgreen; border-radius: 10px;';
    } else {
      this.lost++;
      this.styleOfGrid = 'background: brown; border-radius: 10px;';
    }

    this.styleTimer = 1;
    if (Math.floor(Math.random() * this.difficulty) > 5) {
      this.randomizer = !this.randomizer;
      this.condition = 'Es <b>igual</b> o <b>mayor</b> que';
    } else {
      this.condition = 'Es <b>igual</b> o <b>menor</b> que';
    }
    this.randomNumber1 = this.operationsSet[Math.floor(Math.random() * 25)];
    this.randomNumber2 = this.operationsSet[Math.floor(Math.random() * 25)];
    console.log('parseInt(this.randomNumber1): ', result1, ' parseInt(this.randomNumber2): ', result2);
  }

  validateLeft() {
    const result1 = eval(this.randomNumber1);
    const result2 = eval(this.randomNumber2);
    console.log(result1 === result2, result1 > result2, result1 < result2);
    if (result1 > result2) {
      this.wins++;
      if (this.type) {
        this.counter.sec = this.counter.sec + 5;
      }
      this.styleOfGrid = 'background: darkgreen; border-radius: 10px;';
    } else {
      this.lost++;
      this.styleOfGrid = 'background: brown; border-radius: 10px;';
    }

    this.styleTimer = 1;
    if (Math.floor(Math.random() * this.difficulty) > 5) {
      this.randomizer = !this.randomizer;
      this.condition = 'Es <b>igual</b> o <b>mayor</b> que';
    } else {
      this.condition = 'Es <b>igual</b> o <b>menor</b> que';
    }
    this.randomNumber1 = this.operationsSet[Math.floor(Math.random() * 25)];
    this.randomNumber2 = this.operationsSet[Math.floor(Math.random() * 25)];
    console.log('parseInt(this.randomNumber1): ', result1, ' parseInt(this.randomNumber2): ', result2);
  }

  validateRight() {
    const result1 = eval(this.randomNumber1);
    const result2 = eval(this.randomNumber2);
    console.log(result1 === result2, result1 > result2, result1 < result2);
    if (result1 < result2) {
      this.wins++;
      if (this.type) {
        this.counter.sec = this.counter.sec + 5;
      }
      this.styleOfGrid = 'background: darkgreen; border-radius: 10px;';
    } else {
      this.lost++;
      this.styleOfGrid = 'background: brown; border-radius: 10px;';
    }

    this.styleTimer = 1;
    if (Math.floor(Math.random() * this.difficulty) > 5) {
      this.randomizer = !this.randomizer;
      this.condition = 'Es <b>igual</b> o <b>mayor</b> que';
    } else {
      this.condition = 'Es <b>igual</b> o <b>menor</b> que';
    }
    this.randomNumber1 = this.operationsSet[Math.floor(Math.random() * 25)];
    this.randomNumber2 = this.operationsSet[Math.floor(Math.random() * 25)];
    console.log('parseInt(this.randomNumber1): ', result1, ' parseInt(this.randomNumber2): ', result2);
  }

  startTimer() {
    this.counter = { min: 2, sec: 0 }; // choose whatever you want
    if (this.type) {
      this.counter = { min: 0, sec: 25 }; // choose whatever you want
    }
    const intervalId = setInterval(() => {
      if (this.counter.sec - 1 === -1) {
        this.counter.min -= 1;
        this.counter.sec = 59;
      } else {
        this.counter.sec -= 1;
      }
      if (this.styleTimer === 0) {
        this.styleOfGrid = '';
      } else {
        this.styleTimer -= 1;
      }
      if (this.counter.min === 0 && this.counter.sec === 0) {
        clearInterval(intervalId);
        this.timeSaver = this.counterAll;
        this.isPlaying = -1;
        this.endGame();
      }
    }, 1000);

    this.counterAll = { min: 0, sec: 0 }; // choose whatever you want
    this.interval = setInterval(() => {
      if (this.counterAll.sec + 1 === 60) {
        this.counterAll.min += 1;
        this.counterAll.sec = 0;
      } else {
        this.counterAll.sec += 1;
      }
    }, 1000);
  }
}
