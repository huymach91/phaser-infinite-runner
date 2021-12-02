import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', 'house/bg_repeat_340x640.png');
  }

  create() {}
}
