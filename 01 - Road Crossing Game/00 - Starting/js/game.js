// create a new scene.

let gameScene = new Phaser.Scene('Game');

// load assets

gameScene.preload = function() {
  // Load images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');

};

// create method

gameScene.create = function() {
  // create background sprite
  let bg = this.add.sprite(0, 0, 'background');

  // change the origin of background

  bg.setPosition(640/2,360/2);

  // can grab the width + height from config
  // let gameW = this.sys.game.config.width
  // let gameH = this.sys.game.config.height
};

// set the config of a Game.

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: gameScene
};


// create a new game, pass the config.

let game = new Phaser.Game(config);
