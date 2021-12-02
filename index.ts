import Phaser from 'phaser';
import Game from './scenes/game';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  // replace HelloWorldScene with Game in the 'scene
  scene: [Game],
};
export default new Phaser.Game(config);
