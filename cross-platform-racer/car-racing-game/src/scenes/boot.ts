import { Scene } from 'phaser';

export default class BootScene extends Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load assets here
        this.load.image('car', 'assets/sprites/car.png');
        this.load.audio('backgroundMusic', 'assets/audio/background.mp3');
        // Add more assets as needed
    }

    create() {
        // Set up the game environment
        this.scene.start('MenuScene'); // Transition to the menu scene
    }
}