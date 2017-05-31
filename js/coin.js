function coin(){
// var Coin = function(){
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
  console.log("Moneta na pozycji x: " + this.x + ", y: " + this.y);
};

module.exports = coin;
