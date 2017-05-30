function furry(){
  this.x = 0;
  this.y = 0;
  this.direction = "right";
}

function coin(){
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
  console.log("Moneta na pozycji x: " + this.x + ", y: " + this.y);
}



function Game(){
  this.board = document.querySelectorAll("#board div");
  // console.log(this.board);
  this.furry = new furry();
  this.coin = new coin();
  this.score = 0;
  this.index = function(x,y){
    return x + (y * 10);

  };
  this.showFurry = function(){
    this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
  };
  this.showCoin = function(){
    this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
  };
  this.startGame = function(){
    this.idSetinterval = setInterval(function(){
      console.log("Działa!");}, 250);

  };
}

new Game().showCoin();
new Game().showFurry();
// new Game().startGame();
