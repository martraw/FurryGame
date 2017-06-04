var Game = require("./game.js");

document.addEventListener('keydown', function(event){
  play.turnFurry(event);
  // console.log(event.which);
});

var play = new Game();
play.startGame();
