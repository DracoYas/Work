// This file contains the main game logic, including the initialization of scenes, game entities, and the game loop.

import { BootScene } from './scenes/boot';
import { MenuScene } from './scenes/menu';
import { RaceScene } from './scenes/race';
import { Car } from './entities/car';
import { AIDriver } from './entities/aiDriver';

class Game {
    private currentScene: any;
    private scenes: { [key: string]: any };
    private entities: any[];

    constructor() {
        this.scenes = {
            boot: new BootScene(this),
            menu: new MenuScene(this),
            race: new RaceScene(this),
        };
        this.entities = [];
        this.initialize();
    }

    private initialize() {
        this.changeScene('boot');
    }

    public changeScene(sceneName: string) {
        if (this.currentScene) {
            this.currentScene.cleanup();
        }
        this.currentScene = this.scenes[sceneName];
        this.currentScene.initialize();
    }

    public addEntity(entity: any) {
        this.entities.push(entity);
    }

    public update(deltaTime: number) {
        if (this.currentScene) {
            this.currentScene.update(deltaTime);
        }
        this.entities.forEach(entity => entity.update(deltaTime));
    }

    public render() {
        if (this.currentScene) {
            this.currentScene.render();
        }
        this.entities.forEach(entity => entity.render());
    }
}

export const game = new Game();