import * as Phaser from 'phaser';
import { RocketMouseData } from './rocket-mouse-data';

export default class Game extends Phaser.Scene {
  private player: any;

  constructor() {
    super('game');
  }

  preload() {
    this.load.image(
      'background',
      'https://raw.githubusercontent.com/huymach91/phaser-infinite-runner/master/assets/bg_repeat.png'
    );
    // load as an atlas
    this.load.atlas(
      'rocket-mouse',
      'https://raw.githubusercontent.com/huymach91/phaser-infinite-runner/master/assets/rocket-mouse.png',
      RocketMouseData
    );
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add.tileSprite(0, 0, width, height, 'background').setOrigin(0, 0);

    this.player = this.physics.add.sprite(
      width * 0.5,
      height * 0.5,
      'rocket-mouse',
      'rocketmouse_fly01.png'
    );
    this.player.body.setCollideWorldBounds(true);

    this.anims.create({
      key: 'rocket-mouse-run',
      frames: this.anims.generateFrameNames('rocket-mouse', {
        start: 1,
        end: 4,
        prefix: 'rocketmouse_run',
        zeroPad: 2,
        suffix: '.png',
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.player.play('rocket-mouse-run');

    this.physics.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height - 30);
  }
}
