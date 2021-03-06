var Furry = require("./furry.js");
var Coin = require("./coin.js");

function game() {
  var self = this;
  this.board = document.querySelectorAll("#board div");
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  this.index = function(x, y) {
    return x + (y * 10);
  };

  this.showFurry = function() {
    this.hideVisibleFurry();
    console.log("Furry x: " + this.furry.x + " y: " + this.furry.y);
    this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
  };

  this.hideVisibleFurry = function() {
    for (var i = 0; i < this.board.length; i++) {
      this.board[i].classList.remove("furry");
    }
  };

  this.showCoin = function() {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
  };

  this.moveFurry = function() {
    if (this.furry.direction === "right") {
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left") {
      this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === "down") {
      this.furry.y = this.furry.y + 1;
    } else if (this.furry.direction === "up") {
      this.furry.y = this.furry.y - 1;
    }
    this.gameOver();
    this.checkCoinCollision();
    this.showFurry();
  };

  this.turnFurry = function(event) {
    switch (event.which) {
      case 37:
        self.furry.direction = "left";
        break;
      case 38:
        self.furry.direction = "up";
        break;
      case 39:
        self.furry.direction = "right";
        break;
      case 40:
        self.furry.direction = "down";
        break;
      default:
    }
  };

  this.checkCoinCollision = function() {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      console.log("BUUUUUM!!!!!");
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
      this.score++;
      document.querySelector("strong").innerHTML = this.score;
      this.coin = new Coin();
      this.showCoin();
    }
  };

  this.gameOver = function() {
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
      clearInterval(this.idSetinterval);
      self.hideVisibleFurry();
      console.log("Ściana!!");
      document.querySelector("#board").classList.add("invisible");
      document.querySelector("#score").classList.add("invisible");
      document.querySelector("#over").classList.remove("invisible");
      document.querySelector("#over h2").innerHTML = "Your score: " + this.score;

    }
  };

  this.startGame = function() {
    this.showFurry();
    this.showCoin();
    this.idSetinterval = setInterval(function() {
      self.moveFurry();
      // console.log(this);
    }, 200);
  };
}

module.exports = game;
