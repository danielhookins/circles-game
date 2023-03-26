import GameScene from "./scenes/gameScene.js";

// Set the game configuration
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  scene: [
    GameScene,
  ],
};

// Create the game
var game = new Phaser.Game(config);
