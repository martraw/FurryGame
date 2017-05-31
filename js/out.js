/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Furry = __webpack_require__(3);
var Coin = __webpack_require__(2);


// var Game = function(){
function game(){
  var self = this;
  this.board = document.querySelectorAll("#board div");
  // console.log(this.board);
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  this.index = function(x,y){
    return x + (y * 10);
  };

  this.showFurry = function(){
    this.hideVisibleFurry();
    console.log("Furry x: " + this.furry.x + " y: " + this.furry.y);
    this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
  };

  this.hideVisibleFurry = function(){
    for (var i = 0; i < this.board.length; i++) {
      this.board[i].classList.remove("furry");
    }
    // var visibleFurry = document.querySelector(".furry");
    // visibleFurry.classList.remove("furry");
    // console.log(visibleFurry);
  };

  this.showCoin = function(){
    this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
  };

  this.moveFurry = function(){
    if (this.furry.direction === "right"){
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left") {
      this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === "down") {
      this.furry.y = this.furry.y + 1;
    } else if (this.furry.direction === "up") {
      this.furry.y = this.furry.y -1;
    }
    this.gameOver();
    this.checkCoinCollision();
    this.showFurry();
  };

  this.turnFurry = function(event){
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

  this.checkCoinCollision = function(){
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      console.log("BUUUUUM!!!!!");
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
      this.score ++;
      document.querySelector("strong").innerHTML = this.score;
      this.coin = new Coin();
      this.showCoin();
    }
    // this.showCoin();
  };

  this.gameOver = function(){
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

  this.startGame = function(){
    this.showFurry();
    this.showCoin();
    this.idSetinterval = setInterval(function(){
      self.moveFurry();
      // console.log(this);
    }, 200);

  };

}

module.exports = game;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


// var Furry = require("./furry.js");
// var Furry = function(){
//   this.x = 0;
//   this.y = 0;
//   this.direction = "right";
// };

// var Coin = require("./coin.js");
// var Coin = function(){
//   this.x = Math.floor(Math.random() * 10);
//   this.y = Math.floor(Math.random() * 10);
//   console.log("Moneta na pozycji x: " + this.x + ", y: " + this.y);
// };


var Game = __webpack_require__(0);
// var Game = function(){
//   var self = this;
//   this.board = document.querySelectorAll("#board div");
//   // console.log(this.board);
//   this.furry = new Furry();
//   this.coin = new Coin();
//   this.score = 0;
//   this.index = function(x,y){
//     return x + (y * 10);
//   };
//
//   this.showFurry = function(){
//     this.hideVisibleFurry();
//     console.log("Furry x: " + this.furry.x + " y: " + this.furry.y);
//     this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
//   };
//
//   this.hideVisibleFurry = function(){
//     for (var i = 0; i < this.board.length; i++) {
//       this.board[i].classList.remove("furry");
//     }
//     // var visibleFurry = document.querySelector(".furry");
//     // visibleFurry.classList.remove("furry");
//     // console.log(visibleFurry);
//   };
//
//   this.showCoin = function(){
//     this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
//   };
//
//   this.moveFurry = function(){
//     if (this.furry.direction === "right"){
//       this.furry.x = this.furry.x + 1;
//     } else if (this.furry.direction === "left") {
//       this.furry.x = this.furry.x - 1;
//     } else if (this.furry.direction === "down") {
//       this.furry.y = this.furry.y + 1;
//     } else if (this.furry.direction === "up") {
//       this.furry.y = this.furry.y -1;
//     }
//     this.gameOver();
//     this.checkCoinCollision();
//     this.showFurry();
//   };
//
//   this.turnFurry = function(event){
//     switch (event.which) {
//       case 37:
//         self.furry.direction = "left";
//         break;
//       case 38:
//         self.furry.direction = "up";
//         break;
//       case 39:
//         self.furry.direction = "right";
//         break;
//       case 40:
//         self.furry.direction = "down";
//         break;
//       default:
//     }
//   };
//
//   this.checkCoinCollision = function(){
//     if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
//       console.log("BUUUUUM!!!!!");
//       this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
//       this.score ++;
//       document.querySelector("strong").innerHTML = this.score;
//       this.coin = new Coin();
//       this.showCoin();
//     }
//     // this.showCoin();
//   };
//
//   this.gameOver = function(){
//     if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
//       clearInterval(this.idSetinterval);
//       self.hideVisibleFurry();
//       console.log("Ściana!!");
//       document.querySelector("#board").classList.add("invisible");
//       document.querySelector("#score").classList.add("invisible");
//       document.querySelector("#over").classList.remove("invisible");
//       document.querySelector("#over h2").innerHTML = "Your score: " + this.score;
//
//     }
//   };
//
//   this.startGame = function(){
//     this.showFurry();
//     this.showCoin();
//     this.idSetinterval = setInterval(function(){
//       self.moveFurry();
//       // console.log(this);
//     }, 200);
//
//   };
//
// };


var play = new Game();
document.addEventListener('keydown', function(event){
    play.turnFurry(event);
    // console.log(event.which);
});
play.startGame();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function coin(){
// var Coin = function(){
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
  console.log("Moneta na pozycji x: " + this.x + ", y: " + this.y);
};

module.exports = coin;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function furry(){
// var Furry = function(){
  this.x = 0;
  this.y = 0;
  this.direction = "right";
};

module.exports = furry;


/***/ })
/******/ ]);