var Game = require("./game.js");

var play = new Game();
document.addEventListener('keydown', function(event){
    play.turnFurry(event);
    // console.log(event.which);
});
play.startGame();
