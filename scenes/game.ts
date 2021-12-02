import * as Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  private player: any;

  constructor() {
    super('game');
  }

  preload() {
    this.load.image(
      'background',
      'https://cdn.jsdelivr.net/gh/huymach91/infinite-runner@master/assets/bg_repeat_340x640.png'
    );
    // load as an atlas
    this.load.atlas(
      'rocket-mouse',
      'assets/rocket-mouse.png',
      'assets/rocket-mouse.json'
    );
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add.tileSprite(0, 0, width, height, 'background').setOrigin(0, 0);
  }
}
