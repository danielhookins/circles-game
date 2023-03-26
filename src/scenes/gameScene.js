export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
  }
  
  create() {
    // set the background color to light blue
    this.cameras.main.setBackgroundColor(0xADD8E6);

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;
  
    // Draw the face circle
    const graphics = this.add.graphics();
    graphics.fillStyle(0xffff00, 1);
    graphics.fillCircle(centerX, centerY, 80);
  
    // Draw the eyes
    graphics.fillStyle(0x000000, 1);
    graphics.fillCircle(centerX - 25, centerY - 20, 10);
    graphics.fillCircle(centerX + 25, centerY - 20, 10);
  
    // Draw the mouth arc
    graphics.lineStyle(5, 0x000000, 1);
    graphics.beginPath();
    graphics.arc(centerX, centerY + 20, 40, Phaser.Math.DegToRad(20), Phaser.Math.DegToRad(160), false);
    graphics.strokePath();
  }
  
  update() {
  }
}