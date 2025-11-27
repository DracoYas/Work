// This file is the entry point of the application. It initializes the game engine, sets up the main game loop, and manages scene transitions.

import { BootScene } from './scenes/BootScene';
import { PreloadScene } from './scenes/PreloadScene';
import { GameScene } from './scenes/GameScene';

class Game {
    private currentScene: any;

    constructor() {
        this.init();
    }

    private init() {
        this.changeScene(BootScene);
        this.gameLoop();
    }

    private changeScene(SceneClass: any) {
        if (this.currentScene) {
            this.currentScene.destroy();
        }
        this.currentScene = new SceneClass(this);
    }

    private gameLoop() {
        requestAnimationFrame(() => {
            if (this.currentScene) {
                this.currentScene.update();
                this.currentScene.render();
            }
            this.gameLoop();
        });
    }
}

window.onload = () => {
    new Game();
};