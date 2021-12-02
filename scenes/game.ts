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
      'https://raw.githubusercontent.com/huymach91/phaser-infinite-runner/master/assets/rocket-mouse.png',
      'https://github.com/huymach91/phaser-infinite-runner/blob/master/assets/rocket-mouse.json'
    );
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add.tileSprite(0, 0, width, height, 'background').setOrigin(0, 0);

    this.add.sprite(
      width * 0.5, // middle of screen
      height * 0.5,
      'rocket-mouse',
      'rocketmouse_fly01.png'
    );
  }
}
