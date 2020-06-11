// create a new scene.

let gameScene = new Phaser.Scene('Game');


// set the config of a Game.

let config = {
  type: Phaser.AUTO,
  width: 640,
  Height: 360,
  scene: gameScene
};


// create a new game, pass the config.

let game = new Phaser.Game(config);
